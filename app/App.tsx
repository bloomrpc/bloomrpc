import * as React from 'react';
import { useState } from 'react'
import {BloomRPC} from './components/BloomRPC';
import { Button } from 'antd'
import styled, { ThemeProvider } from 'styled-components'

const whiteTheme = {
  primary: "#1890ff",
  background: '#fff',
  tooltip: {
    color: "#1890ff"
  },
  icon: {
    color: "#1890ff",
    warning: "#ff4d00"
  },
  h3: {
    color: "#1890ff"
  },
  border: {
    bottom: '#ccc'
  }
}

const darkTheme = {
  primary: "#1890ff",
  background: '#30303d',
  tooltip: {
    color: "#1890ff"
  },
  icon: {
    color: "#1890ff",
    warning: "#ff4d00"
  },
  h3: {
    color: "#1890ff"
  },
  border: {
    bottom: '#ccc'
  }
}

const themes = {
  'white': whiteTheme,
  'dark': darkTheme
}

const ChangeThemeBtn = styled(Button)`
  background: ${props => props.theme.background};
  color: ${props=>props.theme.primary};
  position: absolute;
  z-index: 100000;
  top: 0;
  right: 0;
  height:20px;
  width:100px;
  &:hover {
    background: ${props => props.theme.primary};
    color: ${props=>props.theme.background};   
  }
`

export default function App() {
  const [theme, setTheme] = useState<string>('white')
  
  function changeTheme() {
    const d = theme === 'white' ? 'dark' : 'white'
    setTheme(d)
  }

  return (
    <ThemeProvider theme={theme === 'white' ? themes.white : themes.dark}>
      <ChangeThemeBtn onClick={()=>changeTheme()}>Set Theme</ChangeThemeBtn>
      <BloomRPC/>
    </ThemeProvider>
  )
}