import { ViewProps } from 'react-native'

export type ResumeLabelProps = ViewProps & {
  total: number
  description: string
  titleColor: 'blue' | 'purple'
}
