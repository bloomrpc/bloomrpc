import * as React from 'react';


interface BadgeProps {
  type: "protoFile" | "service" | "method"
  children: Node | string | Element
}

export function Badge({ type, children }: BadgeProps) {

  return (
    <div style={{
      ...styles.badge,
      ...styles[type]
    }}>{children}</div>
  )
}

const styles: {[key: string]: any} = {
  badge: {
    lineHeight: "15px",
    fontSize: "11px",
    marginTop: "5px",
    marginRight: "7px",
    paddingBottom: "1px",
    borderRadius: '50%'
  },
  protoFile: {
    backgroundColor: "#15abff",
    color: "#fff"
  },
  service: {
    backgroundColor: "#ffa733",
    color: "#fff",
  },
  method: {
    backgroundColor: "#2cc316",
    color: "#fff",
  },
};