import * as React from 'react';
import { Tabs } from 'antd';
import { Viewer } from './Viewer';

interface ResponseProps {
  streamResponse: string[]
  output: string
}

export function Response({output, streamResponse}: ResponseProps) {
  const defaultKey = `responseTab`;
  return (
    <>
      <Tabs
        defaultActiveKey={defaultKey}
        tabPosition={"top"}
        style={{width: "100%", height: "height: calc(100vh - 181px)"}}
      >
        {streamResponse.length === 0 && (
          <Tabs.TabPane tab={"Response"} key={"unaryResponse"}>
              <Viewer output={output} />
          </Tabs.TabPane>
        )}
        {streamResponse.map((data, key) => (
          <Tabs.TabPane tab={`Stream ${key + 1}`} key={`response-${key}`}>
            <Viewer output={data} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}