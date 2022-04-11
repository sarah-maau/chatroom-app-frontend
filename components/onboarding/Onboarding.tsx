import React from 'react'
import styled, {keyframes} from 'styled-components'
import {useSocketContext} from '../../core/application/contexts/SocketContext'
import * as yup from 'yup'
import {Form, Formik, Field} from 'formik'
import {useUserThemeContext} from '../../core/application/contexts/UserThemeContext'
import {darkTheme} from '../../theme/Theme'

const Onboarding: React.FC= () => {
  const { setUsername } = useSocketContext()
  const { currentTheme } = useUserThemeContext()

  const initialValues = {
    username: ''
  }

  const validationSchema = yup.object().shape({
    username: yup.string().min(3).required()
  })

  const handleSetUsername = (value) => {
    setUsername(value.username)
    localStorage.setItem('username', value.username)
  }

  return (
    <UsernameContainer>
      { currentTheme === darkTheme ? (
        <Logo src='/chatLogoDark.png' alt='logo-dark'/>
      ) : (
        <Logo src='/chatLogoLight.png' alt='logo-ligth'/>
      ) }
      <TitleContainer>
        <StepOne>
          <h1>Chat.</h1>
          <div>Chat.</div>
        </StepOne>
        <StepTwo>
          <h1>Spoil.</h1>
          <div >Spoil.</div>
        </StepTwo>
        <StepThree>
          <h1>Share.</h1>
          <div>Share.</div>
        </StepThree>
      </TitleContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        onSubmit={handleSetUsername}
      >
        { ({errors,touched}) => (
          <FormContainer>
            <UsernameInput
              data-testid={'username-input'}
              id='username'
              name='username'
              placeholder='Pseudo'
              required
            />
            {
              errors.username && touched.username ? (<MessageError>{errors.username}</MessageError>) : null
            }
            <UsernameButton type='submit' data-testid='submit-button'>C'est parti</UsernameButton>
          </FormContainer>
        )}
      </Formik>
    </UsernameContainer>
  )
}

export default Onboarding

const UsernameContainer = styled.div`
  background-color: ${(props) => props.theme.welcomePage?.background};
  border: ${(props) => props.theme.welcomePage?.border};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  border-radius: .8rem; 
  z-index:3;
`


const shakeAnimation = keyframes`
 0% { transform: translateX(0) }
 25% { transform: translateX(5px) }
 50% { transform: translateX(-5px) }
 75% { transform: translateX(5px) }
 100% { transform: translateX(0) }
`


const animatedGradientTitle1 = keyframes`
  0%, 16.667%, 100% {
    opacity: 1;
  }

  33.333%, 83.333% {
    opacity: 0;
  }
}`

const animatedGradientTitle2 = keyframes`
 0%, 16.667%, 66.667%, 100% {
    opacity: 0;
  }

  33.333%, 50% {
    opacity: 1;
  }
}`

const animatedGradientTitle3 = keyframes`
 0%, 50%, 100%{
    opacity: 0;
  }

  66.667%, 83.333% {
    opacity: 1;
  }
}`


const Logo = styled.img`
width: 8rem;
animation: ${shakeAnimation} .5s linear infinite;
:hover {
 animation-play-state: paused;
}
`

const FormContainer = styled(Form)`
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;
width: 20rem;
`

const UsernameInput = styled(Field)`
outline: none;
border: ${(props) => props.theme.welcomePage?.border};
color: ${(props) => props.theme.textColor.main};
background-color: ${(props) => props.theme.backgroundColor};
padding: 1.2rem;
border-radius: .8rem;
`

const MessageError = styled.span`
margin-top: .3rem;
color: red;
font-size: 1.2rem;
`

const UsernameButton = styled.button`
background:${(props) => props.theme?.buttonColor} ; 
color: white;
font-size: ${(props) => props.theme.fontSize.normal}; 
font-weight: ${(props) => props.theme.fontWeight.semiWeight};
border: 1px solid ${(props) => props.theme?.buttonColor};
border-radius: .8rem;
padding: 1.2rem;
cursor: pointor;
  :hover {
    background:${(props) => props.theme.welcomePage?.background};
    color: ${(props) => props.theme?.buttonColor};
  }
`

const TitleContainer = styled.div`
 margin-top:-16px;
 position:relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
`

const StepOne = styled.div`
position:relative;
  & h1 {
    font-size:10rem;
    margin:0;
    line-height:1.2em;
    letter-spacing: -4px;
  }      
  & div {
    font-family:${(props) => props.theme.fontFamily.title} !important;
    font-size:10rem;
    margin:0;
    line-height:1.2em; 
    letter-spacing: -4px;
    position:absolute;
    top:0;
    left:0;
    width:auto;
    padding-right:1rem; //Adding some space on the right otherwise gradient may be cut off depending on the font.
    height:100%;
    opacity:1;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(90deg, #007CF0, #00DFD8);
    animation: ${animatedGradientTitle1} 8s infinite;
}
`

const StepTwo = styled.div`
position:relative;
 & h1 {
    font-size:10rem;
    margin:0;
    line-height:1.2em; 
    letter-spacing: -4px;
  }      
  & div {
    font-family:${(props) => props.theme.fontFamily.title} !important;
    font-size:10rem;
    margin:0;
    line-height:1.2em; 
    letter-spacing: -4px;
    position:absolute;
    top:0;
    left:0;
    width:auto;
    padding-right:1rem; //Adding some space on the right otherwise gradient may be cut off depending on the font.
    height:100%;
    opacity:1;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(90deg, #7928CA, #FF0080);
  animation: ${animatedGradientTitle2} 8s infinite;
`

const StepThree = styled.div`
position:relative;
 & h1 {
    font-size:100px;
    margin:0;
    line-height:1.2em;
    letter-spacing: -4px;
  }      
  & div {
    font-family:${(props) => props.theme.fontFamily.title} !important;
    font-size:10rem;
    margin:0;
    line-height:1.2em;
    letter-spacing: -4px;
    position:absolute;
    top:0;
    left:0;
    width:auto;
    padding-right:1rem; //Adding some space on the right otherwise gradient may be cut off depending on the font.
    height:100%;
    opacity:1;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(90deg, #FF4D4D, #F9CB28);
    animation: ${animatedGradientTitle3} 8s infinite;
}
`

