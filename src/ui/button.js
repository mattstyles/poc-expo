
import React from 'react'
import { Pressable } from 'react-native'

import { Border } from './border'
import { Text } from './text'
import { withTheme } from './theme'

const ButtonBorder = withTheme(
  Border,
  (theme, props) => {
    return {
      backgroundColor: props.pressed ? theme.colors[props.color].bright : 'transparent'
    }
  }
)

export const CoreButton = ({ children, onPress, style, color }) => {
  return (
    <Pressable onPress={onPress} style={style}>
      {({ pressed }) => (
        <ButtonBorder pressed={pressed} color={color}>
          <Text bold color={color} invert={pressed}>{children}</Text>
        </ButtonBorder>
      )}
    </Pressable>
  )
}

export const Button = withTheme(
  CoreButton,
  (theme, props) => ({
    flex: props.stretch ? 1 : 'auto'
  })
)

Button.defaultProps = {
  color: 'white',
  onPress: () => {},
  style: {},
  stretch: false
}
