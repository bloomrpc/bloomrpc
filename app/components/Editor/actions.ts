import { Certificate, GRPCRequest } from '../../behaviour';
import { EditorResponse } from "./Editor";

const actions = {
  SET_URL: "SET_URL",
  SET_DATA: "SET_DATA",
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_RESPONSE: "SET_RESPONSE",
  SET_CALL: "SET_CALL",
  SET_METADATA: "SET_METADATA",
  SET_METADATA_VISIBILITY: "SET_METADATA_VISIBILITY",
  SET_PROTO_VISIBILITY: "SET_PROTO_VIEW",
  SET_INTERACTIVE: "SET_INTERACTIVE",
  SET_GRPC_WEB: "SET_GRPC_WEB",
  SET_REQUEST_STREAM_DATA: "SET_REQUEST_STREAM_DATA",
  SET_RESPONSE_STREAM_DATA: "SET_RESPONSE_STREAM_DATA",
  ADD_RESPONSE_STREAM_DATA: "ADD_RESPONSE_STREAM_DATA",
  SET_STREAM_COMMITTED: "SET_STREAM_COMMITTED",
  SET_SSL_CERTIFICATE: "SET_SSL_CERTIFICATE",
  SET_ENVIRONMENT: "SET_ENVIRONMENT",
};

export function setUrl(value: string) {
  return { type: actions.SET_URL, value };
}

export function setData(data: string) {
  return { type: actions.SET_DATA, data };
}

export function setIsLoading(isLoading: boolean) {
  return { type: actions.SET_IS_LOADING, isLoading };
}

export function setResponse(response: EditorResponse) {
  return { type: actions.SET_RESPONSE, response };
}

export function setCall(call?: GRPCRequest) {
  return { type: actions.SET_CALL, call };
}

export function setMetadata(metadata: string) {
  return { type: actions.SET_METADATA, metadata };
}

export function setMetadataVisibilty(visible: boolean) {
  return { type: actions.SET_METADATA_VISIBILITY, visible };
}

export function setProtoVisibility(visible: boolean) {
  return { type: actions.SET_PROTO_VISIBILITY, visible };
}

export function setGrpcWeb(grpcWeb: boolean) {
  return { type: actions.SET_GRPC_WEB, grpcWeb };
}

export function setInteractive(interactive: boolean) {
  return { type: actions.SET_INTERACTIVE, interactive };
}

export function setRequestStreamData(requestData: string[]) {
  return { type: actions.SET_REQUEST_STREAM_DATA, requestData };
}

export function setResponseStreamData(responseData: EditorResponse[]) {
  return { type: actions.SET_RESPONSE_STREAM_DATA, responseData };
}

export function addResponseStreamData(responseData: EditorResponse) {
  return { type: actions.ADD_RESPONSE_STREAM_DATA, responseData };
}

export function setStreamCommitted(committed: boolean) {
  return { type: actions.SET_STREAM_COMMITTED, committed };
}

export function setTSLCertificate(certificate?: Certificate) {
  return { type: actions.SET_SSL_CERTIFICATE, certificate };
}

export function setEnvironment(environment: string) {
  return { type: actions.SET_ENVIRONMENT, environment };
}

export { actions };
