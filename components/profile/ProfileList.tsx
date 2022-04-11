import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ActiveUserIcon} from '../svg'
import {IChatRoomProvider} from '../../core/domain/providers/IChatRoomProvider'
import {useAppProviderContext} from '../../core/application/contexts/AppProviderContext'
import {createProfile} from '../../core/application/utils/CreateProfile'
import ProfileDetails from '../../core/data/models/profileDetails/ProfileDetails'
import ProfileItem from './ProfileItem'
import {breakpoints} from '../../theme/breakpoints'

export interface IProfileContent {
    id: string
    username: string
}

const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<Array<IProfileContent>>()
  const { chatRoomProvider } = useAppProviderContext()

  useEffect(() => {
    const fetchProfilesData = async (
      provider: IChatRoomProvider,
    ) => {
      try {
        const {profiles} = (await provider.getProfile())
        setProfiles(
          (profiles as Array<ProfileDetails>).map((it) => createProfile(it))
        )

      } catch (err) {
        console.error(err)
      }
    }
    if (chatRoomProvider) {
      fetchProfilesData(chatRoomProvider)
    }
  }, [chatRoomProvider])

  return (
    <Container data-testid={'profile-list'}>
      <ProfileTitleContainer>
        <ProfileTitle>Membres actifs</ProfileTitle>
        <ActiveUserIcon />
      </ProfileTitleContainer>

      <ProfileListContainer>
        {profiles && profiles?.map((profile, index) => {
          return(
            <ProfileItem name={profile.username} key={index}/>
          )
        })}
      </ProfileListContainer>
    </Container>
  )
}

export default ProfileList

const Container = styled.div`
 padding: 1rem;
 height: 180px;
 width: 100%; 
 
 @media ${breakpoints.tablet} {
        height: 90vh;   
 } 
  
`

const ProfileTitleContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 1rem;
 border-radius: .3rem;
 padding: .7rem .9rem;
  background:${(props) => props.theme.room?.outerInputColor};
  margin-bottom:1rem;
   > svg {
       width: 1.5rem;
       height: 1.5rem;
       > path {
          fill: ${(props) => props.theme.room?.textColor};
       }
 }
`

const ProfileTitle = styled.div`
  color: ${(props) => props.theme.room?.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.lightWeight};
  margin:.8rem 1rem;
`

const ProfileListContainer = styled.div`
    width:100%;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100px;    
    }
    
    @media ${breakpoints.tablet} {
        height: 400px;  
    }
`



