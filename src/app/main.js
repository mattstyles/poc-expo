
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text as RNText } from 'react-native'
import { useFonts } from 'expo-font'

import { ThemeProvider, theme, withTheme } from '../ui/theme'
import { Text } from '../ui/text'
import { center } from '../ui/style'

const padding = () => ({
  padding: 16
})

const Box = withTheme(
  View,
  theme => ({
    backgroundColor: theme.colors.magenta.normal
  }),
  padding
)

const Layout = withTheme(View,
  center,
  () => ({
    flex: 1,
    fontFamily: 'Hasklig-Medium'
  }),
  theme => ({
    color: theme.colors.text.normal,
    backgroundColor: theme.tokens.bgColor
  })
)

const App = () => {
  return (
    <Layout>
      <Text>Hello world</Text>
      <Box><Text invert color='magenta'>More stuff</Text></Box>
    </Layout>
  )
}

export const Main = () => {
  const [loaded] = useFonts({
    'Hasklig-Medium': require('../../assets/fonts/Hasklig-Medium.otf')
  })

  if (!loaded) {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <RNText>Loading...</RNText>
        </Layout>
        <StatusBar hidden />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <App />
      <StatusBar hidden />
    </ThemeProvider>
  )
}
