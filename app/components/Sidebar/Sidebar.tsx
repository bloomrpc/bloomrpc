import * as React from 'react';
import { useEffect, useState } from "react";
import { Button, Icon, Modal, Tooltip, Tree } from 'antd';
import { Badge } from '../Badge/Badge';
import { OnProtoUpload, ProtoFile, ProtoService, importProtos } from '../../behaviour';
import { PathResolution } from "./PathResolution";
import { getImportPaths } from "../../storage";
import styled from 'styled-components'


interface SidebarProps {
  protos: ProtoFile[]
  onMethodSelected: (methodName: string, protoService: ProtoService) => void
  onProtoUpload: OnProtoUpload
  onDeleteAll: () => void
  onReload: () => void
}

const StyledTooltipIcon = styled(Icon)`
  font-size: 22px;
  margin-right: 10px;
  margin-top: -2px;
  border-radius: 50%;
  cursor: pointer;
  background: ${props => props.theme.background};
  color: ${props => {
    return props.theme.primary
  }};
`

export const Sidebar = styled(SidebarInternal)``

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 4px;
  padding-left: 10px;
  border-bottom: 1px solid ${props => props.theme.border.bottom};
`

const Title = styled.h3`
  color: ${props=> props.theme.h3.color}
`
const OptionsContainer = styled.div`
  padding: 3px 6px;
  display: flex;
  align-content: space-between;
  border-bottom: 1px solid ${props => props.theme.border.bottom};
`

const OptionsLeft = styled.div`
  width: 50%;
`

const OptionsRight = styled.div`
  width: 50%;
  text-align: right;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`

const GhostButton = styled(Button)`
  height: 22;
  padding-right: 5px;
  padding-left: 5px;
  border: none;
  color: ${props=>props.theme.primary};
`

const IconBtn = styled(Icon)`
  cursor: pointer;
  color: ${props=>props.theme.icon.color};
`


const IconBtnRed = styled(IconBtn)`
  color: ${props=>props.theme.icon.warning};
`

const Protos = styled.div`
  overflow: auto;
  maxHeight: calc(100vh - 85px);
  height: 100%;
`

const StyledTreeNode = styled(Tree.TreeNode)``

function SidebarInternal({ protos, onMethodSelected, onProtoUpload, onDeleteAll, onReload }: SidebarProps) {

  const [importPaths, setImportPaths] = useState<string[]>([""]);
  const [importPathVisible, setImportPathsVisible] = useState(false);

  useEffect(() => {
    setImportPaths(getImportPaths());
  }, []);

  return (
    <>
      <TitleBox>
        <Title>Protos</Title>
        <Tooltip placement="bottom" title="Import protos">
          <StyledTooltipIcon
            onClick={() => {
              importProtos(onProtoUpload, importPaths)
            }}
            type="plus-circle"
          />
        </Tooltip>
      </TitleBox>
      <OptionsContainer>
        <OptionsLeft>
          <Tooltip title="Reload" placement="bottomLeft" align={{offset: [-8, 0]}}>
            <GhostButton type="ghost" onClick={onReload}>
              <IconBtn type="reload"/>
            </GhostButton>
          </Tooltip>

          <Tooltip title="Import Paths" placement="bottomLeft" align={{offset: [-8, 0]}}>
            <GhostButton type="ghost" onClick={() => setImportPathsVisible(true)}>
              <IconBtn type="file-search"/>
            </GhostButton>
          </Tooltip>

          <Modal
              title={(
                  <div>
                    <IconBtn type="file-search" />
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

        </OptionsLeft>
        <OptionsRight>
          <Tooltip title="Delete all" placement="bottomRight" align={{offset: [10, 0]}}>
            <GhostButton type="ghost" onClick={onDeleteAll}>
              <IconBtnRed type="delete" />
            </GhostButton>
          </Tooltip>
        </OptionsRight>
      </OptionsContainer>
      <Protos>
        {protos.length > 0 && <Tree.DirectoryTree
          showIcon
          defaultExpandAll
          onSelect={async (selectedKeys) => {
            const selected = selectedKeys.pop();

            // We handle only methods.
            if (!selected || !selected.includes("method:")) {
              return;
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
              return;
            }

            onMethodSelected(methodName, protodef.services[serviceName]);
          }}
        >
          {protos.map((proto) => (
            <StyledTreeNode
              icon={() => <Badge type="protoFile"> P </Badge>}
              title={proto.fileName}
              key={proto.fileName}
            >
              {Object.keys(proto.services).map((service) => (
                <StyledTreeNode
                  icon={<Badge type="service"> S </Badge>}
                  title={service}
                  key={`${proto.fileName}-${service}`}
                >

                  {proto.services[service].methodsName.map((method: any) => (
                    <StyledTreeNode
                      icon={<Badge type="method"> M </Badge>}
                      title={method}
                      key={`${proto.proto.filePath}||method:${method}||service:${service}`}
                    >
                    </StyledTreeNode>
                  ))}
                </StyledTreeNode>
              ))}
            </StyledTreeNode>
          ))}
        </Tree.DirectoryTree>}
      </Protos>
    </>
  );
}