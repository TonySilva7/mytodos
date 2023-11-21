import { StyleSheet } from 'react-native'
import { ITheme } from '../../hooks/useTheme'

export const styles = (theme?: ITheme) => {
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
