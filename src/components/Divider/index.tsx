import { StyleSheet, View, ViewProps } from 'react-native'

type DividerProps = ViewProps

export function Divider({ ...rest }: DividerProps) {
  return <View style={styles.container} {...rest} />
}

const styles = StyleSheet.create({
  container: {
    height: 1,
    marginVertical: 24,
    width: '90%',
    backgroundColor: '#333333',
    alignItems: 'center',
  },
})
