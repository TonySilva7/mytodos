import Icon from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { styles } from './styles'
import { IButton } from './types'

export function Button({ children, ...rest }: IButton) {
  const theme = useTheme()
  return (
    <TouchableOpacity
      style={styles(theme?.theme)?.container}
      onLayout={theme?.onLayout}
      {...rest}
    >
      {children || <Icon name="add-circle-outline" size={24} color="white" />}
    </TouchableOpacity>
  )
}
