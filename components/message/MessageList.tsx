import React, {useEffect, useRef, useState} from 'react'
import styled, {css} from 'styled-components'
import {SendMessageIcon} from '../svg'
import {breakpoints} from '../../theme/breakpoints'
import {useSocketContext} from '../../core/application/contexts/SocketContext'
import {ClientEvent} from '../../core/types'
import MessageItem from './MessageItem'
import dayjs from 'dayjs'

interface IMessageListProps {
  roomName?: string
}


const MessageList: React.FC<IMessageListProps> = ({roomName}) => {
  const { socket, messages, roomId, username, setMessages } = useSocketContext()
  const newMessageRef = useRef<HTMLTextAreaElement>(null)
  const messageEndRef = useRef<HTMLInputElement>(null)

  const [onTap, setOntap] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleChange = () => {
    setOntap(true)
  }

  useEffect(() => {
    if(roomId) {
      setIsVisible(true)
    }
  }, [roomId])


  const handleSubmitMessage = () => {
    if(newMessageRef.current === null) return
    const message = newMessageRef.current.value

    socket.emit(ClientEvent.SEND_ROOM_MESSAGE, { roomId, message, username })

    if(messages) {
      setMessages([
        ...messages,
        {
          username: username,
          message,
          time: `${dayjs().format('HH:mm')}`,
          roomId
        }
      ])
    }
    newMessageRef.current.value = ''
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])


  const handleKeyPress = (event) => {
    if(event.key === 'Enter' && newMessageRef.current !== null && newMessageRef.current.value.length>0){
      handleSubmitMessage()
    }
  }

  return (
    <Container>
      <MessagesContainer>
        {messages && messages.map(({ message, username, time }, index) => {
          return (
            <MessageItem
              key={index}
              message={message}
              username={username}
              time={time}
            />
          )
        })}
        <div ref={messageEndRef} />
      </MessagesContainer>

      <MessageBarContainer isVisible={isVisible}>
        <MessageBarTextaera
          id='message'
          placeholder={'Envoyez un message pour spoiler !'}
          data-emojiable='true'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          ref={newMessageRef}
        />

        <SubmitButton  onClick={handleSubmitMessage} isTapping={onTap} type='submit'>
          <SendMessageIcon />
        </SubmitButton>

      </MessageBarContainer>
    </Container>
  )
}

export default MessageList

interface IButtonProps {
    isTapping: boolean
}

interface IMessageBarContainerProps {
  isVisible: boolean
}

const Container = styled.div`
  height:40vh;
  width: 90%; 
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
   @media ${breakpoints.laptopM} {
      height: 90vh;
      width: 90%; 
    }
`

const MessagesContainer = styled.div`
  flex: 1 1;
  padding: 1rem;
  overflow-y: scroll;
`
const MessageBarContainer = styled.div<IMessageBarContainerProps>`
${({ isVisible }) => isVisible && css`
  display: flex;
  background: ${(props) => props.theme.messageBar?.backgroundColor};
  border-radius: .7rem;
  padding: 1rem;
  min-width: 40rem;
  height: 8vh;

  @media ${breakpoints.tablet} {
    min-width: 50rem;
    height: 10vh;
  }
  
`}
${({ isVisible }) => !isVisible && css`
  display: none;
`}

`
const MessageBarTextaera = styled.textarea`
  resize: none;
  border: none;
  
  width: 95%;
  background: ${(props) => props.theme.messageBar?.backgroundColor};
  color:${(props) => props.theme.messageBar?.textColor};
  font-size: ${({theme}) => theme.fontSize.small} ;
  border-right: .2rem solid ${(props) => props.theme.messageBar?.borderColor};

  ::placeholder {
     color: ${(props) => props.theme.messageBar?.placeholderColor};
  }
  
  @media ${breakpoints.laptopM} {
    padding: 1rem;  
  }
`

const SubmitButton = styled.button<IButtonProps>`
padding-left: 1rem;
 ${({ isTapping }) => isTapping && css`
    > svg {
    cursor: pointer;
    width: 3rem;
    padding-left: .2rem;
      > * {
      fill: ${(props) => props.theme.buttonColor};
      }
    }
 `}
`


