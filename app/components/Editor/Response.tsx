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
                <div style={{position: "relative", height: "325px"}}>
                  <div style={styles.introContainer}>
                    <img src={require('./../../../resources/blue/128x128.png')} style={{ opacity: 0.1 }}/>
                    <h1 style={styles.introTitle}>Hit the play button to get a response here</h1>
                  </div>
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
    margin: "20% 30% auto",
    width: "45%",
    position: "absolute" as "absolute",
    zIndex: 7,
  },
  introTitle: {
    color: "rgba(17, 112, 134, 0.58)",
    fontSize: "25px",
    top: "120px",
  },
}
