import React from 'react'

import { render } from '@testing-library/react'

import { IntlProvider } from 'react-intl'
import Home from '../../pages'


describe('index', () => {
  const locale = 'fr'
  const messages = {
    'HomePage.Title': 'welcome'
  }
  it('Should display the index page', () => {
    const { getByText } = render(<IntlProvider locale={locale} messages={messages}>
      <Home />
    </IntlProvider>)
    expect(getByText('welcome')).toBeDefined()
  })
})
