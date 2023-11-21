import React, { useContext } from 'react'
import { FlatList, Text } from 'react-native'
import { TodoContext } from '../../context'
import { TodoItem } from '../TodoItem'

export function TodoList() {
  const { todos } = useContext(TodoContext)

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem
          id={item.id}
          title={item.title}
          isCompleted={item.isCompleted}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <Text>Nenhum participante adicionado</Text>}
    />
  )
}
