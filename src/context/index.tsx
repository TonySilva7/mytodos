import React, { createContext, useState } from 'react'
import { ITodo } from '../components/TodoItem/types'

type ITodos = {
  todos: ITodo[]
  addTodo: (todo: ITodo) => void
  removeTodo: (id: string) => void
  handleCheck: (id: string) => void
  done: number
  total: number
}

const initialContext: ITodos = {
  todos: [],
  done: 0,
  total: 0,
  addTodo: () => null,
  removeTodo: () => null,
  handleCheck: () => null,
}

export const TodoContext = createContext(initialContext)

export function TodoProvider({ children }: React.PropsWithChildren<object>) {
  const [todos, setTodos] = useState<ITodo[]>([])

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo])
  }

  const handleCheck = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })

    setTodos(newTodos)
  }

  const total = todos.length
  const done = todos.filter((todo) => todo.isCompleted).length

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, handleCheck, total, done }}
    >
      {children}
    </TodoContext.Provider>
  )
}
