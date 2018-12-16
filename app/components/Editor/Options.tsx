import * as React from 'react';
import { Button, Switch } from 'antd';
import { setInteractive, setProtoVisibility } from './actions';
import { EditorAction } from './Editor';
import { ProtoInfo } from '../../behaviour';
import { storeInteractive } from '../../storage';

interface OptionsProps {
  protoInfo: ProtoInfo
  dispatch: React.Dispatch<EditorAction>
  interactiveChecked: boolean
  onInteractiveChange?: (chcked: boolean) => void
}

export function Options({ protoInfo, dispatch, interactiveChecked, onInteractiveChange }: OptionsProps) {
  return (
    <div style={{...styles.optionContainer, ...styles.inline}}>

      <div style={{ ...styles.inline }}>
        <div style={{paddingRight: 10}}>
          <Switch
            checkedChildren="Interactive"
            defaultChecked={interactiveChecked}
            unCheckedChildren="Manual &nbsp; &nbsp; &nbsp;"
            onChange={(checked) => {
              dispatch(setInteractive(checked));
              storeInteractive(checked);
              onInteractiveChange && onInteractiveChange(checked);
            }}
          />
        </div>

        <Button
          icon="file-ppt"
          type="dashed"
          onClick={() => dispatch(setProtoVisibility(true))}
        >
          View Proto
        </Button>
      </div>
    </div>
  )
}

const styles = {
  optionContainer: {
    width: "50%",
  },
  inline: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  }
};