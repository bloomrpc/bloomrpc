import * as React from 'react';
import {Icon, Input, Table, Tooltip} from "antd";
import {useState} from "react";
import {storeProtoUrls} from "../../storage";

interface UrlResolutionProps {
    onProtoUrlsChange?: (urls: string[]) => void
    protoUrls: string[]
}

interface TableUrl {
    value: string
}

export function UrlResolution({protoUrls, onProtoUrlsChange}: UrlResolutionProps) {
    const [urlValue, setUrlStateValue] = useState("");
    const tableUrls = protoUrls.map(protoUrl => ({
        value: protoUrl,
    }));

    return (
        <div>
            <Table
                dataSource={tableUrls}
                pagination={false}
                rowKey={(url) => url.value || "addPath"}
            >
                <Table.Column
                    title="URLs"
                    width={"90%"}
                    key={"urlColumn"}
                    render={(text, record: TableUrl) => {
                        return (
                            <>
                                {!record.value ? (
                                    <Input
                                        value={urlValue}
                                        placeholder={"Absolute protofile url"}
                                        autoFocus={urlValue === ""}
                                        onChange={(e) => {
                                            setUrlStateValue(e.target.value);
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
                    render={(text, url: TableUrl) => (
                        <>
                            {url.value ? (
                                <Tooltip placement="top" title="Remove">
                                    <Icon
                                        type="close"
                                        style={{fontSize: 16, cursor: "pointer", marginTop: 5}}
                                        onClick={() => removeProtoUrl(url.value, protoUrls, onProtoUrlsChange)}
                                    />
                                </Tooltip>
                            ) : (
                                <Tooltip placement="top" title="Save">
                                    <Icon
                                        style={{color: '#28d440', fontSize: 18, cursor: "pointer", marginTop: 5}}
                                        type="plus"
                                        onClick={() => {
                                            const urlAdded = addProtoUrl(urlValue, protoUrls, onProtoUrlsChange);
                                            if (urlAdded) {
                                                setUrlStateValue("");
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

function addProtoUrl(
    url: string,
    protoUrls: string[],
    setProtoUrls?: (url: string[]) => void,
): boolean {
    if (url !== "" && protoUrls.indexOf(url) === -1) {
        const urls = [...protoUrls, url];
        setProtoUrls && setProtoUrls(urls);
        storeProtoUrls(urls);
        return true;
    }

    return false;
}

function removeProtoUrl(
    url: string,
    protoUrls: string[],
    setProtoUrls?: (urls: string[]) => void,
) {
    const newUrls = protoUrls.filter(currentUrl => currentUrl !== url);
    setProtoUrls && setProtoUrls(newUrls);
    storeProtoUrls(newUrls);
}