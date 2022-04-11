import React from 'react'
import { Chance } from 'chance'
import { render } from '@testing-library/react'
import { expect } from '@jest/globals'
import ProfileList from '../../../components/profile/ProfileList'

import { DefaultWrapper } from '../../utils'
import { lightTheme } from '../../../theme/Theme'

const chance = new Chance()

jest.mock('next/router', () => require('next-router-mock'))

const theme = lightTheme

describe('ProfileList', () => {

  it('Should render correctly', () => {
    const { getByTestId, getByText } = render(
      <DefaultWrapper theme={theme} >
        <ProfileList />
      </DefaultWrapper>
    )
    expect(getByTestId('profile-list')).toBeDefined()
  })
})
