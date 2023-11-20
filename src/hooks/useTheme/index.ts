import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

export type ITheme = {
  colors: {
    blueDark: string
    blue: string
    purpleDark: string
    purple: string
    gray700: string
    gray600: string
    gray500: string
    gray400: string
    gray300: string
    gray200: string
    gray100: string
    danger: string
  }
  fonts: {
    family: {
      interNormal: string
      interBold: string
    }
    sizes: {
      regular: number
      medium: number
      large: number
    }
    lineHeight: string
  }
}

type IReturn = {
  theme: ITheme
  onLayout: () => void
}

export const useTheme = (): IReturn | null => {
  const [fontsLoaded] = useFonts({
    InterNormal: require('../../../assets/fonts/Inter/Inter-Regular.ttf'),
    InterBold: require('../../../assets/fonts/Inter/Inter-Bold.ttf'),
  })

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  const theme: ITheme = {
    colors: {
      blueDark: '#1E6F9F',
      blue: '#4EA8DE',
      purpleDark: '#5E60CE',
      purple: '#8284FA',
      gray700: '#0D0D0D',
      gray600: '#1A1A1A',
      gray500: '#262626',
      gray400: '#333333',
      gray300: '#808080',
      gray200: '#d9d9d9',
      gray100: '#f2f2f2',
      danger: '#E25858',
    },
    fonts: {
      family: {
        interNormal: 'InterNormal',
        interBold: 'InterBold',
      },
      sizes: {
        regular: 12,
        medium: 14,
        large: 16,
      },
      lineHeight: '140%',
    },
  }

  return {
    theme,
    onLayout,
  }
}
