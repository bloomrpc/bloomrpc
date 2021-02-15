import * as React from 'react';
import {Col, Input, Row} from "antd";

interface UrlResolutionProps {
  onImportFromUrl: (url: string) => void
}
export function UrlResolution({ onImportFromUrl }: UrlResolutionProps) {

  return (
    <div>
      <Row>
        <Col>
          <Input.Search
            placeholder={"gRPC server reflection URL"}
            enterButton={"Import"}
            onSearch={url => {
              onImportFromUrl && onImportFromUrl(url)
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
