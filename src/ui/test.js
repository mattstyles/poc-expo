
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from './text'

const layout = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 16
  }
})

export const Test = () => {
  return (
    <View style={layout.row}>
      <Text invert>Hello</Text>
      <Text bright color='cyan'> World</Text>
    </View>
  )
}
