
import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { SimpleComponentRouter as Router } from 'simple-component-router'
import { View, Button } from 'react-native'

import { Text } from '../ui/text'
import { routes } from '../core/routes'
import { createRoute, pushRoute, popRoute, getRoute, routeStack } from '../core/navigation'

const Home = () => {
  const stack = useRecoilValue(routeStack)
  const setRoute = useSetRecoilState(pushRoute)
  const pop = useSetRecoilState(popRoute)

  return (
    <View style={{ paddingTop: 16 }}>
      <Text color='green'>I am home.</Text>
      <Button title='Go out somewhere' onPress={() => setRoute(createRoute(routes.some))} />
      {stack.length > 1 && <Button title='Go back.' onPress={pop} />}
    </View>
  )
}

const SomewhereElse = () => {
  const stack = useRecoilValue(routeStack)
  const push = useSetRecoilState(pushRoute)
  const pop = useSetRecoilState(popRoute)

  return (
    <View style={{ paddingTop: 16 }}>
      <Text color='red'>I am out.</Text>
      <Button title='Go home.' onPress={() => push(routes.home)} />
      {stack.length > 0 && <Button title='Go back.' onPress={pop} />}
    </View>
  )
}

export const Navigation = () => {
  const route = useRecoilValue(getRoute)

  return (
    <Router match={route.path}>
      <Home match={routes.home} />
      <SomewhereElse match={routes.some} />
    </Router>
  )
}
