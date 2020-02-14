import * as React from 'react';
import { Icon } from 'antd';
import AceEditor from 'react-ace';
import Resizable from 're-resizable';
import { storeMetadata } from "../../storage";
import { useState } from "react";

interface MetadataProps {
  onClickMetadata: () => void,
  onMetadataChange: (value: string) => void,
  value: string,
}

export function Metadata({ onClickMetadata, onMetadataChange, value }: MetadataProps) {
  const [height, setHeight] = useState(38);
  const visibile = height > 38;

  return (
    <Resizable
        size={{width: "100%", height: height}}
        maxHeight={500}
        minHeight={38}
        enable={{top:true, right:false, bottom:true, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}
        onResizeStop={(e, direction, ref, d) => {
          setHeight(height + d.height);
        }}
         style={{
           ...styles.optionContainer,
           ...{bottom: `-38px`, height: `${height}px`},
         }}
    >
      <div className="metadata-container">
        <div style={styles.optionLabel}>
          <a
            href={"#"}
            style={styles.optionLink}
            onClick={() => {
              if (visibile) {
                setHeight(38)
              } else {
                setHeight(150);
              }
              onClickMetadata()
            }}
          > {visibile ? <Icon type="down"/> : <Icon type="up"/>} METADATA </a>
        </div>

        <div>
          <AceEditor
            width={"100%"}
            height={`${height + 20}px`}
            mode="json"
            focus={visibile}
            theme="monokai"
            fontSize={13}
            name="metadata"
            onChange={(value) => {
              storeMetadata(value);
              onMetadataChange(value);
            }}
            showPrintMargin={false}
            showGutter
            highlightActiveLine={false}
            value={value}
            setOptions={{
              useWorker: true
            }}
          />
        </div>
      </div>
    </Resizable>
  )
}

const styles = {
  optionLabel: {
    padding: "7px 10px",
    marginBottom: "5px"
  },
  optionContainer: {
    position: "absolute" as "absolute",
    fontWeight: 900,
    fontSize: "13px",
    borderLeft: "1px solid rgba(0, 21, 41, 0.18)",
    zIndex: 10,
  },
  optionLink: {
    textDecoration: "none",
  },
};