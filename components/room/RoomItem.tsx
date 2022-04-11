import React from 'react'
import styled, {css} from 'styled-components'
import {ChannelIcon, UserIcon} from '../svg'

interface IRoomProps {
    key: string
    name: string
    nbOfProfiles?: number
    disabled: boolean
    title: string
    onClick?: () => void
}

const Room: React.FC<IRoomProps> = ({name, nbOfProfiles, disabled,title, onClick }) => {

  if(!nbOfProfiles && disabled) {
    nbOfProfiles =+1
  }
  return (
    <RoomContainer disabled={disabled} onClick={onClick}>
      <RoomDetailsContainer>
        <ChannelIcon/>
        <RoomName>{name}</RoomName>
      </RoomDetailsContainer>
      <RoomDetailsContainer>
        <RoomDetails>{nbOfProfiles}</RoomDetails>
        <UserIcon/>
      </RoomDetailsContainer>
    </RoomContainer>
  )
}

export default Room

interface IRoomContainerProps {
    disabled: boolean
}

const RoomContainer = styled.div<IRoomContainerProps>`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.backgroundRoomSection};
  color: ${(props) => props.theme.room?.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.lightWeight};
  border-radius: .3rem;
  padding: .7rem .9rem;
  :hover {
    background: ${(props) => props.theme.room?.backgroundColorOnHover};
    color: ${(props) => props.theme.room?.textColorOnHover};
    & svg {
     > path {
        fill: ${(props) => props.theme.room?.textColorOnHover};
     }
     }
  }

  ${({disabled}) => disabled && css`
    border-bottom: solid .5rem;
    border-image-slice: 1;
    border-width: .3rem;
    border-image-source: ${(props) => props.theme.commonGradient};
 `}
`

const RoomDetailsContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
 margin: .8rem 1rem;
 > svg {
   width: 1.5rem;
   height: 1.5rem;
   > path {
      fill: ${(props) => props.theme.room?.textColor};
   }
 }
`
const RoomName = styled.div``
const RoomDetails = styled.div``



