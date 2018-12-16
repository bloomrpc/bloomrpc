// @ts-ignore
import * as lodashGet from 'lodash.get';
import { ProtoService } from './protobuf';


export class ProtoInfo {

  service: ProtoService;
  methodName: string;

  constructor(service: ProtoService, methodName: string) {
    this.service = service;
    this.methodName = methodName;
  }

  client(): any {
      return lodashGet(this.service.proto.ast, this.service.serviceName);
  }

  serviceDef() {
    return this.service.proto.root.lookupService(this.service.serviceName);
  }

  methodDef() {
    const serviceDefinition = this.serviceDef();
    return serviceDefinition.methods[this.methodName];
  }

  isClientStreaming() {
    return this.methodDef().requestStream;
  }

  isServerStreaming() {
    return this.methodDef().responseStream;
  }

  isBiDirectionalStreaming() {
    return this.isClientStreaming() && this.isServerStreaming();
  }
}