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
};

export function setUrl(value: string) {
  return { type: actions.SET_URL, value };
}

export function setData(data: string) {
  return {type: actions.SET_DATA, data}
}

export function setIsLoading(isLoading: boolean) {
  return {type: actions.SET_IS_LOADING, isLoading}
}

export function setOutput(output: string) {
  return {type: actions.SET_OUTPUT, output}
}

export function setCall(call?: GRPCRequest) {
  return {type: actions.SET_CALL, call}
}

export function setMetadata(metadata: string) {
  return {type: actions.SET_METADATA, metadata}
}

export function setMetadataVisibilty(visible: boolean) {
  return {type: actions.SET_METADATA_VISIBILITY, visible}
}

export function setProtoVisibility(visible: boolean) {
  return {type: actions.SET_PROTO_VISIBILITY, visible}
}

export { actions };