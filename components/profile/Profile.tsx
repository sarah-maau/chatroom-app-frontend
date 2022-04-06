import React from 'react'
import styled, {css} from 'styled-components'
import {ChannelIcon, UserIcon} from "../svg";
import {breakpoints} from '../../theme/breakpoints'
import Avatar from 'react-avatar'

interface IProfileProps{
    name: string
}

const Profile: React.FC<IProfileProps> = ({name}) => {

    const room = {
        name: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        nb: 65,
        active: true
    }

    return (
        <ProfileContainer>
            <ProfileDetailsContainer>
                <Avatar name={room.name} round size={'32'} textSizeRatio={2} maxInitials={2}/>
                <Name>{room.name}</Name>
            </ProfileDetailsContainer>
        </ProfileContainer>
    )
}

export default Profile


const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.room?.backgroundColor};
  color: ${(props) => props.theme.room?.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.weight.lightWeight};
  border-radius: .3rem;
  padding: .7rem, .9rem;
  min-width: 20rem;

  @media ${breakpoints.laptopM} {
    min-width: 50rem;
  }
`

const ProfileDetailsContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
 margin: .8rem 1rem;
`
const Name = styled.div`
white-space: nowrap;
  overflow: hidden;
  max-width: 200px;
`




