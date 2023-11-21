import { TextInput, View } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { styles } from './styles'
import { InputProps } from './types'

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
