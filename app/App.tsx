import * as React from 'react';
import { useState } from 'react'
import {BloomRPC} from './components/BloomRPC';
import  { ThemeProvider, createGlobalStyle } from 'styled-components'
import * as color from 'color'


type Hover = {
  color: string
  background: string,
}

type Table = {
  hover: Hover
}

type Switch = {
  color: string
  background: string,
}

type Tooltip = {
  color: string
}
type Icon = {
  color: string
  warning: string
}

type H3 = {
  color: string
}

export type Theme = {
  primary: string
  secondary: string,
  background: string,
  backgroundLight: string,
  backgroundDark: string,
  switch: Switch,
  table: Table,
  tooltip: Tooltip,
  icon: Icon,
  h3: H3,
  border: Border,
  input: Input
}

type Input = {
  color: string,
  background: string,
  backgroundDark: string
}

type Border = {
  top: string,
  bottom: string,
  left: string,
  right: string,
  all: string,
  allWeak: string
}

const whiteTheme: Theme = {
  primary: "#1890ff",
  secondary: color('#fff').darken(0.4).rgb().string(),
  background: '#fff',
  backgroundLight: color('#1890ff').lighten(0.7).rgb().string(),
  backgroundDark: color('#fff').darken(0.05).rgb().string(),
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
    right: "#ccc",
    top: "#ccc",
    all: "#ccc",
    allWeak:  color("#ccc").lighten(0.5).rgb().string()
  },
  input: {
    color: color("#1890ff").lighten(0.3).rgb().string(),
    background: color('#fff').rgb().string(),
    backgroundDark: color("#fff").darken(0.05).rgb().string(),
  }
}

const darkTheme: Theme = {
  primary: color('#1890ff').lighten(0.4).rgb().string(),
  secondary: color('#fff').darken(0.4).rgb().string(),
  background: '#30303d',
  backgroundLight: color('#30303d').lighten(0.3).rgb().string(),
  backgroundDark: color("#30303d").darken(0.05).rgb().string(),
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
    right: "#ccc",
    top: "#ccc",
    all: "#ccc",
    allWeak:  color("#ccc").lighten(0.5).rgb().string()
  },
  input: {
    color: color("#1890ff").lighten(0.3).rgb().string(),
    background: color('#30303d').lighten(0.5).rgb().string(),
    backgroundDark: color("#30303d").darken(0.05).rgb().string(),
  }
}

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  .ant-tree-title {
    color: ${props=>props.theme.secondary};
  }
  .ant-select-dropdown-menu-item {
    color: ${props=> {
      return props.theme.primary
    }};
    background: ${props=>props.theme.background};
  }
  .ant-input {
    color: ${props=> props.theme.input.color};
    background: ${props=>props.theme.input.background};
    transition: none;
  }
  .ant-input-group-addon {
    padding: 0px;
  }
  .ant-select-selection__placeholder, .ant-select-search__field__placeholder {
    color: ${props=>props.theme.primary};
  }
  .ant-select-selection {
    color: ${props=>props.theme.primary};
    background: ${props=>props.theme.input.backgroundDark};
    transition: none;
  }
  .ant-select-arrow {
    color: ${props=>props.theme.primary};
  }
  .ant-drawer-header {
    background: ${props => props.theme.background};
  }
  .ant-drawer-title {
    color: ${props => props.theme.primary};
  }
  .ant-drawer-body {
    background: ${props => props.theme.background};
  }
  .ant-table-thead > tr > th {
    color: ${props=>props.theme.primary} !important;
    background: ${props=>props.theme.background} !important;
    transition: none;
  }
  td > span {
    color: ${props=>props.theme.primary} !important;
  }
  .ant-modal-header {
    color: ${props=>props.theme.primary} !important;
    background: ${props=>props.theme.background} !important;
  }
  .ant-table-placeholder {
    background: ${props=>props.theme.background} !important;
  }
  .ant-empty-description {
    color: ${props=>props.theme.primary} !important;
  }
  .ant-modal-content .ant-modal-close-x {
    color: ${props=>props.theme.primary} !important;
  }
  .ant-modal-header {
    background: ${props=>props.theme.background} !important;
  }
  .ant-modal-footer {
    background: ${props=>props.theme.background} !important;
    border-top: none;
  }
  .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    color: ${props=>props.theme.primary} !important;
  }
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background: ${props=>props.theme.backgroundLight} !important;
    // color: ${props=>props.theme.table.hover.color} !important;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    color: ${props=>props.theme.secondary};
    background: ${props=>props.theme.background} !important;
    transition: none !important;
  }
  .ant-tabs-nav .ant-tabs-tab {
    transition: none;
    color: ${props=>props.theme.primary}; 
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
    width: 16px;
    height: 16px;
    height: 14px;
    margin-right: -5px;
    margin-left: 3px;
    overflow: hidden;
    font-size: 12px;
    transition: none !important;
    vertical-align: middle;
    color: ${props=>props.theme.primary} !important;
    background: ${props=>props.theme.background} !important;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: ${props=>props.theme.primary} !important;
  }
`

export default function App() {
  const [theme, setTheme] = useState<string>('white')
  
  function changeTheme() {
    const d = theme === 'white' ? 'dark' : 'white'
    setTheme(d)
  }

  return (
    <ThemeProvider theme={theme === 'white' ? whiteTheme : darkTheme}>
      <BloomRPC changeTheme={changeTheme} theme={theme}/>
      <GlobalStyles theme={theme === 'white' ? whiteTheme : darkTheme}/>
    </ThemeProvider>
  )
}