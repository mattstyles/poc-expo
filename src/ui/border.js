
import { View } from 'react-native'

import { withTheme } from './theme'

export const Border = withTheme(
  View,
  (theme, props) => {
    const color = theme.colors[props.color]

    return {
      margin: 7,
      padding: 7,
      borderColor: color.normal,
      borderStyle: 'solid',
      borderWidth: 2
    }
  }
)

Border.defaultProps = {
  color: 'white'
}
