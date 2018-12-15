import * as React from 'react';
import { Icon } from 'antd';
import { setCall, setIsLoading, setOutput } from './actions';
import { EditorAction } from './Editor';
import { GRPCEventType, GRPCRequest, ProtoService } from '../../behaviour';

interface PlayControl {
  dispatch: React.Dispatch<EditorAction>
  loading: boolean
  url: string
  metadata: string
  methodName: string
  service?: ProtoService
  data: string
  call: any
}


export function PlayControl({ dispatch, loading, url, metadata, methodName, service, data, call }: PlayControl) {
  return (
    <Icon
      type={loading ? "pause-circle" : "play-circle"}
      theme="filled" style={{ ...styles.playIcon, ...(loading ? { color: "#ea5d5d" } : {}) }}
      onClick={() => {
        // Do nothing if not set
        if (!service || !methodName) {
          return;
        }

        // Cancel the call if ongoing.
        if (loading && call) {
          call.cancel();
          return;
        }

        // Play button action:
        dispatch(setIsLoading(true));

        const grpcRequest = new GRPCRequest({
          url,
          inputs: data,
          metadata: metadata,
          methodName,
          service,
        });

        dispatch(setCall(grpcRequest));

        grpcRequest.on(GRPCEventType.ERROR, (e: Error) => {
          dispatch(setOutput(JSON.stringify({
            error: e.message,
          }, null, 2)));
        });

        grpcRequest.on(GRPCEventType.DATA, (data: object) => {
          dispatch(setOutput(JSON.stringify(data, null, 2)));
        });

        grpcRequest.on(GRPCEventType.END, () => {
          dispatch(setIsLoading(false));
          dispatch(setCall(undefined));
        });

        grpcRequest.send();
      }}
    />
  )
}

const styles = {
  playIcon: {
    fontSize: 50,
    marginTop: 17,
    color: "#28d440",
    border: "3px solid rgb(238, 238, 238)",
    borderRadius: "50%",
    cursor: "pointer",
    background: "#fff",
  },
};