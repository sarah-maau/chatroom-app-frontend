import React, { useState} from 'react'
import styled, {css} from 'styled-components'
import {SendMessageIcon} from "../svg";
import {breakpoints} from '../../theme/breakpoints'


const MessageBar: React.FC = () => {
    const [onTap, setOntap] = useState<boolean>(false)

    const handleChange = e => {
        setOntap(true)
    };


    const room = {
        name: 'Room#1'
    }

    const handleSubmitMessage = () => {
        console.log('coucou')
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSubmitMessage()
        }
    }


    return (
        <MessageBarContainer>
            <MessageBarTextaera
                id='message'
                placeholder={`Envoyez un message dans la room ${room.name}`}
                data-emojiable='true'
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <SubmitButton  onClick={handleSubmitMessage} isTapping={onTap} type={"submit"}>
                <SendMessageIcon />
            </SubmitButton>
        </MessageBarContainer>
    )
}

export default MessageBar

interface IButtonProps {
    isTapping: boolean
}

const MessageBarContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.messageBar?.backgroundColor};
  border-radius: .7rem;
  padding: 1rem;
  min-width: 20rem;

  @media ${breakpoints.laptopM} {
    min-width: 50rem;
  }
`
const MessageBarTextaera = styled.textarea`
  resize: none;
  border: none;
  padding: 1rem;
  width: 95%;
  background: ${(props) => props.theme.messageBar?.backgroundColor};
  color:${(props) => props.theme.messageBar?.textColor};
  font-size: ${({theme}) => theme.fontSize.small} ;
  border-right: .2rem solid ${(props) => props.theme.messageBar?.borderColor};

  ::placeholder {
     color: ${(props) => props.theme.messageBar?.placeholderColor};
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


