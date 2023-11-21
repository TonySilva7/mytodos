import { StatusBar, StyleSheet, View } from 'react-native'
import { Body } from './src/components/Body'
import { Divider } from './src/components/Divider'
import { Header } from './src/components/Header'
import { TodoProvider } from './src/context'
import { useTheme } from './src/hooks/useTheme'

export default function App() {
  const defTheme = useTheme()

  return (
    <View style={styles.container} onLayout={defTheme?.onLayout}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <TodoProvider>
        <Header />
        <Divider />
        <Body />
      </TodoProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
  },
})
