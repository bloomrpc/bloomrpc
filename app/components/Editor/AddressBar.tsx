import * as React from 'react';
import { Icon, Input, Modal, Select } from "antd";
import { RequestType } from "./RequestType";
import { ChangeEvent, useEffect, useState } from "react";
import { ProtoInfo } from "../../behaviour";
import { EditorEnvironment } from "./Editor";

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

export function AddressBar({loading, url, onChangeUrl, protoInfo, defaultEnvironment, environments, onEnvironmentSave, onChangeEnvironment, onEnvironmentDelete}: AddressBarProps) {
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
        <Input.Group compact>
          <Select
              defaultValue={currentEnvironmentName}
              value={currentEnvironmentName || undefined}
              placeholder={"Env"}
              style={{width: "20%"}}
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
                        <Input autoFocus={true} required placeholder={"Staging"} onChange={(e) => {
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
          </Select>
          <Input
              style={{width: "80%"}}
              className="server-url"
              addonAfter={(
                  <div style={{display: "flex", alignItems: "center", width: "125px"}}>
                    {loading ? <Icon type="loading"/> : <Icon type="database"/>}
                    <RequestType protoInfo={protoInfo} />
                  </div>
              )}
              value={url}
              onChange={onChangeUrl}/>
        </Input.Group>
      </>
  )
}
