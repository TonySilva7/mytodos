import { StyleSheet, TextInput, View, ViewProps } from 'react-native'
import { ITheme, useTheme } from '../../hooks/useTheme'

type InputProps = ViewProps & {
  value?: string
  setValue?: (value: string) => void
}

export function Input({ value, setValue, ...rest }: InputProps) {
  const theme = useTheme()
  return (
    <View
      onLayout={theme?.onLayout}
      style={styles(theme?.theme)?.container}
      {...rest}
    >
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme?.theme.colors.gray300}
        value={value}
        onChangeText={setValue}
        style={styles(theme?.theme)?.input}
      />
    </View>
  )
}

const styles = (theme?: ITheme) => {
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
