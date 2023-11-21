import { StyleSheet } from 'react-native'
import { ITheme } from '../../hooks/useTheme'

export const styles = (theme?: ITheme, isCompleted?: boolean) => {
  if (theme) {
    const styles = StyleSheet.create({
      container: {
        width: 324,
        height: 67,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.gray500,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        marginBottom: 8,
        columnGap: 8,
      },
      title: {
        color: isCompleted ? theme.colors.gray300 : theme.colors.gray100,
        textDecorationLine: isCompleted ? 'line-through' : 'none',
        fontSize: theme.fonts.sizes.medium,
        flex: 1,
        flexWrap: 'wrap',
      },
    })

    return styles
  }
  return undefined
}
