import Icon from '@expo/vector-icons/Ionicons'
import { Text, View } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { EmptyListProps } from './types'

export function EmptyList({ ...rest }: EmptyListProps) {
  const theme = useTheme()
  return (
    <View
      onLayout={theme?.onLayout}
      style={{
        alignItems: 'center',
        marginTop: 32,
      }}
      {...rest}
    >
      <Icon
        name="clipboard-outline"
        size={90}
        color={theme?.theme.colors.gray400}
      />
      <Text
        style={{
          marginTop: 16,
          color: theme?.theme.colors.gray300,
          fontFamily: theme?.theme.fonts.family.interBold,
        }}
      >
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={{ color: theme?.theme.colors.gray300 }}>
        Crie tarefa e organize seus itens a fazer
      </Text>
    </View>
  )
}
