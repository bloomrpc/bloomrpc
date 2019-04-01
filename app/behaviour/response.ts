import { remote } from "electron";
import * as path from 'path';
import * as fs from 'fs';
import { ProtoInfo } from "./protoInfo";
import { EditorState } from "../components/Editor";


export function exportResponseToJSONFile(protoInfo: ProtoInfo, editorState: EditorState) {
  return new Promise((resolve, reject) => {
    remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
      filters: []
    }, (filePaths) => {
      if (!filePaths) {
        return reject("No folder selected");
      }

      const timestamp = new Date().getTime();
      const basePath = filePaths[0];
      const fileName = `${protoInfo.service.serviceName}.${protoInfo.methodName}_${timestamp}`;

      const exportPath = path.join(basePath, fileName);

      const responseData = editorState.response.output
          ? editorState.response.output
          : JSON.stringify(editorState.responseStreamData.map((steam) => JSON.parse(steam.output)), null, 2);


      fs.writeFileSync(exportPath, responseData);

      resolve(exportPath);
    });
  })
}