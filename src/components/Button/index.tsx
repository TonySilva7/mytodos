// import { PlusCircle } from 'phosphor-react-native'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { ITheme, useTheme } from '../../hooks/useTheme'
import Icon from '@expo/vector-icons/Ionicons'

type IButton = TouchableOpacityProps

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

const styles = (theme?: ITheme) => {
  if (theme) {
    const style = StyleSheet.create({
      container: {
        width: 52,
        height: 52,
        borderRadius: 8,
        backgroundColor: theme.colors.blue,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    })

    return style
  }
  return undefined
}
