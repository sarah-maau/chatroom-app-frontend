import React, {useEffect, useRef, useState} from 'react'
import styled, {css} from 'styled-components'
import AddButton from '../svg/AddButton'
import {useSocketContext} from '../../core/application/contexts/SocketContext'
import {ClientEvent} from '../../core/types'
import RoomItem from './RoomItem'

const RoomList: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false)
  const [placeholderContent, setPlaceholderContent] = useState<string>('')

  const { socket, roomId, rooms } = useSocketContext()

  const newRoomRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setPlaceholderContent('Liste des rooms')
  }, [])

  useEffect(() => {
    showInput && newRoomRef.current !== null && newRoomRef.current.focus()
  }, [showInput])

  const handleOnClick = () => {
    setPlaceholderContent('Nouvelle room')
    setShowInput(!showInput)
  }

  const handleCreateNewRoom = () => {
    const roomName = newRoomRef.current !== null ? newRoomRef.current.value : ''
    socket.emit(ClientEvent.CREATE_ROOM, {roomName})
    newRoomRef.current ? newRoomRef.current.value = '' : ''
    setShowInput(false)
    setPlaceholderContent('Liste des rooms')
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleCreateNewRoom()
    }
  }

  const handleJoin = (key: string)  => {
    if (key === roomId) {
      alert('Vous êtes déjà dans cette room')
    }
    socket.emit(ClientEvent.JOIN_ROOM, key)
  }

  return (
    <Container>
      <RoomTitleContainer>
        <RoomInput
          placeholder={placeholderContent}
          disabled={!showInput}
          ref={newRoomRef}
          onKeyPress={handleKeyPress}
          autoFocus={!showInput}
        />
        <RoomButtonContainer
          type='submit'
          onClick={handleOnClick}
        >
          <AddButton />
        </RoomButtonContainer>
      </RoomTitleContainer>

      <RoomsContainer>
        {Object.keys(rooms).map((key) => {
          return(
            <RoomItem
              key={key}
              name={rooms[key].name}
              disabled={key === roomId}
              title={`Join ${rooms[key].name}`}
              onClick={() => handleJoin(key)}
            />
          )
        })}
      </RoomsContainer>
    </Container>
  )
}

export default RoomList

interface IRoomInputProps {
    disabled:boolean
}

const Container = styled.div`
  padding: 1rem;
  box-sizing: border-box;
`

const RoomsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
   overflow-y: scroll;
    overflow-x: hidden;
    max-height: 550px;
`

const RoomTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background:${(props) => props.theme.room?.outerInputColor};
  color: ${(props) => props.theme.room?.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.lightWeight};
  border-radius: .3rem;
  padding: .7rem .9rem;
  margin-bottom:1rem;
  :hover {
    background: ${(props) => props.theme.room?.backgroundColorOnHover};
    color: ${(props) => props.theme.room?.textColorOnHover};
    input {
        background: ${(props) => props.theme.room?.backgroundColorOnHover};
     }
  }
`

const RoomInput = styled.input<IRoomInputProps>`
 border: none;
 display: flex;
 align-items: center;
 gap: 1rem;
 margin:.8rem 1rem;
 width:90%;
 color: ${(props) => props.theme.messageBar?.textColor};
 background:${(props) => props.theme.room?.outerInputColor};

${({disabled}) => !disabled && css`
  :focus::placeholder {
    color: ${(props) => props.theme.messageBar?.placeholderColor};
  }
 `}
`

const RoomButtonContainer = styled.button`
  margin:auto;
  cursor: pointer;
  > svg {
  margin-right: 1.5rem;
    > path {
      fill: ${(props) => props.theme.buttonColor};
    }
  }
`



