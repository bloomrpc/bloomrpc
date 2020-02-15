import * as React from 'react';
import { Button, Icon, Tooltip, Switch, Modal, Menu, Dropdown } from 'antd';
import { setInteractive, setProtoVisibility } from './actions';
import { EditorAction } from './Editor';
import {useState} from "react";
import {TLSManager} from "./TLSManager";
import { ProtoInfo, Certificate } from '../../behaviour';
import styled from 'styled-components'
interface OptionsProps {
  protoInfo: ProtoInfo
  dispatch: React.Dispatch<EditorAction>
  interactiveChecked: boolean
  onInteractiveChange?: (chcked: boolean) => void
  tlsSelected?: Certificate
  onTLSSelected?: (selected: Certificate) => void
  onClickExport?: () => void
}

const StyledModalTitle = styled.div`
  color: ${props=>props.theme.primary} !important;
  background: ${props=>props.theme.background} !important;
`

const StyledModal = styled(Modal)`
  color: ${props=>props.theme.primary} !important;
  .ant-modal-content .ant-modal-close-x {
    color: ${props=>props.theme.primary} !important;
  }
  .ant-modal-header {
    background: ${props=>props.theme.background} !important;
  }
  .ant-modal-footer {
    background: ${props=>props.theme.background} !important;
    border-top: none;
  }
  .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    color: ${props=>props.theme.primary} !important;
  }
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background: ${props=>props.theme.backgroundLight} !important;
    // color: ${props=>props.theme.table.hover.color} !important;
  }
`

const ViewProtoBtn = styled(Button)`
  color: ${props=>props.theme.primary} !important;
  background: ${props=>props.theme.backgroundDark} !important;
  transition: none;
  &:hover {
    background: ${props=>props.theme.backgroundLight} !important;
  }
`

const StyledSwitch = styled(Switch)`
  color: ${props=>props.theme.switch.color} !important;
  background: ${props=>props.theme.switch.background} !important;
`

export function Options({ dispatch, interactiveChecked, onInteractiveChange, tlsSelected, onTLSSelected, onClickExport }: OptionsProps) {

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
                  className={tlsSelected ? "locked" : "unlocked"}
                  type={tlsSelected ? "lock" : "unlock"}
                  style={{
                    fontSize: 18,
                    // color: tlsSelected ? "#28d440" : "#bdbcbc",
                  }}
              />
            </Tooltip>
            <span
              onClick={() => setTlsModalVisible(true)}
              style={styles.tlsButton}
            >
              <span>TLS</span>
            </span>
          </div>

          <StyledModal
              title={(
                  <StyledModalTitle>
                    <Icon type="lock" />
                    <span style={{marginLeft: 10}}> TLS / SSL Manager </span>
                  </StyledModalTitle>
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
          </StyledModal>
      </div>

      <div style={{ ...styles.inline }}>
        <Dropdown overlay={(
            <Menu>
              <Menu.Item key="0">
                <a onClick={(e) => {
                  e.preventDefault();
                  onClickExport && onClickExport()
                }}>Export response</a>
              </Menu.Item>
            </Menu>
        )} trigger={['click']}>
          <div style={{ marginRight: 5, marginTop: 2, cursor: 'pointer', color: "#b5b5b5"}} >
            <Icon type="caret-down" />
          </div>
        </Dropdown>
        <div style={{paddingRight: 10}}>
          <StyledSwitch
            checkedChildren="Interactive"
            defaultChecked={interactiveChecked}
            unCheckedChildren="Manual &nbsp; &nbsp; &nbsp;"
            onChange={(checked) => {
              dispatch(setInteractive(checked));
              onInteractiveChange && onInteractiveChange(checked);
            }}
          />
        </div>

        <ViewProtoBtn
          icon="file-ppt"
          type="dashed"
          onClick={() => dispatch(setProtoVisibility(true))}
        >
          View Proto
        </ViewProtoBtn>
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
    // background: "#fafafa",
    padding: "1px 10px",
    borderRadius: "3px",
    fontWeight: 500,
    fontSize: "13px",
    border: "1px solid #d8d8d8",
  }
};
