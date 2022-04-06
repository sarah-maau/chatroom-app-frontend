import React, {useState} from "react";
import styled, {css} from 'styled-components'
import {SunIcon, MoonIcon} from "../svg";

export type IAppTheme = 'dark' | 'light' | string

export interface IToggleSwitchModeProps {
    theme: IAppTheme
    onClick?: () => void
}

const ToggleSwitchMode: React.FC<IToggleSwitchModeProps> = ({theme, onClick}) => {

    return(
        <ToggleContainer currentTheme={theme} onClick={onClick}>
            {console.log(theme)}
                {theme === 'dark' ? <MoonIcon /> : <SunIcon/>}
        </ToggleContainer>

    )
}

export default ToggleSwitchMode

interface IThemeProps {
    currentTheme: IAppTheme
}


const ToggleContainer = styled.button<IThemeProps>`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 3rem;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 3rem;
    height: 2.5rem;
    transition: all 0.3s linear;
    
    transform: ${({currentTheme}) => currentTheme === 'light' ? 'translateY(0)' :'translateX(38px)'}
    };
`