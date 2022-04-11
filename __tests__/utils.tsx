import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

export interface IDefaultWrapperProps {
    theme: DefaultTheme
}

const DefaultWrapper: React.FC<IDefaultWrapperProps> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export {
  DefaultWrapper
}
