import * as React from 'react';
import { useState } from 'react'
import {BloomRPC} from './components/BloomRPC';
import { Button } from 'antd'
import styled, { ThemeProvider } from 'styled-components'
import * as color from 'color'

const whiteTheme = {
  primary: "#1890ff",
  secondary: color('#fff').darken(0.4).rgb().string(),
  background: '#fff',
  backgroundLight: color('#1890ff').lighten(0.7).rgb().string(),
  backgroundDark: color('#fff').darken(0.05).rgb().string(),
  inverse: {
    primary: '#fff',
    background: '#30303d'
  },
  switch: {
    background: color('#1890ff').rgb().string(),
    color: color('#1890ff').rgb().string()
  },
  table: {
    hover: {
      background: color('#1890ff').lighten(0.4).rgb().string(),
      color: color('#fff').rgb().string(),    
    }
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
    left: "#ccc",
    right: "#ccc"
  },
  input: {
    color: color("#1890ff").lighten(0.3).rgb().string(),
    background: color('#fff').rgb().string(),
    backgroundDark: color("#fff").darken(0.05).rgb().string(),
  }
}

const darkTheme = {
  primary: color('#1890ff').lighten(0.4).rgb().string(),
  secondary: color('#fff').darken(0.4).rgb().string(),
  background: '#30303d',
  backgroundLight: color('#30303d').lighten(0.3).rgb().string(),
  backgroundDark: color("#30303d").darken(0.05).rgb().string(),
  inverse: {
    primary: '#30303d',
    background: '#fff'
  },
  switch: {
    background: color('#30303d').lighten(1).rgb().string(),
    color: color('#30303d').rgb().string()
  },
  table: {
    hover: {
      background: color('#1890ff').lighten(0.4).rgb().string(),
      color: color('#30303d').rgb().string(),
    }
  },
  tooltip: {
    color: color('#1890ff').lighten(0.4).rgb().string(),
  },
  icon: {
    color: color('#1890ff').lighten(0.4).rgb().string(),
    warning: "#ff4d00"
  },
  h3: {
    color: color('#1890ff').lighten(0.4).rgb().string()
  },
  border: {
    bottom: '#ccc',
    left: "#ccc",
    right: "#ccc"
  },
  input: {
    color: color("#1890ff").lighten(0.3).rgb().string(),
    background: color('#30303d').lighten(0.5).rgb().string(),
    backgroundDark: color("#30303d").darken(0.05).rgb().string(),
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