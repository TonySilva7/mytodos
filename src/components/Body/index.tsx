import { View, ViewProps } from 'react-native'
import { EmptyList } from '../EmptyList'
import { TodoList } from '../TodoList'
import { useContext } from 'react'
import { TodoContext } from '../../context'

type BodyProps = ViewProps

export function Body({ ...rest }: BodyProps) {
  const { todos } = useContext(TodoContext)

  const hasItems = todos.length > 0
  return <View {...rest}>{hasItems ? <TodoList /> : <EmptyList />}</View>
}
