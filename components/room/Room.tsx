import React from 'react'
import styled, {css} from 'styled-components'
import {ChannelIcon, UserIcon} from "../svg";
import {breakpoints} from '../../theme/breakpoints'


const Room: React.FC = () => {

    const room = {
        name: 'Room#1',
        nb: 65,
        active: true
    }


    return (
        <RoomContainer isActive={room.active}>
            <RoomDetailsContainer>
                <ChannelIcon/>
                <RoomName>{room.name}</RoomName>
            </RoomDetailsContainer>
            <RoomDetailsContainer>
                <RoomDetails>{room.nb}</RoomDetails>
                <UserIcon/>
            </RoomDetailsContainer>

        </RoomContainer>
    )
}

export default Room

interface IRoomProps {
    isActive: boolean
}


const RoomContainer = styled.div<IRoomProps>`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.room?.backgroundColor};
  color: ${(props) => props.theme.room?.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.weight.lightWeight};
  border-radius: .3rem;
  padding: .7rem, .9rem;
  min-width: 20rem;
  :hover {
    background: ${(props) => props.theme.room?.backgroundColorOnHover};
    color: ${(props) => props.theme.room?.textColorOnHover};
    & svg {
     > path {
        fill: ${(props) => props.theme.room?.textColorOnHover};
     }
     }
  }

  @media ${breakpoints.laptopM} {
    min-width: 50rem;
  }
  
  ${({isActive}) => isActive && css`
    border-bottom: solid .5rem;
    border-image-slice: 1;
    border-width: .3rem;
    border-image-source: ${(props) => props.theme.room?.activeBorder};
 `}
`

const RoomDetailsContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
 margin: .8rem 1rem;
 > svg {
   width: 90%;
   height:90%;
   > path {
      fill: ${(props) => props.theme.room?.textColor};
   }
 }
`
const RoomName = styled.div``
const RoomDetails = styled.div``



