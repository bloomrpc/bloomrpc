import * as React from 'react';
import { EditorAction, EditorState } from './Editor';
import { PlayButton } from './PlayButton';
import { Icon, Tooltip } from 'antd';
import { setRequestStreamData, setStreamCommitted } from './actions';
import { ProtoInfo } from '../../behaviour';
import styled from 'styled-components'
export interface ControlsStateProps {
  dispatch: React.Dispatch<EditorAction>
  state: EditorState
  protoInfo?: ProtoInfo
}

const StyledTooltip = styled(Tooltip)`
  color: ${props=>props.theme.tooltip.color};
`

const Commit = styled.div`
  color: ${props=>props.theme.tooltip.primary};
  padding: 10px;
  paddingleft: 12px;
  border-radius: 0 50% 50% 0;
  font-size: 18px;
  cursor: pointer;
  border-left: none;
`

const PushData = styled.div`
  color: ${props=>props.theme.primary};
  padding: 10px;
  paddingleft: 12px;
  border-radius: 0 50% 50% 0;
  font-size: 18px;
  cursor: pointer;
  border-left: none;
`

const ControlsContainer = styled.div`
  display: flex;
`

export function Controls({ dispatch, state, protoInfo }: ControlsStateProps) {
  return (
    <>
      <PlayButton
        dispatch={dispatch}
        state={state}
        protoInfo={protoInfo}
      />

      { isControlVisible(state) &&
        (
          <ControlsContainer>
            <StyledTooltip placement="topLeft" title={"Push Data"}>
              <PushData onClick={() => {
                if (state.call) {
                  dispatch(setRequestStreamData([
                    ...state.requestStreamData,
                    state.data,
                  ]));
                  state.call.write(state.data);
                }
              }}>
                <Icon type="double-right"/>
              </PushData>
            </StyledTooltip>

            <StyledTooltip placement="topRight" title={"Commit Stream"}>
              <Commit
                onClick={() => {
                  if (state.call) {
                    state.call.commitStream();
                    dispatch(setStreamCommitted(true));
                  }
                }}>
                <Icon type="check"/>
              </Commit>
            </StyledTooltip>
          </ControlsContainer>
        )}
      </>
  );
}

export function isControlVisible(state: EditorState) {
  return Boolean(
      (state.interactive && state.loading) &&
      (state.call && state.call.protoInfo.isClientStreaming()) &&
      !state.streamCommitted);
}