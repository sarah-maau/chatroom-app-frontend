import React from 'react'
import styled from 'styled-components'
import Avatar from 'react-avatar'

interface IProfileProps{
    name: string
}

const ProfileItem: React.FC<IProfileProps> = ({name}) => {

  return (
    <ProfileContainer data-testid={'profile-item'}>
      <ProfileDetailsContainer>
        <Avatar name={name} round size={'32'} textSizeRatio={2} maxInitials={2}/>
        <Name>{name}</Name>
      </ProfileDetailsContainer>
    </ProfileContainer>
  )
}

export default ProfileItem


const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.room?.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.semiWeight};
  border-radius: .3rem;
  padding: .7rem, .9rem;
`

const ProfileDetailsContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
 margin: .8rem 1rem;
`
const Name = styled.div`
 overflow-wrap: break-word;
`




