import * as React from 'react';
import {Button, Icon, Tooltip, Switch, Modal} from 'antd';
import { setInteractive, setProtoVisibility } from './actions';
import { EditorAction } from './Editor';
import {useState} from "react";
import {TLSManager} from "./TLSManager";
import { ProtoInfo, Certificate } from '../../behaviour';
import { storeInteractive } from '../../storage';

interface OptionsProps {
  protoInfo: ProtoInfo
  dispatch: React.Dispatch<EditorAction>
  interactiveChecked: boolean
  onInteractiveChange?: (chcked: boolean) => void
  tlsSelected?: Certificate
  onTLSSelected?: (selected: Certificate) => void
}

export function Options({ protoInfo, dispatch, interactiveChecked, onInteractiveChange, tlsSelected, onTLSSelected }: OptionsProps) {

  const [tlsModalVisible, setTlsModalVisible] = useState(false);

  return (
    <div style={{...styles.optionContainer, ...styles.inline}}>

      <div style={{paddingLeft: 15}}>
          <div style={{
            display: "flex",
            alignItems: "center",
          }}>
            <Tooltip placement="bottom" title={tlsSelected ? "Secure Connection" : "Unsecure Connection"}>
              <Icon
                  type={tlsSelected ? "lock" : "unlock"}
                  style={{
                    fontSize: 18,
                    color: tlsSelected ? "#28d440" : "#bdbcbc",
                  }}
              />
            </Tooltip>
            <span
              onClick={() => setTlsModalVisible(true)}
              style={styles.tlsButton}
            >
              <span style={{}}>TLS</span>
            </span>
          </div>

        <Modal
            title={(
                <div>
                  <Icon type="lock" />
                  <span style={{marginLeft: 10}}> TLS / SSL Manager </span>
                </div>
            )}
            visible={tlsModalVisible}
            onCancel={() => setTlsModalVisible(false)}
            onOk={() => setTlsModalVisible(false)}
            bodyStyle={{padding: 0}}
            width={750}
            okText={"Done"}
            cancelText={"Close"}
        >
          <TLSManager
              selected={tlsSelected}
              onSelected={onTLSSelected}
          />
        </Modal>
      </div>

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
    justifyContent: "space-between",
    alignItems: "center",
  },
  tlsButton: {
    marginLeft: 10,
    cursor: "pointer",
    background: "#fafafa",
    padding: "1px 10px",
    borderRadius: "3px",
    fontWeight: 500,
    fontSize: "13px",
    border: "1px solid #d8d8d8",
  }
};