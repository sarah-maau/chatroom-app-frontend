import React from 'react'

const CustomHead: React.FC = () => {
  // @ts-ignore

  return (
    <>
      <title>Chat'spoil</title>
      <meta name='robots' content='noindex' />
      <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png'/>
      <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png'/>
      <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png'/>
      <link rel='manifest' href='favicon/manifest.json'/>
      <meta name='msapplication-TileColor' content='#da532c'/>
      <meta name='theme-color' content='#ffffff'/>
      <link rel='stylesheet' type='text/css' href='csshake.min.css' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap'
        rel='stylesheet'/>
      <link rel='preconnect' href='https://fonts.googleapis.com'/>
      <link href='https://fonts.googleapis.com/css2?family=Paytone+One&display=swap' rel='stylesheet'/>
    </>
  )
}

export default CustomHead
