import React from 'react'
import { render, screen } from '@testing-library/react'
import { Chance } from 'chance'

import HelloWorld from '../../components/HelloWorld'

const chance = new Chance()

describe('HelloWord', () => {
  it('Should render The HelloWord with the correct prop', () => {
    const name = chance.name()
    render(<HelloWorld name={name} />)

    expect(screen.getByTestId('HelloWorld-title')).toHaveTextContent(name)
  })
})
