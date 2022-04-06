import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { RouterContext } from "next/dist/shared/lib/router-context"


import { darkTheme, lightTheme } from '../theme/Theme'
import GlobalStyle from '../components/layout/GlobalStyle'

const themes = [
  { name: 'Light', ...lightTheme },
  { name: 'Dark', ...darkTheme }
]


addDecorator(withThemesProvider(themes, ThemeProvider))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(backgroundColor|textColor)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <div>
        <GlobalStyle />
        <Story />
    </div>
  )
]
