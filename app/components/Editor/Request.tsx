import * as React from 'react';
import AceEditor, { Command } from 'react-ace';
import * as Mousetrap from 'mousetrap'
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';
import { Tabs } from 'antd';
import { Viewer } from './Viewer';

interface RequestProps {
  data: string
  streamData: string[]
  onChangeData: (value: string) => void
  commands?: Command[]
  active?: boolean
}

export function Request({onChangeData, commands, data, streamData, active}: RequestProps) {
  const editorTabKey = `editorTab`;

  // bind esc for focus on the active editor window
  const aceEditor = React.useRef<AceEditor>(null)
  React.useEffect(() => {
    if (active) {
      Mousetrap.bindGlobal('esc', () => {
        const node = aceEditor.current as any
        if (node && 'editor' in node) {
          node.editor.focus()
        }
      })
    }
  })

  return (
    <>
      <Tabs
        defaultActiveKey={editorTabKey}
        tabPosition={"top"}
        style={{width: "100%"}}
      >
        <Tabs.TabPane tab="Editor" key={editorTabKey}>
          <AceEditor
            ref={aceEditor}
            style={{ background: "#fff" }}
            width={"100%"}
            height={"calc(100vh - 185px)"}
            mode="json"
            theme="textmate"
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
