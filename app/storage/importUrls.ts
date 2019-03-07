// @ts-ignore
import * as Store from "electron-store";


const ProtoUrlsStore = new Store({
  name: "protoUrls",
});
const PROTO_URL_KEYS = {
  PROTO_URL_PATH: "urls"
};

export function storeProtoUrls(urls: string[]) {
  ProtoUrlsStore.set(PROTO_URL_KEYS.PROTO_URL_PATH, urls);
}

export function getProtoUrls(): string[] {
  return ProtoUrlsStore.get(PROTO_URL_KEYS.PROTO_URL_PATH, [""]);
}

export function clearProtoUrls() {
  return ProtoUrlsStore.clear();
}