import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import HelloWorld from '../components/HelloWorld'

const Home: NextPage = () => {

  return (
    <Container>
      <Head>
        <title>Next App</title>
        <meta name='description' content='🎉' />
      </Head>
      <Main>
        <HelloWorld name='🎉' />
      </Main>
    </Container>
  )
}

export default Home

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
