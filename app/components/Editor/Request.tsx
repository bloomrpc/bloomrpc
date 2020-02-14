import * as React from 'react';
import AceEditor, { Command } from 'react-ace';
import { Tabs } from 'antd';
import { Viewer } from './Viewer';

interface RequestProps {
  data: string
  streamData: string[]
  onChangeData: (value: string) => void
  commands?: Command[],
}

export function Request({onChangeData, commands, data, streamData}: RequestProps) {
  const editorTabKey = `editorTab`;

  return (
    <>
      <Tabs
        defaultActiveKey={editorTabKey}
        tabPosition={"top"}
        style={{width: "100%"}}
      >
        <Tabs.TabPane tab="Editor" key={editorTabKey}>
          <AceEditor
            width={"100%"}
            height={"calc(100vh - 185px)"}
            mode="json"
            theme="monokai"
            name="inputs"
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
        </Tabs.TabPane>

        {streamData.map((data, key) => (
          <Tabs.TabPane tab={`Stream ${key + 1}`} key={`${key}`}>
            <Viewer output={data} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
