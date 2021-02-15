import * as React from 'react';
import { useEffect, useState } from "react";
import {Menu, Button, Icon, Dropdown, Modal, Tooltip, Tree, Input} from 'antd';
import { Badge } from '../Badge/Badge';
import {OnProtoUpload, ProtoFile, ProtoService, importProtos, importProtosFromServerReflection} from '../../behaviour';
import { PathResolution } from "./PathResolution";
import { getImportPaths } from "../../storage";
import {UrlResolution} from "./UrlResolution";

interface SidebarProps {
  protos: ProtoFile[]
  onMethodSelected: (methodName: string, protoService: ProtoService) => void
  onProtoUpload: OnProtoUpload
  onDeleteAll: () => void
  onReload: () => void
  onMethodDoubleClick: (methodName: string, protoService: ProtoService) => void
}

export function Sidebar({ protos, onMethodSelected, onProtoUpload, onDeleteAll, onReload, onMethodDoubleClick }: SidebarProps) {

  const [importPaths, setImportPaths] = useState<string[]>([""]);
  const [importPathVisible, setImportPathsVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterMatch, setFilterMatch] = useState<string|null>(null);
  const [importReflectionVisible, setImportReflectionVisible] = useState(false);

  useEffect(() => {
    setImportPaths(getImportPaths());
  }, []);

  /**
   * An internal function to retrieve protobuff from the selected key
   * @param selected The selected key from the directory tree
   */
  function processSelectedKey(selected: string | undefined) {
    // We handle only methods.
    if (!selected || !selected.includes("method:")) {
      return undefined;
    }

    const fragments = selected.split('||');
    const fileName = fragments[0];
    const methodName = fragments[1].replace('method:', '');
    const serviceName = fragments[2].replace('service:', '');

    const protodef = protos.find((protoFile) => {
      const match = Object.keys(protoFile.services).find(
        (service) => service === serviceName &&
          fileName === protoFile.services[serviceName].proto.filePath
      );
      return Boolean(match);
    });

    if (!protodef) {
      return undefined;
    }
    return {methodName, protodef, serviceName}
  }

  function toggleFilter() {
    setFilterVisible(!filterVisible);
    if (filterVisible) {
      setFilterMatch(null);
    }
  }

  return (
    <>
      <div style={styles.sidebarTitleContainer}>
        <div>
          <h3 style={styles.sidebarTitle}>Protos</h3>
        </div>

        <div
          style={{display: "flex", flexDirection: "column", justifyContent: "center"}}
        >
          <Dropdown.Button
            type="primary"
            onClick={() => {
              importProtos(onProtoUpload, importPaths)
            }}
            overlay={
              <Menu>
                <Menu.Item key="1" onClick={() => {
                  importProtos(onProtoUpload, importPaths)
                }}>
                  <Icon type="file" />
                  Import from file
                </Menu.Item>
                <Menu.Item key="2" onClick={() => {
                  setImportReflectionVisible(true)
                }}>
                  <Icon type="eye" />
                  Import from server reflection
                </Menu.Item>
              </Menu>
            }
          >
            <Icon type="plus" />
          </Dropdown.Button>
        </div>
      </div>

      <div style={styles.optionsContainer}>
        <div style={{width: "50%"}}>
          <Tooltip title="Reload" placement="bottomLeft" align={{offset: [-8, 0]}}>
            <Button
              type="ghost"
              style={{height: 24, paddingRight: 5, paddingLeft: 5}}
              onClick={onReload}
            >
              <Icon type="reload" style={{cursor: "pointer", color: "#1d93e6"}}/>
            </Button>
          </Tooltip>

          <Tooltip title="Import Paths" placement="bottomLeft" align={{offset: [-8, 0]}}>
            <Button
                type="ghost"
                style={{height: 24, paddingRight: 5, paddingLeft: 5, marginLeft: 5}}
                onClick={() => setImportPathsVisible(true)}
            >
              <Icon type="file-search" style={{cursor: "pointer", color: "#1d93e6"}}/>
            </Button>
          </Tooltip>

          <Tooltip title="Filter method names" placement="bottomLeft" align={{offset: [-8, 0]}}>
            <Button
              type="ghost"
              style={{height: 24, paddingRight: 5, paddingLeft: 5, marginLeft: 5}}
              onClick={() => toggleFilter()}
            >
              <Icon type="filter" style={{cursor: "pointer", color: "#1d93e6"}}/>
            </Button>
          </Tooltip>

          <Modal
              title={(
                  <div>
                    <Icon type="file-search" />
                    <span style={{marginLeft: 10}}> Import Paths </span>
                  </div>
              )}
              visible={importPathVisible}
              onCancel={() => setImportPathsVisible(false)}
              onOk={() => setImportPathsVisible(false)}
              bodyStyle={{padding: 0}}
              width={750}
              footer={[
                <Button key="back" onClick={() => setImportPathsVisible(false)}>Close</Button>
              ]}
          >
            <PathResolution
                onImportsChange={setImportPaths}
                importPaths={importPaths}
            />
          </Modal>

          <Modal
            title={(
              <div>
                <Icon type="eye" />
                <span style={{marginLeft: 10}}> Import from server reflection </span>
              </div>
            )}
            visible={importReflectionVisible}
            onCancel={() => setImportReflectionVisible(false)}
            onOk={() => setImportReflectionVisible(false)}
            width={750}
            footer={[
              <Button key="back" onClick={() => setImportReflectionVisible(false)}>Close</Button>
            ]}
          >
            <UrlResolution
              onImportFromUrl={(url) => {
                importProtosFromServerReflection(onProtoUpload, url)
                setImportReflectionVisible(false)
              }}
            />
          </Modal>
        </div>
        <div style={{width: "50%", textAlign: "right"}}>
          <Tooltip title="Delete all" placement="bottomRight" align={{offset: [10, 0]}}>
            <Button type="ghost" style={{height: 24, paddingRight: 5, paddingLeft: 5}} onClick={onDeleteAll}>
              <Icon type="delete" style={{cursor: "pointer", color: "red" }} />
            </Button>
          </Tooltip>
        </div>
      </div>

      <div style={{
        overflow: "auto",
        maxHeight: "calc(100vh - 85px)",
        height: "100%"
      }}>

        <Input
          placeholder={"Filter methods"}
          hidden={!filterVisible}
          onChange={(v) => setFilterMatch(v.target.value || null)}
        />

        {protos.length > 0 && <Tree.DirectoryTree
          showIcon
          defaultExpandAll
          onSelect={async (selectedKeys) => {
            const selected = selectedKeys.pop();
            const protoDefinitions = processSelectedKey(selected);

            if (!protoDefinitions){
              return;
            }

            onMethodSelected(protoDefinitions.methodName, protoDefinitions.protodef.services[protoDefinitions.serviceName]);
          }}
          onDoubleClick={async (event, treeNode)=>{
            const selected = treeNode.props.eventKey;
            const protoDefinitions = processSelectedKey(selected);

            if (!protoDefinitions){
              return;
            }

            // if the original one table doesn't exist, then ignore it
            onMethodDoubleClick(protoDefinitions.methodName, protoDefinitions.protodef.services[protoDefinitions.serviceName])
          }}
        >
          {protos.map((proto) => (
            <Tree.TreeNode
              icon={() => <Badge type="protoFile"> P </Badge>}
              title={proto.fileName}
              key={proto.fileName}
            >
              {Object.keys(proto.services).map((service) => (
                <Tree.TreeNode
                  icon={<Badge type="service"> S </Badge>}
                  title={service}
                  key={`${proto.fileName}-${service}`}
                >

                  {proto.services[service].methodsName
                    .filter((name) => {
                      if (filterMatch === null) return true;
                      return name.toLowerCase().includes(filterMatch.toLowerCase());
                    })
                    .map((method: any) => (
                      <Tree.TreeNode
                        icon={<Badge type="method"> M </Badge>}
                        title={method}
                        key={`${proto.proto.filePath}||method:${method}||service:${service}`}
                      >
                    </Tree.TreeNode>
                  ))}
                </Tree.TreeNode>
              ))}
            </Tree.TreeNode>
          ))}
        </Tree.DirectoryTree>}
      </div>
    </>
  );
}

const styles = {
  sidebarTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 6,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 10,
    borderBottom: "1px solid #eee",
    background: "#001529"
  },
  sidebarTitle: {
    color: "#fff",
    marginTop: "0.5em"
  },
  icon: {
    fontSize: 23,
    marginBottom: 7,
    marginRight: 12,
    marginTop: -2,
    color: "#28d440",
    border: "2px solid #f3f6f9",
    borderRadius: "50%",
    cursor: "pointer"
  },
  optionsContainer: {
    background: "#fafafa",
    padding: "3px 6px",
    display: "flex",
    alignContent: "space-between",
    borderBottom: "1px solid #e0e0e0",
  }
};
