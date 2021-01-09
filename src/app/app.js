
import React from 'react'
import { View, Button } from 'react-native'
import { SimpleComponentRouter } from 'simple-component-router'
import { atom, useRecoilState } from 'recoil'

import { withTheme } from '../ui/theme'
import { LayoutCenter } from '../ui/layout'
import { Text } from '../ui/text'

import { Navigation } from './navigation'

const routeState = atom({
  key: 'dummy::route',
  default: {
    current: 'home'
  }
})

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

const Home = () => {
  const [, setRoute] = useRecoilState(routeState)

  return (
    <View style={{ paddingTop: 16 }}>
      <Text color='green'>I am home.</Text>
      <Button title='Go out somewhere' onPress={() => setRoute({ current: 'else' })} />
    </View>
  )
}

const SomewhereElse = () => {
  const [, setRoute] = useRecoilState(routeState)

  return (
    <View style={{ paddingTop: 16 }}>
      <Text color='red'>I am out.</Text>
      <Button title='Go home.' onPress={() => setRoute({ current: 'home' })} />
    </View>
  )
}

export const App = () => {
  const [route] = useRecoilState(routeState)

  return (
    <LayoutCenter>
      <Text>Hello world</Text>
      <Box><Text color='magenta'> More stuff </Text></Box>
      <SimpleComponentRouter match={route.current}>
        <Home match='home' />
        <SomewhereElse match='else' />
      </SimpleComponentRouter>
      <Box />
      <Navigation />
    </LayoutCenter>
  )
}
