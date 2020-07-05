import * as React from 'react';
import AceEditor, { Command } from 'react-ace';
import { Tabs } from 'antd';
import styled from 'styled-components'
import { Viewer } from './Viewer';

interface RequestProps {
  theme: string
  data: string
  streamData: string[]
  onChangeData: (value: string) => void
  commands?: Command[],
}

const StyledAceEditor = styled(AceEditor)`
  background: ${props => props.theme.backgroundLight} !important;
`

const StyledTabPane = styled(Tabs.TabPane)``

export function Request({onChangeData, commands, data, streamData, theme}: RequestProps) {
  const editorTabKey = `editorTab`;

  return (
    <>
      <Tabs
        defaultActiveKey={editorTabKey}
        tabPosition={"top"}
        style={{width: "100%"}}

      >
        <StyledTabPane tab="Editor" key={editorTabKey}>
          <StyledAceEditor
            width={"100%"}
            className={"request-editor"}
            height={"calc(100vh - 185px)"}
            mode="json"
            name="inputs"
            theme={theme === 'white' ? "textmate" : "monokai"}
            fontSize={13}
            cursorStart={2}
            onChange={onChangeData}
            commands={commands}
            showPrintMargin={false}
            showGutter
            highlightActiveLine={false}
            value={data}
            setOptions={{
              useWorker: true,
              displayIndentGuides: true
            }}
            tabSize={2}
          />
        </StyledTabPane>

        {streamData.map((data, key) => (
          <StyledTabPane tab={`Stream ${key + 1}`} key={`${key}`}>
            <Viewer theme={theme} output={data} />
          </StyledTabPane>
        ))}
      </Tabs>
    </>
  )
}
