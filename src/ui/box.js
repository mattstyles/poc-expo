
import { View } from 'react-native'

import { withTheme } from './theme'

export const Box = withTheme(
  View,
  (theme, props) => ({
    display: 'flex',
    flexDirection: props.row ? 'row' : 'column'
  })
)
Box.defaultProps = {
  row: false
}
