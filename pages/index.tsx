import React, {useEffect, useState} from 'react'
import type { NextPage } from 'next'
import styled, {css, useTheme} from 'styled-components'

import {useUserThemeContext} from '../core/application/contexts/UserThemeContext'
import {darkTheme, lightTheme} from '../theme/Theme'
import {useSocketContext} from '../core/application/contexts/SocketContext'
import Onboarding from '../components/onboarding/Onboarding'
import Header from '../components/layout/Header'
import RoomList from '../components/room/RoomList'
import {breakpoints} from '../theme/breakpoints'
import MessageList from '../components/message/MessageList'
import ProfileList from '../components/profile/ProfileList'


const Home: NextPage = () => {
  const theme = useTheme()
  const [visibleChatroom, setVisibleChatroom] = useState<boolean>(false)
  const { currentTheme, setCurrentTheme } = useUserThemeContext()
  const {  username } = useSocketContext()

  const toggleUserTheme = () => {
    if (currentTheme === darkTheme) {
      setCurrentTheme(lightTheme)
    } else {
      setCurrentTheme(darkTheme)
    }
  }

  useEffect(() => {
    if(username && username.length>0) {
      setVisibleChatroom(true)
    }
  }, [username])

  return (
    <Container>
      <Header theme={theme.name} onClick={toggleUserTheme} />
      <Main>
        {!username && (<Onboarding />)}
        <ChatroomContainer isVisible={visibleChatroom}>
          <RoomList />
          <MessageList />
          <ProfileList />
        </ChatroomContainer>
      </Main>

    </Container>
  )
}

export default Home

interface IChatroomContainerProps  {
  isVisible: boolean
}

const Container = styled.div`
  max-height: 100vh;
`
const Main = styled.main``


const ChatroomContainer = styled.div<IChatroomContainerProps>`
  ${({ isVisible }) => !isVisible && css`
    display:none;
  `}
  
  ${({ isVisible }) => isVisible && css`
    display: flex;
    flex-direction: column;
    > * {
    gap: 1rem;
    }  
    
    @media ${breakpoints.laptopM} {
      display: grid;
      grid-template-columns: 25% 55% 20%;  
    }
  `}
   
`

