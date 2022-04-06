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
    messageBar?: {
      placeholderColor?:string
      textColor?: string
      backgroundColor?: string
      borderColor?: string
    }
    room?: {
      activeBorder?:string
      backgroundColor?: string
      backgroundColorOnHover?: string
      textColor?: string
      textColorOnHover?: string
    }
    buttonColor?: string
    toggleBorder?:string
    gradient?:string
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
  messageBar: {
    placeholderColor:'#B9BBBE',
    textColor: '#4F5660',
    backgroundColor: '#EBEDEF',
    borderColor: '#B9BBBE',
  },
  buttonColor: '#0399ED',
  room: {
    activeBorder:'linear-gradient(90deg, #0575E6 0%, #00F260 100%)',
    backgroundColor: '#F2F3F5',
    backgroundColorOnHover: '#D3D7DB',
    textColor:'#B9BBBE',
    textColorOnHover: '#4F5660',
  },
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);',
}

export const darkTheme: DefaultTheme = {
  ...commonTheme,
  name: 'dark',
  textColor: {
    main: '#EEF2F6',
    secondary: '#7C849A'
  },
  backgroundColor: '#1D1F2A',
  messageBar: {
    placeholderColor:'#B9BBBE',
    textColor: '#DCDDDE',
    backgroundColor: '#40444B',
    borderColor:'#B9BBBE',
  },
  room: {
    activeBorder:'linear-gradient(90deg, #3F70DD 0%, #B377F3 100%)',
    backgroundColor: '#2F3137',
    backgroundColorOnHover: '#33373B',
    textColor:'#B9BBBE',
    textColorOnHover: '#DCDDDE',
  },
  buttonColor: '#953DC3',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(-225deg, #FF3CAC 0%, #562B7C 23%, #2B86C5 100%);'
  }
