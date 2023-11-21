import { useContext, useState } from 'react'
import { Alert, StyleSheet, Text, View, ViewProps } from 'react-native'
import { TodoContext } from '../../context'
import { ITheme, useTheme } from '../../hooks/useTheme'
import { Button } from '../Button'
import { Input } from '../Input'
import { Logo } from '../Logo'

type HeaderProps = ViewProps

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
        <View style={styles(theme?.theme)?.createContainer}>
          <Text style={styles(theme?.theme)?.textCreate}>Criadas</Text>
          <View style={styles(theme?.theme)?.numberContainer}>
            <Text style={styles(theme?.theme)?.numberContent}>{total}</Text>
          </View>
        </View>

        <View style={styles(theme?.theme)?.createContainer}>
          <Text
            style={{
              ...styles(theme?.theme)?.textCreate,
              color: theme?.theme.colors.purple,
            }}
          >
            Concluídas
          </Text>
          <View style={styles(theme?.theme)?.numberContainer}>
            <Text style={styles(theme?.theme)?.numberContent}>{done}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = (theme?: ITheme) => {
  if (theme) {
    const style = StyleSheet.create({
      mainContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      },

      topContainer: {
        backgroundColor: theme.colors.gray700,
        width: '100%',
        height: 163,
        paddingTop: 64,
        alignItems: 'center',
      },

      inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        columnGap: 4,
        width: '100%',
        bottom: -40,
      },

      resumeContainer: {
        width: 327,
        marginTop: 62,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      createContainer: {
        flexDirection: 'row',
        columnGap: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },

      textCreate: {
        color: theme.colors.blue,
        fontSize: theme.fonts.sizes.medium,
        fontFamily: theme.fonts.family.interBold,
      },
      numberContainer: {
        backgroundColor: theme.colors.gray400,
        paddingVertical: 2,
        paddingHorizontal: 6,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      numberContent: {
        fontSize: theme.fonts.sizes.medium,
        fontFamily: theme.fonts.family.interBold,
        color: theme.colors.gray200,
      },
      finishContainer: {},
    })

    return style
  }
  return undefined
}
