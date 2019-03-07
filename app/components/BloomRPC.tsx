import * as React from 'react';
import { useEffect, useState } from 'react';
import { Layout, notification } from 'antd';
import { Sidebar } from './Sidebar';
import { TabData, TabList } from './TabList';
import { loadProtos, ProtoFile, ProtoService } from '../behaviour';
import {
  EditorTabsStorage,
  deleteRequestInfo,
  getImportPaths,
  getProtos,
  getRequestInfo,
  getTabs,
  storeProtos,
  storeRequestInfo,
  storeTabs,
} from '../storage';

export interface EditorTabs {
  activeKey: string
  tabs: TabData[]
}

export function BloomRPC() {

  const [protos, setProtosState] = useState<ProtoFile[]>([]);
  const [editorTabs, setEditorTabs] = useState<EditorTabs>({
    activeKey: "0",
    tabs: [],
  });

  function setTabs(props: EditorTabs) {
    setEditorTabs(props);
    storeTabs(props);
  }

  function setProtos(props: ProtoFile[]) {
    setProtosState(props);
    storeProtos(props);
  }

  // Preload editor with stored data.
  useEffect(() => {
    hydrateEditor(setProtos, setTabs);
  }, []);

  return (
    <Layout style={styles.layout} tagName="main">
      <Layout tagName="section">
        <Layout.Sider style={styles.sider} width={250}>
          <Sidebar
            protos={protos}
            onProtoUpload={handleProtoUpload(setProtos, protos)}
            onReload={() => {
              hydrateEditor(setProtos, setEditorTabs);
            }}
            onMethodSelected={handleMethodSelected(editorTabs, setTabs)}
            onDeleteAll={() => {
              setProtos([]);
            }}
          />
        </Layout.Sider>

        <Layout.Content tagName="section">
          <TabList
            tabs={editorTabs.tabs}
            activeKey={editorTabs.activeKey}
            onEditorRequestChange={(editorRequestInfo) => {
              storeRequestInfo(editorRequestInfo);
            }}
            onDelete={(activeKey: string) => {
              let newActiveKey = "0";

              const index = editorTabs.tabs
                .findIndex(tab => tab.tabKey === activeKey);

              if (index === -1) {
                return;
              }

              if (editorTabs.tabs.length > 1) {
                if (activeKey === editorTabs.activeKey) {
                  const newTab = editorTabs.tabs[index - 1] || editorTabs.tabs[index + 1];
                  newActiveKey = newTab.tabKey;
                } else {
                  newActiveKey = editorTabs.activeKey;
                }
              }

              deleteRequestInfo(activeKey);

              setTabs({
                activeKey: newActiveKey,
                tabs: editorTabs.tabs.filter(tab => tab.tabKey !== activeKey),
              });

            }}
            onChange={(activeKey: string) => {
              setTabs({
                activeKey,
                tabs: editorTabs.tabs,
              })
            }}
          />
        </Layout.Content>
      </Layout>

    </Layout>
  );
}

/**
 * Hydrate editor from persisted storage
 * @param setProtos
 * @param setEditorTabs
 */
async function hydrateEditor(setProtos: React.Dispatch<ProtoFile[]>, setEditorTabs: React.Dispatch<EditorTabs>) {
  const hydration = [];
  const savedProtos = getProtos();
  const importPaths = getImportPaths();

  if (savedProtos) {
    hydration.push(
      loadProtos(savedProtos, importPaths, handleProtoUpload(setProtos, []))
        .then(() => true)
    );

    const savedEditorTabs = getTabs();
    if (savedEditorTabs) {
      hydration.push(
        loadTabs(savedEditorTabs)
          .catch(() => setEditorTabs({activeKey: "0", tabs: []}))
          .then(setEditorTabs)
          .then(() => true)
      );
    }
  }

  return Promise.all(hydration);
}

/**
 * Load tabs
 * @param editorTabs
 */
async function loadTabs(editorTabs: EditorTabsStorage): Promise<EditorTabs> {
  const storedEditTabs: EditorTabs = {
    activeKey: editorTabs.activeKey,
    tabs: [],
  };

  const importPaths = getImportPaths();

  const protos = await loadProtos(editorTabs.tabs.map((tab) => {
    return tab.protoPath;
  }), importPaths);


  storedEditTabs.tabs = editorTabs.tabs.map((tab) => {
    const def = protos.find((protoFile) => {
      const match = Object.keys(protoFile.services).find((service) => service === tab.serviceName);
      return Boolean(match);
    });

    if (!def) {
      throw new Error("Not found.");
    }

    const tabKey = `${tab.serviceName}${tab.methodName}`;

    return {
      tabKey,
      methodName: tab.methodName,
      service: def.services[tab.serviceName],
      initialRequest: getRequestInfo(tabKey),
    }
  });

  return storedEditTabs;
}

/**
 *
 * @param setProtos
 * @param protos
 */
function handleProtoUpload(setProtos: React.Dispatch<ProtoFile[]>, protos: ProtoFile[]) {
  return function (newProtos: ProtoFile[], err: Error | void) {
    if (err) {
      notification.error({
        message: "Error while importing protos",
        description: err.message,
        duration: 5,
        placement: "bottomLeft",
        style: {
          width: "89%",
          wordBreak: "break-all",
        }
      });
      setProtos([]);
      return;
    }

    const protoMinusExisting = protos.filter((proto) => {
      return !newProtos.find((p) => p.fileName === proto.fileName)
    });

    const appProtos = [...protoMinusExisting, ...newProtos];
    setProtos(appProtos);

    return appProtos;
  }
}

/**
 * Handle method selected
 * @param editorTabs
 * @param setTabs
 */
function handleMethodSelected(editorTabs: EditorTabs, setTabs: React.Dispatch<EditorTabs>) {
  return (methodName: string, protoService: ProtoService) => {
    const tab = {
      tabKey: `${protoService.serviceName}${methodName}`,
      methodName,
      service: protoService
    };

    const tabExists = editorTabs.tabs
      .find(exisingTab => exisingTab.tabKey === tab.tabKey);

    if (tabExists) {
      setTabs({
        activeKey: tab.tabKey,
        tabs: editorTabs.tabs,
      });
      return;
    }

    const newTabs = [...editorTabs.tabs, tab];

    setTabs({
      activeKey: tab.tabKey,
      tabs: newTabs,
    });
  }
}

const styles = {
  layout: {
    height: "100vh"
  },
  header: {
    color: "#fff",
    fontWeight: 900,
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  sider: {
    zIndex: 20,
    borderRight: "1px solid rgba(0, 21, 41, 0.18)",
    backgroundColor: "white",
    boxShadow: "3px 0px 4px 0px rgba(0,0,0,0.10)",
  },
};
