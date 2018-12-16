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
              <Viewer output={output} emptyContent={(
                <div style={styles.introContainer}>
                  <h1 style={styles.introTitle}>Hit the play button to get a response here</h1>
                  <img src={require('./../../../resources/blue/128x128.png')} style={{ opacity: 0.1 }}/>
                </div>
              )}/>
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

const styles = {
  introContainer: {
    textAlign: "center" as "center",
    position: "absolute" as "absolute",
    left: "25%",
    top: "35%",
    width: "45%",
    zIndex: 7,
  },
  introTitle: {
    position: "absolute" as "absolute",
    color: "rgba(17, 112, 134, 0.58)",
    fontSize: "25px",
    top: "120px",
  },
}