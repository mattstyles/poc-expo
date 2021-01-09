
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import { ThemeProvider, useTheme, theme, withTheme } from '../ui/theme'
import { Text } from '../ui/text'

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

const App = () => {
  const theme = useTheme()

  return (
    <View style={{
      flex: 1,
      color: theme.colors.text.normal,
      backgroundColor: theme.tokens.bgColor,
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <Text>Hello world</Text>
      <Box><Text>More stuff</Text></Box>
    </View>
  )
}

export const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
      <StatusBar />
    </ThemeProvider>
  )
}
