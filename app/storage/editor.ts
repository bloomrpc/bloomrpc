// @ts-ignore
import * as Store from 'electron-store';
import { ProtoFile } from '../behaviour';
import { EditorTabs } from '../components/BloomRPC';
import { EditorRequest } from '../components/Editor';
import { EditorTabRequest } from "../components/TabList";

const EditorStore = new Store({
  name: "editor",
});

const KEYS = {
  URL: "url",
  PROTOS: "protos",
  TABS: "tabs",
  REQUESTS: "requests",
  INTERACTIVE: "interactive",
};

/**
 * Store URL
 * @param url
 */
export function storeUrl(url: string) {
  EditorStore.set(KEYS.URL, url);
}

export function storeInteractive(interactive: boolean) {
  EditorStore.set(KEYS.INTERACTIVE, interactive);
}

export function getInteractive() {
  return Boolean(EditorStore.get(KEYS.INTERACTIVE));
}

/**
 * Get URL
 */
export function getUrl(): string | void {
  return EditorStore.get(KEYS.URL);
}

/**
 * Store Proto List on the sidebar
 * @param protos
 */
export function storeProtos(protos: ProtoFile[]) {
  EditorStore.set(KEYS.PROTOS, protos.map(proto => proto.proto.filePath));
}

/**
 * Get proto list
 */
export function getProtos(): string[] | void {
  return EditorStore.get(KEYS.PROTOS);
}

/**
 * Store tabs
 * @param editorTabs
 */
export function storeTabs(editorTabs: EditorTabs) {
  EditorStore.set(KEYS.TABS, {
    activeKey: editorTabs.activeKey,
    tabs: editorTabs.tabs.map((tab) => ({
      methodName: tab.methodName,
      serviceName: tab.service.serviceName,
      protoPath: tab.service.proto.filePath,
    })),
  })
}

export interface EditorTabsStorage {
  activeKey: string,
  tabs: {
    protoPath: string,
    methodName: string,
    serviceName: string,
  }[]
}

/**
 * Get tabs
 */
export function getTabs(): EditorTabsStorage | void {
  return EditorStore.get(KEYS.TABS);
}

interface TabRequestInfo extends EditorRequest {
  id: string
}

/**
 * Store editor request info
 * @param id
 * @param url
 * @param data
 * @param inputs
 * @param metadata
 * @param interactive
 * @param tlsCertificate
 */
export function storeRequestInfo({id, url, data, inputs, metadata, interactive, tlsCertificate}: EditorTabRequest) {
  const request = {
    id,
    url,
    data: inputs || data,
    metadata,
    interactive,
    tlsCertificate,
    createdAt: new Date().toISOString(),
  };

  const requestList = EditorStore.get('requests', [])
    .filter((requestItem: TabRequestInfo) => requestItem.id !== id);

  EditorStore.set(KEYS.REQUESTS, [...requestList, request]);
}

/**
 * Get editor request info
 * @param tabKey
 */
export function getRequestInfo(tabKey: string): EditorRequest | undefined {
  const requests = EditorStore.get(KEYS.REQUESTS, []);
  return requests.find((request: TabRequestInfo) => request.id === tabKey);
}

/**
 * Delete editor request info
 * @param tabKey
 */
export function deleteRequestInfo(tabKey: string) {
  const requests = EditorStore.get(KEYS.REQUESTS, [])
    .filter((requestItem: TabRequestInfo) => requestItem.id !== tabKey);

  EditorStore.set('requests', requests);
}

export function clearEditor() {
  EditorStore.clear();
}

export { EditorStore };


