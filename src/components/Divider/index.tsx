import { View } from 'react-native'
import { styles } from './styles'
import { DividerProps } from './types'

export function Divider({ ...rest }: DividerProps) {
  return <View style={styles.container} {...rest} />
}
