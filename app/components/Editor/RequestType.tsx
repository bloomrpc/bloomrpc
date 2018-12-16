import * as React from 'react';
import { ProtoInfo } from '../../behaviour';

interface RequestTypeProps {
  protoInfo?: ProtoInfo
}

export function RequestType({ protoInfo }: RequestTypeProps) {
  let reqType = "Unary Call";

  if (!protoInfo) {
    reqType = "Server Address";
  } else if (protoInfo.isServerStreaming() && protoInfo.isClientStreaming()) {
    reqType = "Bi-Directional";
  } else if (protoInfo.isServerStreaming()) {
    reqType = "Server Streaming";
  } else if (protoInfo.isClientStreaming()) {
    reqType = "Client Streaming";
  }

  return (
    <div style={{...styles.reqType, ...styles.badge}}>
      {reqType}
    </div>
  );
}

const styles = {
  reqType: {
    textOverflow: "ellipsis",
    maxWidth: "125px",
    overflow: "hidden",
    whiteSpace: "nowrap" as "nowrap",
    width: "100%",
  },
  badge: {
    backgroundColor: "#001529",
    padding: "7px 8px",
    fontSize: "11px",
    color: "#fff",
    fontWeight: 500,
  }
};