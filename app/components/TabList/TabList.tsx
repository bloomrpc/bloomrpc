import * as React from 'react';
import { Tabs } from 'antd';
import { Editor, InitialRequest } from '../Editor';
import { ProtoInfo, ProtoService } from '../../behaviour';

interface TabListProps {
  tabs: TabData[]
  activeKey?: string
  onChange?: (activeKey: string) => void
  onDelete?: (activeKey: string | React.MouseEvent<HTMLElement>) => void
  onEditorRequestChange?: (tabId: string, url: string, inputs: string, metadata: string, interactive: boolean) => void
}

export interface TabData {
  tabKey: string
  methodName: string
  service: ProtoService
  initialRequest?: InitialRequest,
}

export function TabList({ tabs, activeKey, onChange, onDelete, onEditorRequestChange }: TabListProps) {
  const tabsWithMatchingKey =
    tabs.filter(tab => tab.tabKey === activeKey);

  const tabActiveKey = tabsWithMatchingKey.length === 0
    ? [...tabs.map(tab => tab.tabKey)].pop()
    : [...tabsWithMatchingKey.map(tab => tab.tabKey)].pop();

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
      activeKey={tabActiveKey || "0"}
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
          <Editor />
        </Tabs.TabPane>
      ) : tabs.map((tab) => (
          <Tabs.TabPane
            tab={`${tab.service.serviceName}.${tab.methodName}`}
            key={tab.tabKey}
            closable={true}
            style={{ height: "100%" }}
          >
            <Editor
              protoInfo={new ProtoInfo(tab.service, tab.methodName)}
              key={tab.tabKey}
              initialRequest={tab.initialRequest}
              onRequestChange={(url, inputs, metadata, interactive) => {
                onEditorRequestChange && onEditorRequestChange(tab.tabKey, url, inputs, metadata, interactive)
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