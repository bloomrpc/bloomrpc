import * as React from 'react';
import AceEditor from 'react-ace';
import { Drawer } from 'antd';
import { ProtoInfo } from '../../behaviour';


interface ProtoFileViewerProps {
  protoInfo: ProtoInfo
  visible: boolean
  onClose: () => void
}

export function ProtoFileViewer({ protoInfo, visible, onClose }: ProtoFileViewerProps) {

  return (
    <Drawer
      title={protoInfo.service.proto.fileName.split('/').pop()}
      placement={"right"}
      width={"50%"}
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <AceEditor
        style={{ marginTop: "10px"}}
        width={"100%"}
        height={"calc(100vh - 115px)"}
        mode="protobuf"
        theme="monokai"
        name="output"
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
    </Drawer>
  );
}
