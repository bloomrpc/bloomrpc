import { Proto, ServiceMethodsPayload } from 'bloomrpc-mock';

export interface ProtoFile {
  proto: Proto,
  fileName: string
  services: ProtoServiceList;
}

export interface ProtoServiceList {
  [key: string]: ProtoService,
}

export interface ProtoService {
  proto: Proto,
  serviceName: string,
  methodsMocks: ServiceMethodsPayload,
  methodsName: string[],
}
