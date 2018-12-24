import { remote } from 'electron';
import { fromFileName, mockRequestMethods, Proto, walkServices } from 'bloomrpc-mock';
import * as path from "path";
import { ProtoFile, ProtoService } from './protobuf';
import { Service } from 'protobufjs';

export type OnProtoUpload = (protoFiles: ProtoFile[], err?: Error) => void

/**
 * Upload protofiles
 * @param onProtoUploaded
 */
export function importProtos(onProtoUploaded: OnProtoUpload) {
  remote.dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'Protos', extensions: ['proto'] },
    ]
  }, async (filePaths) => {
    if (!filePaths) {
      return;
    }
    await loadProtos(filePaths, onProtoUploaded);
  });
}

/**
 * Load protocol buffer files
 * @param filePaths
 * @param onProtoUploaded
 */
export async function loadProtos(filePaths: string[], onProtoUploaded?: OnProtoUpload): Promise<ProtoFile[]> {
  try {

    const protos = await Promise.all(filePaths.map(fromFileName));

    const protoList = protos.reduce((list: ProtoFile[], proto: Proto) => {

      // Services with methods
      const services = parseServices(proto);

      // Proto file
      list.push({
        proto,
        fileName: proto.fileName.split(path.sep).pop() || "",
        services,
      });

      return list;
    }, []);
    onProtoUploaded && onProtoUploaded(protoList, undefined);
    return protoList;

  } catch (e) {
    console.error(e);
    onProtoUploaded && onProtoUploaded([], e);

    if (!onProtoUploaded) {
      throw e;
    }

    return [];
  }
}

/**
 * Parse Grpc services from root
 * @param proto
 */
function parseServices(proto: Proto) {

  const services: {[key: string]: ProtoService} = {};

  walkServices(proto, (service: Service, _: any, serviceName: string) => {
    const mocks = mockRequestMethods(service);
    services[serviceName] = {
      serviceName: serviceName,
      proto,
      methodsMocks: mocks,
      methodsName: Object.keys(mocks),
    };
  });

  return services;
}