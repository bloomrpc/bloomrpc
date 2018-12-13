import * as React from 'react';
import { Icon } from 'antd';
import AceEditor from 'react-ace';

interface MetadataProps {
  onClickMetadata: () => void,
  onMetadataChange: (value: string) => void,
  value: string,
  visibile: boolean,
}

export function Metadata({ onClickMetadata, onMetadataChange, value, visibile }: MetadataProps) {
  return (
    <div style={{
      ...styles.optionContainer,
      ...(visibile ? styles.openedOption : {}),
      ...(visibile ? { position: "relative" } : {})
    }}>
      <div style={styles.optionLabel}>
        <a
          href={"#"}
          style={styles.optionLink}
          onClick={onClickMetadata}
        > {visibile ? <Icon type="down"/> : <Icon type="up"/>} METADATA </a>
      </div>

      <div style={{ paddingLeft: "10px" }}>
        <AceEditor
          width={"100%"}
          style={{ background: "#f5f5f5" }}
          height={visibile ? "110px" : "0px"}
          mode="json"
          focus={visibile}
          theme="textmate"
          fontSize={13}
          name="metadata"
          onChange={(value) => {
            onMetadataChange(value);
          }}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
          value={value}
          setOptions={{
            useWorker: true
          }}
        />
      </div>
    </div>
  )
}

const styles = {
  optionLabel: {
    background: "#001529",
    padding: "7px 10px",
    marginBottom: "10px"
  },
  optionContainer: {
    fontWeight: 900,
    fontSize: "13px",
    borderRight: "1px solid rgba(0, 21, 41, 0.18)",
    borderLeft: "1px solid rgba(0, 21, 41, 0.18)",
    background: "#f5f5f5"
  },
  optionLink: {
    color: "#fff",
    textDecoration: "none",
  },
  openedOption: {
    marginTop: "-125px",
    width: "100%",
    height: "150px",
    maxHeight: "150px",
    zIndex: 10
  },
};