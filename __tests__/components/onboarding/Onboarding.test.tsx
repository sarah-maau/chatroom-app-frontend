import React from 'react'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { expect } from '@jest/globals'

import { lightTheme } from '../../../theme/Theme'
import { DefaultWrapper } from '../../utils'
import Onboarding from '../../../components/onboarding/Onboarding'

afterEach(cleanup)

const theme = lightTheme

describe('Onboarding', () => {

  it('Should render correctly', () => {
    const { getByTestId } = render(
      <DefaultWrapper theme={theme} >
        <Onboarding />
      </DefaultWrapper>)


    const usernameInputField = getByTestId('username-input')
    const submitButton = getByTestId('submit-button')

    expect(usernameInputField).not.toBeNull()
    expect(submitButton).not.toBeNull()

  })

  it('Should refuse an incorrect username', () => {
    const usernameValue = 'p'
    const onSubmit = jest.fn()

    const { getByTestId } = render(
      <DefaultWrapper theme={theme} >
        <Onboarding  />
      </DefaultWrapper>)

    const usernameInputField = getByTestId('username-input')
    const submitButton = getByTestId('submit-button')

    expect(usernameInputField).not.toBeNull()
    expect(submitButton).not.toBeNull()
    expect(submitButton).toBeDefined()

    fireEvent.change(usernameInputField, { target: { value: usernameValue } })
    expect(usernameInputField).toHaveValue(usernameValue)

    fireEvent.click(submitButton)

    waitFor(() => {
      expect(getByTestId('username-error')).not.toBeNull()
    })
    expect(onSubmit).not.toHaveBeenCalled()

  })

  it('Should refuse empty username',  () => {
    const usernameValue = ''
    const onSubmit = jest.fn()

    const { getByTestId } = render(
      <DefaultWrapper theme={theme} >
        <Onboarding  />
      </DefaultWrapper>)


    const usernameInputField = getByTestId('username-input')
    const submitButton = getByTestId('submit-button')

    expect(usernameInputField).not.toBeNull()
    expect(submitButton).not.toBeNull()

    fireEvent.change(usernameInputField, { target: { value: usernameValue } })
    expect(usernameInputField).toHaveValue(usernameValue)

    fireEvent.click(submitButton)

    waitFor(() => {
      expect(getByTestId('username-error')).not.toBeNull()
    })
    expect(onSubmit).not.toHaveBeenCalled()
  })

})
