import React from 'react'
import styled from 'styled-components'

export interface IHelloWordProps {
  name: string
}

const HelloWorld: React.FC<IHelloWordProps> = ({ name }) => <Title data-testid="HelloWorld-title"> Hello {name} </Title>

const Title = styled.h1`
  font-size: 5rem;
`

export default HelloWorld
