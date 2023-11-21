import { StyleSheet } from 'react-native'
import { ITheme } from '../../hooks/useTheme'

export const styles = (theme?: ITheme) => {
  if (theme) {
    const style = StyleSheet.create({
      mainContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      },

      topContainer: {
        backgroundColor: theme.colors.gray700,
        width: '100%',
        height: 163,
        paddingTop: 64,
        alignItems: 'center',
      },

      inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        columnGap: 4,
        width: '100%',
        bottom: -40,
      },

      resumeContainer: {
        width: 327,
        marginTop: 62,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    })

    return style
  }
  return undefined
}
