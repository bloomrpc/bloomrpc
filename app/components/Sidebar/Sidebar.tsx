import * as React from 'react';
import { useEffect, useState } from "react";
import { Button, Icon, Modal, Tooltip, Tree } from 'antd';
import { Badge } from '../Badge/Badge';
import { OnProtoUpload, ProtoFile, ProtoService, importProtos } from '../../behaviour';
import { PathResolution } from "./PathResolution";
import { getImportPaths } from "../../storage";

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

  useEffect(() => {
    setImportPaths(getImportPaths());
  }, []);

  /**
   * An internal function to retrieve protobuff from the selected key
   * @param selected The selected key from the directory tree
   */
  function processSelectedKey(selected: string | undefined){
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


  return (
    <>
      <div style={styles.sidebarTitleContainer}>
        <h3 style={styles.sidebarTitle}>Protos</h3>

        <Tooltip placement="bottom" title="Import protos">
          <Icon
            onClick={() => {
              importProtos(onProtoUpload, importPaths)
            }}
            type="plus-circle"
            theme="filled"
            style={styles.icon}
          />
        </Tooltip>
      </div>
      <div style={styles.optionsContainer}>
        <div style={{width: "50%"}}>
          <Tooltip title="Reload" placement="bottomLeft" align={{offset: [-8, 0]}}>
            <Button type="ghost" style={{height: 22, paddingRight: 5, paddingLeft: 5}} onClick={onReload}>
              <Icon type="reload" style={{cursor: "pointer", color: "#1d93e6"}}/>
            </Button>
          </Tooltip>

          <Tooltip title="Import Paths" placement="bottomLeft" align={{offset: [-8, 0]}}>
            <Button
                type="ghost"
                style={{height: 22, paddingRight: 5, paddingLeft: 5, marginLeft: 5}}
                onClick={() => setImportPathsVisible(true)}
            >
              <Icon type="file-search" style={{cursor: "pointer", color: "#1d93e6"}}/>
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

        </div>
        <div style={{width: "50%", textAlign: "right"}}>
          <Tooltip title="Delete all" placement="bottomRight" align={{offset: [10, 0]}}>
            <Button type="ghost" style={{height: 22, paddingRight: 5, paddingLeft: 5}} onClick={onDeleteAll}>
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
        {protos.length > 0 && <Tree.DirectoryTree
          showIcon
          defaultExpandAll
          onSelect={async (selectedKeys) => {
            const selected = selectedKeys.pop();
            const profoDefinitions = processSelectedKey(selected);

            if (!profoDefinitions){
              return;
            }
            
            onMethodSelected(profoDefinitions.methodName, profoDefinitions.protodef.services[profoDefinitions.serviceName]);
          }}
          onDoubleClick={async (event, treeNode)=>{
            const selected = treeNode.props.eventKey;
            const profoDefinitions = processSelectedKey(selected);

            if (!profoDefinitions){
              return;
            }

            // if the original one table doesn't exist, then ignore it
            
       
            onMethodDoubleClick(profoDefinitions.methodName, profoDefinitions.protodef.services[profoDefinitions.serviceName])
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

                  {proto.services[service].methodsName.map((method: any) => (
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
    paddingTop: 14,
    paddingBottom: 4,
    paddingLeft: 20,
    borderBottom: "1px solid #eee",
    background: "#001529"
  },
  sidebarTitle: {
    color: "#fff",
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
