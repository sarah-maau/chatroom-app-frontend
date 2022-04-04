import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export type ThemeName = 'common' | 'light' | 'dark'
  export interface DefaultTheme {
    name: ThemeName
    textColor?: {
      main?: string
      secondary?: string
    }
    backgroundColor?: string
    fontSize: {
      small?: string
      normal?: string
      big?: string
    }
    weight: {
      lightWeight?: number
      normalWeight?: number
      boldWeight?: number
    }
  }
}

export const commonTheme: DefaultTheme = {
  name: 'common',
  fontSize: {
    small: '1.5rem',
    normal: '1.7rem',
    big: '2.3rem',
  },
  weight: {
    lightWeight: 300,
    normalWeight: 400,
    boldWeight: 700
  }
}

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  name: 'light',
  textColor: {
    main: '#2C3239',
    secondary: '#A6A4AE'
  },
  backgroundColor:'#F4F6FF',
}

export const darkTheme: DefaultTheme = {
  ...commonTheme,
  name: 'dark',
  textColor: {
    main: '#EEF2F6',
    secondary: '#7C849A'
  },
  backgroundColor: '#1D1F2A',
  }
