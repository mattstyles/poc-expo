
import React from 'react'
import { View } from 'react-native'

import { withTheme } from '../ui/theme'
import { LayoutCenter } from '../ui/layout'
import { Text } from '../ui/text'

import { Navigation } from './navigation'

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

export const App = () => {
  return (
    <LayoutCenter>
      <Text>Hello world</Text>
      <Box><Text color='magenta'> More stuff </Text></Box>
      <Navigation />
    </LayoutCenter>
  )
}
