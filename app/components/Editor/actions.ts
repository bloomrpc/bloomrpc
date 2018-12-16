import { GRPCRequest } from '../../behaviour';

const actions = {
  SET_URL: "SET_URL",
  SET_DATA: "SET_DATA",
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_OUTPUT: "SET_OUTPUT",
  SET_CALL: "SET_CALL",
  SET_METADATA: "SET_METADATA",
  SET_METADATA_VISIBILITY: "SET_METADATA_VISIBILITY",
  SET_PROTO_VISIBILITY: "SET_PROTO_VIEW",
  SET_INTERACTIVE: "SET_INTERACTIVE",
  SET_REQUEST_STREAM_DATA: "SET_REQUEST_STREAM_DATA",
  SET_RESPONSE_STREAM_DATA: "SET_RESPONSE_STREAM_DATA",
  ADD_RESPONSE_STREAM_DATA: "ADD_RESPONSE_STREAM_DATA",
  SET_STREAM_COMMITTED: "SET_STREAM_COMMITTED",
};

export function setUrl(value: string) {
  return { type: actions.SET_URL, value };
}

export function setData(data: string) {
  return { type: actions.SET_DATA, data }
}

export function setIsLoading(isLoading: boolean) {
  return { type: actions.SET_IS_LOADING, isLoading }
}

export function setOutput(output: string) {
  return { type: actions.SET_OUTPUT, output }
}

export function setCall(call?: GRPCRequest) {
  return { type: actions.SET_CALL, call }
}

export function setMetadata(metadata: string) {
  return { type: actions.SET_METADATA, metadata }
}

export function setMetadataVisibilty(visible: boolean) {
  return { type: actions.SET_METADATA_VISIBILITY, visible }
}

export function setProtoVisibility(visible: boolean) {
  return { type: actions.SET_PROTO_VISIBILITY, visible }
}

export function setInteractive(interactive: boolean) {
  return { type: actions.SET_INTERACTIVE, interactive }
}

export function setRequestStreamData(requestData: string[]) {
  return { type: actions.SET_REQUEST_STREAM_DATA, requestData }
}

export function setResponseStreamData(responseData: string[]) {
  return { type: actions.SET_RESPONSE_STREAM_DATA, responseData }
}

export function addResponseStreamData(responseData: string) {
  return { type: actions.ADD_RESPONSE_STREAM_DATA, responseData }
}

export function setStreamCommitted(committed: boolean) {
  return { type: actions.SET_STREAM_COMMITTED, committed };
}

export { actions };