import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

export type InputProps = ViewProps & {
  value?: string
  setValue?: (value: string) => void
}
