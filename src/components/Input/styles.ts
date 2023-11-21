import { StyleSheet } from 'react-native'
import { ITheme } from '../../hooks/useTheme'

export const styles = (theme?: ITheme) => {
  if (theme) {
    const style = StyleSheet.create({
      container: {
        width: 271,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 8,
      },
      input: {
        height: 54,
        width: 271,
        borderRadius: 12,
        backgroundColor: theme.colors.gray500,
        color: theme.colors.gray100,
        padding: 12,
      },
    })

    return style
  }
  return undefined
}
