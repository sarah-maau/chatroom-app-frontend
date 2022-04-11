import React from 'react'
import styled from 'styled-components'
import ToggleSwitchMode, {IAppTheme} from './ToggleSwitchMode'
import ProfileItem from '../profile/ProfileItem'
import {useSocketContext} from '../../core/application/contexts/SocketContext'
import {breakpoints} from '../../theme/breakpoints'

interface IHeaderProps {
    theme: IAppTheme
    onClick?: () => void
}
const Header: React.FC<IHeaderProps> = ({theme, onClick}) => {
  const { username } = useSocketContext()

  return(
    <HeaderContainer>
      <HeaderWrapper>
        <NavOne>
          {theme === 'dark' ? (<Logo src={'/chatLogoDark.png'}  alt='logo-dark'/>):(<Logo src={'/chatLogoLight.png'}  alt='logo-light'/>)}
          <HeaderTitle>Chat'spoil</HeaderTitle>
        </NavOne>
        <NavTwo />
        <NavThree>
          {username && (<ProfileItem name={username} />)}
          <ToggleSwitchMode theme={theme} onClick={onClick} />
        </NavThree>
      </HeaderWrapper>
    </HeaderContainer>

  )
}

export default Header


const HeaderContainer = styled.div`
padding: .5rem 0;
width:95%;
backdrop-filter: blur(5px);


 @media ${breakpoints.laptopM} {
   width:100%;
 }

`
const HeaderWrapper = styled.header`
display: flex;
flex-direction: row;
align-items: center;


`

const NavOne = styled.div`
flex: 2;
display: flex;
justify-content: center;
align-items: center;
gap:1rem; 

  @media ${breakpoints.tablet} {
      flex: 1;   
  }
 
`
const NavTwo = styled.div`
flex: 2;
display: flex;
justify-content: center;
align-items: center;

`
const NavThree = styled.div`
flex: 1 ;
display: flex;
justify-content: center;
align-items: center;
`

const Logo = styled.img`
width:2.5rem;
`

const HeaderTitle = styled.h1`
color: ${(props) => props.theme.textColor?.main};
font-size: ${(props) => props.theme.fontSize.normal};

`

