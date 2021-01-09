
import { SafeAreaView } from 'react-native'

import { withTheme } from './theme'
import { center } from './style'

export const LayoutCenter = withTheme(SafeAreaView,
  center,
  () => ({
    flex: 1,
    fontFamily: 'Hasklig-Medium'
  }),
  theme => ({
    color: theme.colors.text.normal,
    backgroundColor: theme.tokens.bgColor
  })
)
