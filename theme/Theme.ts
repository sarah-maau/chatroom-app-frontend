import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export type ThemeName = 'common' | 'light' | 'dark'
  export interface DefaultTheme {
    name: ThemeName
    fontFamily?: {
      title?: string
      standard?: string
    }
    textColor?: {
      main?: string
      secondary?: string
    }
    backgroundColor?: string
    backgroundRoomSection?: string
    welcomePage?: {
      background?: string
      border?: string
    },
    fontSize: {
      small?: string
      normal?: string
      big?: string
      veryBig?: string
    }
    fontWeight: {
      lightWeight?: number
      normalWeight?: number
      semiWeight?: number
      boldWeight?: number
    }
    messageBar?: {
      placeholderColor?:string
      textColor?: string
      backgroundColor?: string
      borderColor?: string
    }
    room?: {
      backgroundColor?: string
      backgroundColorOnHover?: string
      textColor?: string
      textColorOnHover?: string
      innerInputColor?: string
      outerInputColor?:string
    }
    buttonColor?: string
    toggleBorder?:string
    gradient?:string
    commonGradient?: string
  }
}

export const commonTheme: DefaultTheme = {
  name: 'common',
  fontFamily: {
    title: "'Paytone One', sans-serif",
    standard: "'Rubik', sans-serif"
  },
  fontSize: {
    small: '1.5rem',
    normal: '1.7rem',
    big: '2.3rem',
    veryBig: '8rem'
  },
  fontWeight: {
    lightWeight: 300,
    normalWeight: 400,
    semiWeight: 500,
    boldWeight: 600
  },
  buttonColor: '#5766F2',
  commonGradient:'linear-gradient(90deg, #3F70DD 0%, #B377F3 100%)'
}

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  name: 'light',
  textColor: {
    main: '#2C3239',
    secondary: '#A6A4AE'
  },
  backgroundColor:'#FFFFFF',
  backgroundRoomSection:'#FAFAFA',
  welcomePage: {
    background: '#FAFAFA',
    border: '1px solid #EAEAEA'
  },
  messageBar: {
    placeholderColor:'#B9BBBE',
    textColor: '#4F5660',
    backgroundColor: '#FAFAFA',
    borderColor: '#B9BBBE'
  },
  room: {
    backgroundColor: '#F2F3F5',
    backgroundColorOnHover: '#D3D7DB',
    textColor:'#666666',
    textColorOnHover: '#4F5660',
    outerInputColor: '#E3E5E8',
    innerInputColor:'#F2F3F5'
  },
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);'
}

export const darkTheme: DefaultTheme = {
  ...commonTheme,
  name: 'dark',
  textColor: {
    main: '#EEF2F6',
    secondary: '#7C849A'
  },
  backgroundColor: '#000000',
  backgroundRoomSection: '#111111',
  welcomePage: {
    background: '#111111',
    border: '1px solid #333333'
  },
  messageBar: {
    placeholderColor:'#B9BBBE',
    textColor: '#DCDDDE',
    backgroundColor: '#111111',
    borderColor:'#B9BBBE'
  },
  room: {
    backgroundColor: '#2F3137',
    backgroundColorOnHover: '#33373B',
    textColor:'#B9BBBE',
    textColorOnHover: '#DCDDDE',
    outerInputColor: '#202225',
    innerInputColor:'#72767D'
  },
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(-225deg, #FF3CAC 0%, #562B7C 23%, #2B86C5 100%);'
}
