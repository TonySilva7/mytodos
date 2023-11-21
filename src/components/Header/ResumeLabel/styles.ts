import { StyleSheet } from 'react-native'
import { ITheme } from '../../../hooks/useTheme'

export const styles = (theme?: ITheme, titleColor?: string) => {
  const colorOfTitle =
    titleColor === 'blue' ? theme?.colors.blue : theme?.colors.purple

  if (theme) {
    const style = StyleSheet.create({
      titleContainer: {
        flexDirection: 'row',
        columnGap: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },

      titleContent: {
        color: colorOfTitle,
        fontSize: theme.fonts.sizes.medium,
        fontFamily: theme.fonts.family.interBold,
      },
      numberContainer: {
        backgroundColor: theme.colors.gray400,
        paddingVertical: 2,
        paddingHorizontal: 6,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      numberContent: {
        fontSize: theme.fonts.sizes.medium,
        fontFamily: theme.fonts.family.interBold,
        color: theme.colors.gray200,
      },
    })

    return style
  }
  return undefined
}
