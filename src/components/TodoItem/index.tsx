import Icon from '@expo/vector-icons/Ionicons'
import { useContext } from 'react'
import { Alert, Text, View } from 'react-native'
import { TodoContext } from '../../context'
import { useTheme } from '../../hooks/useTheme'
import { styles } from './styles'
import { TodoItemProps } from './types'

export function TodoItem({ id, title, isCompleted, ...rest }: TodoItemProps) {
  const theme = useTheme()
  const { removeTodo, handleCheck } = useContext(TodoContext)

  const handleRemoveTodo = (id: string) => {
    Alert.alert('Opa!', 'Você deseja remover esta tarefa?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => removeTodo(id),
      },
    ])
  }

  return (
    <View style={styles(theme?.theme)?.container} {...rest}>
      <Icon
        name={
          isCompleted ? 'checkmark-circle-sharp' : 'radio-button-off-outline'
        }
        size={20}
        color={
          isCompleted ? theme?.theme.colors.purple : theme?.theme.colors.blue
        }
        onPress={() => handleCheck(id)}
      />
      <Text style={styles(theme?.theme, isCompleted)?.title}>{title}</Text>
      <Icon
        name="trash-outline"
        size={20}
        color={theme?.theme.colors.gray300}
        onPress={() => handleRemoveTodo(id)}
      />
    </View>
  )
}
