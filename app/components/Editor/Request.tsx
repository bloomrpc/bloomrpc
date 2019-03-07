import * as React from 'react';
import AceEditor from 'react-ace';
import { Tabs } from 'antd';
import { Viewer } from './Viewer';

interface RequestProps {
  data: string
  streamData: string[]
  onChangeData: (value: string) => void
}

export function Request({onChangeData, data, streamData}: RequestProps) {
  const editorTabKey = `editorTab`;

  return (
    <>
      <Tabs
        defaultActiveKey={editorTabKey}
        tabPosition={"top"}
        style={{width: "50%"}}
      >
        <Tabs.TabPane tab="Editor" key={editorTabKey}>
          <AceEditor
            style={{ background: "#fff" }}
            width={"100%"}
            height={"calc(100vh - 185px)"}
            mode="json"
            theme="textmate"
            name="inputs"
            fontSize={13}
            cursorStart={2}
            onChange={onChangeData}
            showPrintMargin={false}
            showGutter
            highlightActiveLine={false}
            value={data}
            setOptions={{
              useWorker: true,
              displayIndentGuides: true
            }}
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
