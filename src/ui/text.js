
import React from 'react'
import { Text as RNText } from 'react-native'

import { theme } from './theme'

const getColorStyle = ({
  color,
  bright,
  invert,
  transparent
}) => {
  const c = theme.colors[color] || theme.colors.text
  const p = c[bright ? 'bright' : 'normal']
  const s = theme.tokens.bgColor

  return {
    backgroundColor: transparent ? 'none' : invert ? p : s,
    color: invert ? s : p
  }
}

export const Text = ({
  style,
  color,
  bold,
  invert,
  transparent,
  children
}) => {
  return (
    <RNText style={[
      getColorStyle({
        color,
        bright: bold,
        invert,
        transparent
      }),
      style,
      {
        fontFamily: 'Hasklig-Medium'
      }
    ]}
    >
      {children}
    </RNText>
  )
}
Text.defaultProps = {
  bold: false,
  color: 'text',
  style: null,
  invert: false
}
