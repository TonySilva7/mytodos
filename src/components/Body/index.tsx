import { useContext } from 'react'
import { View } from 'react-native'
import { TodoContext } from '../../context'
import { EmptyList } from '../EmptyList'
import { TodoList } from '../TodoList'
import { BodyProps } from './types'

export function Body({ ...rest }: BodyProps) {
  const { todos } = useContext(TodoContext)

  const hasItems = todos.length > 0
  return <View {...rest}>{hasItems ? <TodoList /> : <EmptyList />}</View>
}
