import * as React from 'react';
import { Icon, Input, Table, Tooltip } from "antd";
import { useState } from "react";
import { importResolvePath } from "../../behaviour";
import { storeImportPaths } from "../../storage";

interface PathResolutionProps {
  onImportsChange?: (paths: string[]) => void
  importPaths: string[]
}

interface TablePath {
  value: string
}

export function PathResolution({ importPaths, onImportsChange }: PathResolutionProps) {
  const [pathValue, setPathStateValue] = useState("");
  const tablePaths = importPaths.map(importPath => ({
    value: importPath,
  }));

  console.log(tablePaths);

  return (
    <div>
      <Table
          dataSource={tablePaths}
          pagination={false}
          rowKey={(path) => path.value || "addPath"}
      >
        <Table.Column
          title="Path"
          width={"90%"}
          key={"pathColumn"}
          render={(text, record: TablePath) => {
            return (
                <>
                {!record.value ? (
                    <Input.Search
                      value={pathValue}
                      placeholder={"Absolute path"}
                      enterButton={"..."}
                      autoFocus={pathValue === ""}
                      onChange={(e) => {
                        setPathStateValue(e.target.value);
                      }}
                      onSearch={async () => {
                        try {
                          const path = await importResolvePath();
                          setPathStateValue(path);
                        } catch (e) {
                          // No file selected.§
                        }
                      }}
                    />
                ) : (
                    <span>{record.value}</span>
                )}
                </>
            );
          }}
        />

        <Table.Column
            title=""
            key={"actionColumn"}
            render={(text, path: TablePath) => (
                <>
                  {path.value ? (
                      <Tooltip placement="top" title="Remove">
                        <Icon
                            type="close"
                            style={{fontSize: 16, cursor: "pointer", marginTop: 5}}
                            onClick={() => removePath(path.value, importPaths, onImportsChange)}
                        />
                      </Tooltip>
                  ) : (
                      <Tooltip placement="top" title="Save">
                        <Icon
                            style={{color: '#28d440', fontSize: 18, cursor: "pointer", marginTop: 5}}
                            type="plus"
                            onClick={() => {
                              const pathAdded = addImportPath(pathValue, importPaths, onImportsChange);
                              if (pathAdded) {
                                setPathStateValue("");
                              }
                            }}
                        />
                      </Tooltip>
                  )}
                </>
            )}
        />
      </Table>
    </div>
  );
}

function addImportPath(
  path: string,
  importPaths: string[],
  setImportPath?: (path: string[]) => void,
): boolean {
  if (path !== "" && importPaths.indexOf(path) === -1) {
    const paths = [...importPaths, path];
    setImportPath && setImportPath(paths);
    storeImportPaths(paths);
    return true;
  }

  return false;
}

function removePath(
  path: string,
  importPaths: string[],
  setImportPath?: (path: string[]) => void,
) {
  const newPaths = importPaths.filter(currentPath => currentPath !== path);
  setImportPath && setImportPath(newPaths);
  storeImportPaths(newPaths);
}