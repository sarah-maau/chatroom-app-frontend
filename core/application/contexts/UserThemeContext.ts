import React from 'react'
import { DefaultTheme } from 'styled-components'

export interface IUserThemeContext {
    currentTheme?: DefaultTheme
    setCurrentTheme: (theme: DefaultTheme) => void
}

export const UserThemeContext = React.createContext<IUserThemeContext>({
    setCurrentTheme: () => console.warn('setCurrentTheme is not implemented in the current provider')
})

export const useUserThemeContext = (): IUserThemeContext => React.useContext(UserThemeContext)
