import { EventEmitter } from "events";
import { credentials, Metadata } from "grpc";
import { ProtoService } from './protobuf';
// @ts-ignore
import * as lodashGet from 'lodash.get';

interface GRPCRequestInfo {
  url: string;
  service: ProtoService;
  methodName: string;
  metadata: string;
  inputs: string;
}

export const GRPCEventType = {
  DATA: "DATA",
  ERROR: "ERROR",
  END: "END",
};

export class GRPCRequest extends EventEmitter {
  url: string;
  service: ProtoService;
  methodName: string;
  metadata: string;
  inputs: string;
  _call: any;

  constructor({ url, service, methodName, metadata, inputs }: GRPCRequestInfo) {
    super();
    this.url = url;
    this.service = service;
    this.methodName = methodName;
    this.metadata = metadata;
    this.inputs = inputs;
    this._call = undefined;
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

  send(): GRPCRequest {
    const serviceClient: any = this.client();

    let inputs = {};
    let metadata: {[key: string]: any} = {};

    const client = new serviceClient(this.url, credentials.createInsecure());

    try {
      inputs = JSON.parse(this.inputs || "{}")
    } catch (e) {
      e.message = "Couldn't parse JSON inputs Invalid json";
      this.emit(GRPCEventType.ERROR, e);
      this.emit(GRPCEventType.END);
      return this;
    }

    try {
      metadata = JSON.parse(this.metadata || "{}")
    } catch (e) {
      e.message = "Couldn't parse JSON metadata Invalid json";
      this.emit(GRPCEventType.ERROR, e);
      this.emit(GRPCEventType.END);
      return this;
    }

    // Add metadata
    const md = new Metadata();
    Object.keys(metadata).forEach(key => {
      md.add(key, metadata[key]);
    });

    // Gather method information
    const methodDefinition = this.methodDef();

    // Unary call
    const call = client[this.methodName](inputs, md, (err: any, response: any) => {
      if (err) {
        // Request cancelled do nothing
        if (err.code === 1) {
          return;
        } else {
          this.emit(GRPCEventType.ERROR, err);
        }
      } else {
        this.emit(GRPCEventType.DATA, response);
      }
      this.emit(GRPCEventType.END, this);
    });

    // Server Streaming.
    if (methodDefinition.responseStream) {
      call.on('data', (data: object) => {
        this.emit(GRPCEventType.DATA, data, true);
      });

      call.on('error', (err: { [key: string]: any }) => {
        if (err && err.code !== 1) {
          this.emit(GRPCEventType.ERROR, err);

          if (err.code === 2 || err.code === 14) { // Stream Removed.
            this.emit(GRPCEventType.END, call);
          }
        }
      });

      call.on('end', () => {
        this.emit(GRPCEventType.END, this);
      });
    }

    this._call = call;

    return this;
  }

  cancel() {
    if (this._call) {
      this._call.cancel();
      this.emit(GRPCEventType.END);
    }
  }
}