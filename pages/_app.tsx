import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import type { AppProps } from 'next/app'
import localesFr from '../locales/fr.json'
import localesEn from '../locales/en.json'
import { ThemeProvider } from 'styled-components'
import '../public/css/minireset.css'
import { DEFAULT_LOCALE } from '../core/constants'
import { lightTheme } from '../themes/Theme'
import { createDependencies } from '../core/application/dependencies'
import { AppProviderContext } from '../core/application/contexts/AppProviderContext'
import GlobalStyle from '../layout/GlobalStyle'


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppProviderContext.Provider value={createDependencies()}>
        <GlobalStyle />
          <Component {...pageProps} />
      </AppProviderContext.Provider>
    </ThemeProvider>
  )
}
export default App


