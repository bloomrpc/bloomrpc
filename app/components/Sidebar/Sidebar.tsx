import * as React from 'react';
import { Button, Icon, Tooltip, Tree } from 'antd';
import { Badge } from '../Badge/Badge';
import { OnProtoUpload, ProtoFile, ProtoService, uploadProtos } from '../../behaviour';

interface SidebarProps {
  protos: ProtoFile[]
  onMethodSelected: (methodName: string, protoService: ProtoService) => void
  onProtoUpload: OnProtoUpload
  onDeleteAll: () => void
  onReload: () => void
}

export function Sidebar({ protos, onMethodSelected, onProtoUpload, onDeleteAll, onReload }: SidebarProps) {

  return (
    <>
      <div style={styles.sidebarTitleContainer}>
        <h3 style={styles.sidebarTitle}>Protos</h3>

        <Tooltip placement="bottom" title="Import protos">
          <Icon
            onClick={() => {
              uploadProtos(onProtoUpload)
            }}
            type="plus-circle"
            theme="filled"
            style={styles.icon}
          />
        </Tooltip>
      </div>
      {/*TODO: extract*/}
      <div style={{ background: "#fafafa", padding: "3px 6px", display: "flex", alignContent: "space-between", borderBottom: "1px solid #e0e0e0"}}>
        <div style={{width: "50%"}}>
          <Tooltip title="Reload" placement="bottomLeft" align={{offset: [-8, 0]}}>
            <Button type="ghost" style={{height: 22, paddingRight: 5, paddingLeft: 5}} onClick={onReload}>
              <Icon type="reload" style={{cursor: "pointer", color: "#1d93e6"}}/>
            </Button>
          </Tooltip>
        </div>
        <div style={{width: "50%", textAlign: "right"}}>
          <Tooltip title="Delete all" placement="bottomRight" align={{offset: [10, 0]}}>
            <Button type="danger" style={{height: 22, paddingRight: 5, paddingLeft: 5}} onClick={onDeleteAll}>
              <Icon type="delete" style={{cursor: "pointer", }} />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div style={{
        overflow: "auto",
        maxHeight: "calc(100vh - 85px)"
      }}>
        {protos.length > 0 && <Tree.DirectoryTree
          showIcon
          defaultExpandAll
          onSelect={async (selectedKeys) => {
            const selected = selectedKeys.pop();

            // We handle only methods.
            if (!selected || !selected.includes("method:")) {
              return;
            }

            const fragments = selected.split('/');
            const methodName = fragments[1].replace('method:', '');
            const serviceName = fragments[2].replace('service:', '');

            const protodef = protos.find((protoFile) => {
              const match = Object.keys(protoFile.services).find((service) => service === serviceName);
              return Boolean(match);
            });

            if (!protodef) {
              return;
            }

            onMethodSelected(methodName, protodef.services[serviceName]);
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
                      key={`${proto.fileName}/method:${method}/service:${service}`}
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
};