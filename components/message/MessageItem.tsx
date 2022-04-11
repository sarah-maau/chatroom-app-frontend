import React, {useEffect, useState} from 'react'
import styled, {keyframes, css} from 'styled-components'
import Avatar from 'react-avatar'

interface IMessageProps {
    username: string
    message: string
    time: string
}

const MessageItem: React.FC<IMessageProps> = ({ username, message, time}) => {
  const [isAuthor, setIsAuthor] = useState<boolean>(false)

  useEffect(() => {
      if (username === localStorage.getItem('username')) {
          setIsAuthor(true)
      }
  }, [])


  return (
    <MessageContainer>
        <MessageContent isAuthor={isAuthor}>
            {message}
        </MessageContent>
        <MessageAuthor isAuthor={isAuthor}>
            <Avatar name={username} round size={'20'}  maxInitials={2}/>
            <p>{username} à {time}</p>
        </MessageAuthor>
    </MessageContainer>
  )
}

export default MessageItem

interface IMessageAuthorProps {
    isAuthor: boolean
}

const PopAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
   transform: scale(1);
   opacity: 1;
  }`


const MessageContainer = styled.div`

  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const MessageAuthor = styled.div<IMessageAuthorProps>`

    animation: ${PopAnimation} 0.4s cubic-bezier(.48,1.7,.87,1);
    display: flex;
    align-items: center;
    gap: 1rem;
    
${({isAuthor}) => isAuthor === true && css`
    margin-right: 1rem;
    justify-content: flex-end;
 `}
 ${({isAuthor}) => isAuthor===false && css`
    margin-left: 1rem;
    justify-content: flex-start;
 `}
`
const MessageContent = styled.div<IMessageAuthorProps>`
font-size: ${(props) => props.theme.fontSize?.small};
  border-radius: 2rem;
  width: 30rem;
  padding: .8rem 1.5rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  display: inline-block;
  animation: ${PopAnimation} 0.4s cubic-bezier(.48,1.7,.87,1); 
    
 ${({isAuthor}) => isAuthor===true && css`
     justify-content: flex-end;
     text-align:end;
      color: white;
      margin-left: 50%;
      background: ${(props) => props.theme.commonGradient};
      background-attachment: fixed;
      position: relative;
 `}
 
${({isAuthor}) => isAuthor===false && css`
      position: relative;
      margin-right: 25%;
      background-color: #eee;
      align-items: flex-start;
 `}
`




