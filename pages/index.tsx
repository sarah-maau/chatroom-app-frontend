import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styled, {useTheme} from 'styled-components'
import HelloWorld from '../components/HelloWorld'
import MessageBar from "../components/messageBar/MessageBar";
import Room from "../components/room/Room";
import ToggleSwitchMode from "../components/layout/ToggleSwitchMode"
import {useUserThemeContext} from "../core/application/contexts/UserThemeContext";
import {darkTheme, lightTheme} from "../theme/Theme";
import Profile from "../components/profile/Profile";

const Home: NextPage = () => {
    const theme = useTheme()
    const { currentTheme, setCurrentTheme } = useUserThemeContext()

    const toggleUserTheme = () => {
        if (currentTheme === lightTheme) {
            setCurrentTheme(darkTheme)
        } else {
            setCurrentTheme(lightTheme)
        }
    }

  return (
    <Container>
      <Head>
        <title>Next App</title>

          <meta name='description' content='🎉' />
      </Head>
      <Main>
        <HelloWorld name='🎉' />
          <Profile />
      </Main>
        <ToggleSwitchMode theme={theme.name} onClick={toggleUserTheme}/>

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
