
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Text } from './src/ui/text'
import { Test } from './src/ui/test'

export default function App () {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text>
      <Text color='magenta' invert>Open up App.js to start working on your app</Text>
      <Text>Outer <Text bold>Bold text</Text> shell</Text>
      <Test />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fafbff',
    backgroundColor: '#303236',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fafbff'
  }
})
