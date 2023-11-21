import { Text, View } from 'react-native'
import { useTheme } from '../../../hooks/useTheme'
import { styles } from './styles'
import { ResumeLabelProps } from './types'

export function ResumeLabel({
  description,
  titleColor,
  total,
  ...rest
}: ResumeLabelProps) {
  const theme = useTheme()
  return (
    <View style={styles(theme?.theme)?.titleContainer} {...rest}>
      <Text style={styles(theme?.theme, titleColor)?.titleContent}>
        {description}
      </Text>
      <View style={styles(theme?.theme)?.numberContainer}>
        <Text style={styles(theme?.theme)?.numberContent}>{total}</Text>
      </View>
    </View>
  )
}
