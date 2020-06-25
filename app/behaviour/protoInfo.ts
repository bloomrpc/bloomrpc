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
    const method = this.methodDef();
    return method && method.requestStream;
  }

  isServerStreaming() {
    const method = this.methodDef();
    return method && method.responseStream;
  }

  isBiDirectionalStreaming() {
    return this.isClientStreaming() && this.isServerStreaming();
  }

  usesStream() {
    return this.isClientStreaming() || this.isServerStreaming();
  }
}
