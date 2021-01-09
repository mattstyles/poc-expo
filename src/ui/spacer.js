
import { View } from 'react-native'

import { withTheme } from '../ui/theme'

export const Spacer = withTheme(
  View,
  (theme, props) => {
    const style = {}

    if (props.p) {
      style.padding = props.p
    }

    if (props.px) {
      style.paddingHorizontal = props.px
    }

    if (props.py) {
      style.paddingVertical = props.py
    }

    return style
  }
)
