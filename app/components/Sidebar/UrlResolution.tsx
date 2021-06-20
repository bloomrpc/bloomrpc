import * as React from 'react';
import {Col, Input, Row} from "antd";
import {useState} from "react";

interface UrlResolutionProps {
  onImportFromUrl: (url: string) => void
}
export function UrlResolution({ onImportFromUrl }: UrlResolutionProps) {

  const [urlValue, setUrlValue] = useState("");

  return (
    <div>
      <Row>
        <Col>
          <Input.Search
            value={urlValue}
            placeholder={"gRPC server reflection URL"}
            enterButton={"Import"}
            onChange={(e) => {
              setUrlValue(e.target.value);
            }}
            onSearch={async () => {
              onImportFromUrl && onImportFromUrl(urlValue);
              setUrlValue("");
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
