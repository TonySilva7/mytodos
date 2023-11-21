import { Alert, StyleSheet, Text, View, ViewProps } from 'react-native'
import { ITheme, useTheme } from '../../hooks/useTheme'
import Icon from '@expo/vector-icons/Ionicons'
import { useContext } from 'react'
import { TodoContext } from '../../context'

export type ITodo = {
  id: string
  title: string
  isCompleted: boolean
}

export type TodoItemProps = ViewProps & ITodo

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

const styles = (theme?: ITheme, isCompleted?: boolean) => {
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
