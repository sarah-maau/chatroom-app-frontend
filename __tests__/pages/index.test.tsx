import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../pages'


describe('index', () => {

  it('Should display the index page', () => {
    const { getByText } = render(
      <Home />)
    expect(getByText('welcome')).toBeDefined()
  })
})
