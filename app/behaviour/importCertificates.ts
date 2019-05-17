import {remote} from "electron";
import * as path from "path";

export interface CertFile {
    fileName: string;
    filePath: string;
}

export interface Certificate {
    rootCert: CertFile;
    privateKey?: CertFile;
    certChain?: CertFile;
    sslTargetHost?: string;
    useSystemDefault?: boolean;
}

export function importRootCert(): Promise<Certificate> {
    return new Promise((resolve, reject) => {
        remote.dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'All', extensions: ['*'] },
            ]
        }, async (filePaths) => {
            if (!filePaths || filePaths.length === 0) {
                reject("No file selected");
                return;
            }

            const filePath = filePaths[0];

            resolve({
                rootCert: {
                    fileName: path.basename(filePath),
                    filePath: filePath,
                },
            });
        });
    });
}

export function importPrivateKey(): Promise<CertFile> {
    return new Promise((resolve, reject) => {
        remote.dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'All', extensions: ['*'] },
            ]
        },(filePaths) => {
            if (!filePaths || filePaths.length === 0) {
                return reject("No file selected");
            }
            resolve({
                filePath: filePaths[0],
                fileName: path.basename(filePaths[0]),
            });
        });
    });
}

export function importCertChain(): Promise<CertFile> {
    return new Promise((resolve, reject) => {
        remote.dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'All', extensions: ['*'] },
            ]
        },(filePaths) => {
            if (!filePaths || filePaths.length === 0) {
                return reject("No file selected");
            }
            resolve({
                filePath: filePaths[0],
                fileName: path.basename(filePaths[0]),
            });
        });
    });
}