import React from 'react'
import { Chance } from 'chance'
import { render } from '@testing-library/react'
import { expect } from '@jest/globals'
import ProfileItem from '../../../components/profile/ProfileItem'

import { DefaultWrapper } from '../../utils'
import { lightTheme } from '../../../theme/Theme'

const chance = new Chance()

jest.mock('next/router', () => require('next-router-mock'))

const theme = lightTheme

describe('ProfileItem', () => {
  const username = chance.name()

  it('Should render correctly', () => {
    const { getByTestId, getByText } = render(
      <DefaultWrapper theme={theme} >
        <ProfileItem name={username} />
      </DefaultWrapper>
    )
    expect(getByTestId('profile-item')).toBeDefined()
    expect(getByText(username)).toBeDefined()

  })
})
