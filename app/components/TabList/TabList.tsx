import * as React from 'react';
import { Tabs } from 'antd';
import { Editor, InitialRequest } from '../Editor';
import { ProtoService } from '../../behaviour';

interface TabListProps {
  tabs: TabData[]
  activeKey?: string
  onChange?: (activeKey: string) => void
  onDelete?: (activeKey: string | React.MouseEvent<HTMLElement>) => void
  onEditorRequestChange?: (tabId: string, url: string, inputs: string, metadata: string) => void
}

export interface TabData {
  tabKey: string
  methodName: string
  service: ProtoService
  initialRequest?: InitialRequest,
}

export function TabList({ tabs, activeKey, onChange, onDelete, onEditorRequestChange }: TabListProps) {
  return (
    <Tabs
      onEdit={(targetKey, action) => {
        if (action === "remove") {
          onDelete && onDelete(targetKey);
        }
      }}
      onChange={onChange}
      tabBarStyle={styles.tabBarStyle}
      style={styles.tabList}
      activeKey={activeKey || "0"}
      hideAdd
      type="editable-card"
    >
      {tabs.length === 0 ? (
        <Tabs.TabPane
          tab={"New Tab"}
          key={"0"}
          closable={false}
          style={{ height: "100%" }}
        >
          <Editor methodName="" />
        </Tabs.TabPane>
      ) : tabs.map((tab) => (
          <Tabs.TabPane
            tab={`${tab.service.serviceName}.${tab.methodName}`}
            key={tab.tabKey}
            closable={true}
            style={{ height: "100%" }}
          >
            <Editor
              service={tab.service}
              methodName={tab.methodName}
              key={tab.tabKey}
              initialRequest={tab.initialRequest}
              onRequestChange={(url, inputs, metadata) => {
                onEditorRequestChange && onEditorRequestChange(tab.tabKey, url, inputs, metadata)
              }}
            />
          </Tabs.TabPane>
      ))}
    </Tabs>
  );
}

const styles = {
  tabList: {
    height: "100%"
  },
  tabBarStyle: {
    padding: "10px 0px 0px 20px",
    marginBottom: "0px",
  }
};