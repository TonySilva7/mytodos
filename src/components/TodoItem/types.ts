import { ViewProps } from 'react-native'

export type ITodo = {
  id: string
  title: string
  isCompleted: boolean
}

export type TodoItemProps = ViewProps & ITodo
