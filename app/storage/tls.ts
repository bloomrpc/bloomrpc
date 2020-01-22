// @ts-ignore
import * as Store from "electron-store";
import { Certificate } from "../behaviour";

const TLSStore = new Store({
  name: "tls",
});


const TLS_KEYS = {
  CERTIFICATES: 'certificates'
};


export function storeTLSList(certs: Certificate[]) {
  TLSStore.set(TLS_KEYS.CERTIFICATES, certs);
}

export function getTLSList() {
  const serverCertificate = {
    useServerCertificate: true,
    rootCert: { fileName: "Server Certificate", filePath: "" },
  };
  return TLSStore.get(TLS_KEYS.CERTIFICATES, [serverCertificate]);
}

export function clearTLS() {
  return TLSStore.clear();
}
