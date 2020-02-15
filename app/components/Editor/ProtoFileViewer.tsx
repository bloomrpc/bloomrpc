import * as React from 'react';
import AceEditor from 'react-ace';
import { Drawer } from 'antd';
import { ProtoInfo } from '../../behaviour';
import styled from 'styled-components'

interface ProtoFileViewerProps {
  protoInfo: ProtoInfo
  visible: boolean
  onClose: () => void
}

const StyledAceEditor = styled(AceEditor)`
  background: ${props => props.theme.backgroundLight} !important;
  .ace-monokai .ace_gutter {
    background: ${props => props.theme.backgroundLight} !important;
  }
  margin-top: 10px;
`

const StyledDrawer = styled(Drawer)`
  .ant-drawer-header {
    background: ${props => props.theme.background};
  }
  .ant-drawer-title {
    color: ${props => props.theme.primary};
  }
  .ant-drawer-body {
    background: ${props => props.theme.background};
  }
`

export const ProtoFileViewer = styled(ProtoFileViewerInternal)``


function ProtoFileViewerInternal({ protoInfo, visible, onClose }: ProtoFileViewerProps) {

  return (
    <StyledDrawer
      title={protoInfo.service.proto.fileName.split('/').pop()}
      placement={"right"}
      width={"50%"}
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <StyledAceEditor
        width={"100%"}
        height={"calc(100vh - 115px)"}
        mode="protobuf"
        name="output"
        theme={"tomorrow"}
        fontSize={13}
        showPrintMargin={false}
        wrapEnabled

        showGutter={false}
        readOnly
        highlightActiveLine={false}
        value={protoInfo.service.proto.protoText}
        onLoad={(editor: any) => {
          editor.renderer.$cursorLayer.element.style.display = "none";
          editor.gotoLine(0, 0, true);
        }}
        setOptions={{
          useWorker: true,
          displayIndentGuides: false,
          showLineNumbers: false,
          highlightGutterLine: false,
          fixedWidthGutter: true,
          tabSize: 1,
        }}
      />
    </StyledDrawer>
  );
}
