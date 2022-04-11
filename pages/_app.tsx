import React, {useEffect, useState} from 'react'
import type { AppProps } from 'next/app'
import {DefaultTheme, ThemeProvider} from 'styled-components'
import '../public/css/minireset.css'
import {darkTheme} from '../theme/Theme'
import { createDependencies } from '../core/application/dependencies'
import { AppProviderContext } from '../core/application/contexts/AppProviderContext'
import GlobalStyle from '../components/layout/GlobalStyle'
import { UserThemeContext } from '../core/application/contexts/UserThemeContext'
import {useSocketContext, SocketContext, ISocketMessage} from '../core/application/contexts/SocketContext'
import {ServerEvent} from '../core/types'


const App = ({ Component, pageProps }: AppProps) => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(darkTheme)
  const {socket} = useSocketContext()
  const [username, setUsername] = useState<string>('')
  const [roomId, setRoomId] = useState<string>('')
  const [rooms, setRooms] = useState<object>({})
  const [messages, setMessages] = useState<Array<ISocketMessage>>([])

  useEffect(() => {
    window.onfocus = () => {
      document.title = 'Chatroom app'
    }
  }, [])

  socket.on(ServerEvent.ROOMS, (value) => {
    setRooms(value)
  })

  socket.on(ServerEvent.JOINED_ROOM, (value) => {
    setRoomId(value)
    setMessages([])
  })

  useEffect(() => {
    socket.on(ServerEvent.ROOM_MESSAGE, ({ message, username, time, roomId }) => {
      if (!document.hasFocus()) {
        document.title = 'New message...'
      }

      setMessages((messages) => [...messages, { message, username, time, roomId }])
    })
  }, [socket])


  return (
    <UserThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme
      }}>
      <SocketContext.Provider
        value={{
          socket,
          username,
          setUsername,
          rooms,
          roomId,
          messages,
          setMessages
        }}>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle />
          <AppProviderContext.Provider value={createDependencies()}>
            <Component {...pageProps} />
          </AppProviderContext.Provider>
        </ThemeProvider>
      </SocketContext.Provider>
    </UserThemeContext.Provider>

  )
}
export default App


