import * as React from 'react';
import { EditorAction, EditorState } from './Editor';
import { PlayButton } from './PlayButton';
import { Icon, Tooltip } from 'antd';
import { setRequestStreamData, setStreamCommitted } from './actions';
import { ProtoInfo } from '../../behaviour';

export interface ControlsStateProps {
  dispatch: React.Dispatch<EditorAction>
  state: EditorState
  protoInfo?: ProtoInfo
}

export function Controls({ dispatch, state, protoInfo }: ControlsStateProps) {
  return (
    <div>
      <PlayButton
        dispatch={dispatch}
        state={state}
        protoInfo={protoInfo}
      />

      {
        (state.interactive && state.loading) &&
        (state.call && state.call.protoInfo.isClientStreaming())
        && !state.streamCommitted &&
        (
          <div style={styles.controlsContainer}>
            <Tooltip placement="topLeft" title={"Push Data"}>
              <div style={styles.pushData} onClick={() => {
                if (state.call) {
                  dispatch(setRequestStreamData([
                    ...state.requestStreamData,
                    state.data,
                  ]));
                  state.call.write(state.data);
                }
              }}>
                <Icon type="double-right"/>
              </div>
            </Tooltip>

            <Tooltip placement="topRight" title={"Commit Stream"}>
              <div
                style={styles.commit}
                onClick={() => {
                  if (state.call) {
                    state.call.commitStream();
                    dispatch(setStreamCommitted(true));
                  }
                }}>
                <Icon type="check"/>
              </div>
            </Tooltip>
          </div>
        )}
      </div>
  );
}

const styles = {
  controlsContainer: {
    display: "flex",
    marginLeft: "-15px",
    marginTop: 17
  },
  pushData: {
    background: "#11c9f3",
    color: "white",
    padding: "10px",
    paddingLeft: "12px",
    borderRadius: "50% 0 0 50%",
    fontSize: "18px",
    cursor: "pointer",
    border: "2px solid rgb(238, 238, 238)",
    borderRight: "none"
  },
  commit: {
    background: "#28d440",
    color: "white",
    padding: "10px",
    paddingLeft: "12px",
    borderRadius: "0 50% 50% 0",
    fontSize: "18px",
    cursor: "pointer",
    border: "2px solid rgb(238, 238, 238)",
    borderLeft: "none",
  }
};