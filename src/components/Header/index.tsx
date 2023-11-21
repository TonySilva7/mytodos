import { useContext, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { TodoContext } from '../../context'
import { useTheme } from '../../hooks/useTheme'
import { Button } from '../Button'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { styles } from './styles'
import { HeaderProps } from './types'
import { ResumeLabel } from './ResumeLabel'

export function Header({ ...rest }: HeaderProps) {
  const [text, setText] = useState<string>('')
  const { addTodo, total, done } = useContext(TodoContext)
  const theme = useTheme()

  const handleAddToDo = () => {
    if (!text) {
      Alert.alert('Opa!', 'Você precisa digitar algo para adicionar uma tarefa')
      return
    }
    const todo = {
      id: Math.random().toString(),
      title: text,
      isCompleted: false,
    }
    addTodo(todo)
    setText('')
  }

  return (
    <View
      style={styles(theme?.theme)?.mainContainer}
      onLayout={theme?.onLayout}
      {...rest}
    >
      <View style={styles(theme?.theme)?.topContainer}>
        <Logo />
        <View style={styles(theme?.theme)?.inputContainer}>
          <Input value={text} setValue={setText} />
          <Button onPress={handleAddToDo} />
        </View>
      </View>
      <View style={styles(theme?.theme)?.resumeContainer}>
        <ResumeLabel total={total} description="Criadas" titleColor="blue" />
        <ResumeLabel total={done} description="Criadas" titleColor="purple" />
      </View>
    </View>
  )
}
