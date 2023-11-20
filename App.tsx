import { StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from './src/hooks/useTheme';
import { Logo } from './src/components/Logo';
import { Input } from './src/components/Input';
import { Button } from './src/components/Button';

export default function App() {
  const  defTheme = useTheme();

  return (
    <SafeAreaView style={styles.container} onLayout={defTheme?.onLayout} >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Logo />
      <Input />
      <Button>
      <Text>+</Text>
      </Button>
      {/* <TouchableOpacity>
        <Text>KKKK</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
  },
});
