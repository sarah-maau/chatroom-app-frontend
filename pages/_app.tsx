import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import type { AppProps } from 'next/app'
import localesFr from '../locales/fr.json'
import localesEn from '../locales/en.json'
import {DefaultTheme, ThemeProvider} from 'styled-components'
import '../public/css/minireset.css'
import { DEFAULT_LOCALE } from '../core/constants'
import {darkTheme, lightTheme} from '../theme/Theme'
import { createDependencies } from '../core/application/dependencies'
import { AppProviderContext } from '../core/application/contexts/AppProviderContext'
import GlobalStyle from '../components/layout/GlobalStyle'
import { UserThemeContext } from '../core/application/contexts/UserThemeContext'



const App = ({ Component, pageProps }: AppProps) => {
    const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(lightTheme)

    return (
      <UserThemeContext.Provider
          value={{
              currentTheme,
              setCurrentTheme
          }}>
    <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
      <AppProviderContext.Provider value={createDependencies()}>
          <Component {...pageProps} />
      </AppProviderContext.Provider>
    </ThemeProvider>
      </UserThemeContext.Provider>

  )
}
export default App


