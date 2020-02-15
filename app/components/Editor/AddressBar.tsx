import * as React from 'react';
import { Icon, Input, Modal, Select } from "antd";
import { RequestType } from "./RequestType";
import { ChangeEvent, useEffect, useState } from "react";
import { ProtoInfo } from "../../behaviour";
import { EditorEnvironment } from "./Editor";
import styled from 'styled-components';

export interface AddressBarProps {
  loading: boolean
  url: string
  environments?: EditorEnvironment[]
  protoInfo?: ProtoInfo
  onChangeUrl?: (e: ChangeEvent<HTMLInputElement>) => void
  defaultEnvironment?: string
  onChangeEnvironment?: (environment?: EditorEnvironment) => void
  onEnvironmentSave?: (name: string) => void
  onEnvironmentDelete?: (name: string) => void
}


const StyledSelect = styled(Select)`
  width: 20%;
  color: ${props=>props.theme.primary};
  background: ${props=>props.theme.background};
  .ant-select-selection .ant-select-selection--single {
    color: ${props=>props.theme.primary};
    background: ${props=>props.theme.background};
  }
  .ant-select-selection__placeholder, .ant-select-search__field__placeholder {
    color: ${props=>props.theme.primary};
  }
`

const StyledInput = styled(Input)`
  width: 80%;
  font-weight: 600;
  color: ${props=>props.theme.primary};
  background: ${props=>props.theme.background};
  .ant-input {
    color: ${props=> {
      return props.theme.input.color
    }};
    background: ${props=>props.theme.input.background};
    transition: none;
  }
  .ant-input-group-addon {
    padding: 0px;
  }
`

const InputAddon = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
`

const InputIcon = styled(Icon)`
  padding-left: 5px;
  padding-right: 5px;
`

const StyledInputGroup = styled(Input.Group)``

export const AddressBar = styled(AddressBarInternal)``

// FIXME on save environment styled theme is not passed and app fails with error.
function AddressBarInternal({loading, url, onChangeUrl, protoInfo, defaultEnvironment, environments, onEnvironmentSave, onChangeEnvironment, onEnvironmentDelete}: AddressBarProps) {
  const [currentEnvironmentName, setCurrentEnvironmentName] = useState<string>(defaultEnvironment || "");
  const [newEnvironmentName, setNewEnvironmentName] = useState<string>("");

  const [confirmedSave, setConfirmedSave] = useState(false);
  const [confirmedDelete, setConfirmedDelete] = useState(false);

  useEffect(() => {
    if (confirmedSave) {
      if (newEnvironmentName) {
        setCurrentEnvironmentName(newEnvironmentName);
        onEnvironmentSave && onEnvironmentSave(newEnvironmentName);
      } else {
        setCurrentEnvironmentName(currentEnvironmentName);
        onEnvironmentSave && onEnvironmentSave(currentEnvironmentName);
      }

      setConfirmedSave(false);
      setNewEnvironmentName("");
    }
  }, [confirmedSave]);

  useEffect(() => {
    if (confirmedDelete) {
      onEnvironmentDelete && onEnvironmentDelete(currentEnvironmentName)

      setConfirmedDelete(false);
      setCurrentEnvironmentName("");
    }
  }, [confirmedDelete]);

  return (
      <>
        <StyledInputGroup compact>
          <StyledSelect
              defaultValue={currentEnvironmentName}
              value={currentEnvironmentName || undefined}
              placeholder={"Env"}
              dropdownStyle={{ minWidth: 200 }}
              onSelect={(value: string) => {
                // Save brand new environment
                if (value === "new") {
                  Modal.confirm({
                    title: 'Environment Name',
                    className: "env-modal",
                    icon: (
                        <Icon type="project" />
                    ),
                    onOk: () => {
                      setConfirmedSave(true);
                    },
                    content: (
                        <StyledInput autoFocus={true} required placeholder={"Staging"} onChange={(e) => {
                          setNewEnvironmentName(e.target.value);
                        }} />
                    ),

                    okText: 'Confirm',
                    cancelText: 'Cancel',
                  });
                  return;
                }

                if (value === "update") {
                  Modal.confirm({
                    title: `Update ${currentEnvironmentName}?`,
                    className: "env-modal",
                    icon: (
                        <Icon type="project" />
                    ),
                    onOk: () => {
                      setConfirmedSave(true);
                    },
                    content: `Do you want to update the environment?`,
                    okText: 'Confirm',
                    cancelText: 'Cancel',
                  });
                  return;
                }

                if (value === "delete") {
                  Modal.confirm({
                    title: `Deleting ${currentEnvironmentName}?`,
                    className: "env-modal",
                    icon: (
                        <Icon type="delete" />
                    ),
                    onOk: () => {
                      setConfirmedDelete(true);
                    },
                    content: `Are you sure do you want to delete the environment?`,
                    okText: 'Confirm',
                    cancelText: 'Cancel',
                  });
                  return;
                }

                setCurrentEnvironmentName(value);

                const selectedEnv = (environments || []).find(env => env.name === value);
                onChangeEnvironment && onChangeEnvironment(selectedEnv);
              }}
          >
            <Select.Option value="">
              None
            </Select.Option>

            {environments && environments.map(environment => (
              <Select.Option key={environment.name} value={environment.name}>{environment.name}</Select.Option>
            ))}

            {currentEnvironmentName &&
              <Select.Option value="update">
                  <Icon type="edit" /> Update Environment
              </Select.Option>
            }
            {currentEnvironmentName &&
            <Select.Option value="delete">
                <Icon type="delete" /> Delete Environment
            </Select.Option>
            }
            <Select.Option value="new">
              <Icon type="plus-circle" /> Save New Environment
            </Select.Option>
          </StyledSelect>
          <StyledInput
              addonAfter={(
                  <InputAddon>
                    {loading ? <InputIcon type="loading"/> : <InputIcon type="database"/>}
                    <RequestType protoInfo={protoInfo} />
                  </InputAddon>
              )}
              value={url}
              onChange={onChangeUrl}/>
        </StyledInputGroup>
      </>
  )
}
