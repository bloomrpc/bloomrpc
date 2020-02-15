import * as React from 'react';
import { useState } from 'react'
import {BloomRPC} from './components/BloomRPC';
import { Button } from 'antd'
import styled, { ThemeProvider } from 'styled-components'
import * as color from 'color'

const whiteTheme = {
  primary: "#1890ff",
  background: '#fff',
  backgroundLight: color('#272822').lighten(0.9).rgb().string(),
  inverse: {
    primary: '#fff',
    background: '#30303d'
  },
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
    bottom: '#ccc',
    left: "#ccc"
  },
  input: {
    color: color("#1890ff").lighten(0.5).rgb().string(),
    background: color('#fff').rgb().string(),
  }
}

const darkTheme = {
  primary: "#1890ff",
  background: '#30303d',
  backgroundLight: color('#272822').lighten(0.2).rgb().string(),
  inverse: {
    primary: '#30303d',
    background: '#fff'
  },
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
    bottom: '#ccc',
    left: "#ccc"
  },
  input: {
    color: color("#1890ff").lighten(0.5).rgb().string(),
    background: color('#30303d').rgb().string(),
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