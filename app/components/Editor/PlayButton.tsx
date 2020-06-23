import * as React from 'react';
import { Icon, notification } from 'antd';
import * as Mousetrap from 'mousetrap'
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';
import {
  setCall,
  setIsLoading,
  setResponse,
  setResponseStreamData,
  setRequestStreamData,
  addResponseStreamData, setStreamCommitted
} from './actions';
import { ControlsStateProps } from './Controls';
import { GRPCEventType, GRPCRequest, ResponseMetaInformation } from '../../behaviour';

export const makeRequest = ({ dispatch, state, protoInfo }: ControlsStateProps) => {
  // Do nothing if not set
  if (!protoInfo) {
    return;
  }

  // Cancel the call if ongoing.
  if (state.loading && state.call) {
    state.call.cancel();
    return;
  }

  // Play button action:
  dispatch(setIsLoading(true));

  const grpcRequest = new GRPCRequest({
    url: state.url,
    inputs: state.data,
    metadata: state.metadata,
    protoInfo,
    interactive: state.interactive,
    tlsCertificate: state.tlsCertificate,
  });

  dispatch(setCall(grpcRequest));

  // Streaming cleanup
  if (grpcRequest.protoInfo.isClientStreaming()) {
    if (state.interactive) {
      dispatch(setRequestStreamData([state.data]));
    } else {
      dispatch(setRequestStreamData([]));
    }
  }

  dispatch(setResponseStreamData([]));

  grpcRequest.on(GRPCEventType.ERROR, (e: Error, metaInfo: ResponseMetaInformation) => {
    dispatch(setResponse({
      responseTime: metaInfo.responseTime,
      output: JSON.stringify({
        error: e.message,
      }, null, 2)
    }));
  });

  grpcRequest.on(GRPCEventType.DATA, (data: object, metaInfo: ResponseMetaInformation) => {
    if (metaInfo.stream && state.interactive) {
      dispatch(addResponseStreamData({
        output: JSON.stringify(data, null, 2),
        responseTime: metaInfo.responseTime,
      }));
    } else {
      dispatch(setResponse({
        responseTime: metaInfo.responseTime,
        output: JSON.stringify(data, null, 2),
      }));
    }
  });

  grpcRequest.on(GRPCEventType.END, () => {
    dispatch(setIsLoading(false));
    dispatch(setCall(undefined));
    dispatch(setStreamCommitted(false));
  });

  try {
    grpcRequest.send();
  } catch(e) {
    console.error(e);
    notification.error({
      message: "Error constructing the request",
      description: e.message,
      duration: 5,
      placement: "bottomRight",
      style: {
        width: "100%",
        wordBreak: "break-all",
      }
    });
    grpcRequest.emit(GRPCEventType.END);
  }
};

export function PlayButton({ dispatch, state, protoInfo }: ControlsStateProps) {
  React.useEffect(() => {
    Mousetrap.bindGlobal(['ctrl+enter', 'command+enter'], () => {
      if (state.loading) {
        return
      }
      makeRequest({ dispatch, state, protoInfo })
    })
    return () => {
      Mousetrap.unbind(['ctrl+enter', 'command+enter'])
    }
  }, [dispatch, state, protoInfo])

  return (
    <Icon
      type={state.loading ? "pause-circle" : "play-circle"}
      theme="filled" style={{ ...styles.playIcon, ...(state.loading ? { color: "#ea5d5d" } : {}) }}
      onClick={() => makeRequest({ dispatch, state, protoInfo })}
    />
  )
}

const styles = {
  playIcon: {
    fontSize: 50,
    color: "#28d440",
    border: "3px solid rgb(238, 238, 238)",
    borderRadius: "50%",
    cursor: "pointer",
    background: "#fff",
  },
};
