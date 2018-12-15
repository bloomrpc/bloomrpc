import * as React from 'react';
import { ChangeEvent, useEffect, useReducer } from 'react';
import { Button, Drawer, Icon, Input } from 'antd';
import {
  actions,
  setData,
  setMetadata,
  setMetadataVisibilty,
  setProtoVisibility,
  setUrl,
} from './actions';
import AceEditor from 'react-ace';
import 'brace/theme/textmate';
import 'brace/mode/json';
import 'brace/mode/protobuf';
import { Response } from './Response';
import { GRPCRequest, ProtoService } from '../../behaviour';
import { getUrl, storeUrl } from '../../storage';
import { Metadata } from './Metadata';
import { PlayControl } from './PlayControl';

export interface EditorAction {
  [key: string]: any
  type: string
}

export interface EditorState {
  url: string
  data: string
  loading: boolean
  output: string
  call?: GRPCRequest
  metadataOpened: boolean
  protoViewVisibile: boolean
  metadata: string
  streamData: string[]
}

export interface InitialRequest {
  url: string
  inputs: string
  metadata: string
}

export interface EditorProps {
  methodName: string
  service?: ProtoService
  onRequestChange?: (url: string, inputs: string, metadata: string) => void
  initialRequest?: InitialRequest
}

const INITIAL_STATE: EditorState = {
  url: "0.0.0.0:3009",
  data: "",
  streamData: [],
  loading: false,
  output: "",
  call: undefined,
  metadataOpened: false,
  protoViewVisibile: false,
  metadata: "",
};

/**
 * Reducer
 * @param state
 * @param action
 */
const reducer = (state: EditorState, action: EditorAction) => {
  switch (action.type) {

    case actions.SET_DATA:
      return { ...state, data: action.data };

    case actions.SET_URL:
      return { ...state, url: action.value };

    case actions.SET_IS_LOADING:
      return { ...state, loading: action.isLoading };

    case actions.SET_OUTPUT:
      return { ...state, output: action.output };

    case actions.SET_CALL:
      return { ...state, call: action.call };

    case actions.SET_METADATA_VISIBILITY:
      return { ...state, metadataOpened: action.visible };

    case actions.SET_METADATA:
      return { ...state, metadata: action.metadata };

    case actions.SET_PROTO_VISIBILITY:
      return { ...state, protoViewVisibile: action.visible };
    default:
      return state
  }
};

const Editor: React.FC<EditorProps> = ({ service, methodName, initialRequest, onRequestChange }: EditorProps) => {
  INITIAL_STATE.url = (initialRequest && initialRequest.url) || getUrl() || INITIAL_STATE.url;
  const [state, dispatch] = useReducer<EditorState, EditorAction>(reducer, INITIAL_STATE);

  useEffect(() => {
    if (service && methodName && !initialRequest) {
      try {
        const { plain } = service.methodsMocks[methodName]();
        dispatch(setData(JSON.stringify(plain, null, 2)));
      } catch(e) {
        console.error(e);
        dispatch(setData(JSON.stringify({
          "error": "Error parsing the request message, please report the problem sharing the offending protofile"
        }, null, 2)));
      }
    }

    if (initialRequest) {
      dispatch(setData(initialRequest.inputs));
      dispatch(setMetadata(initialRequest.metadata));
    }
  }, []);

  return (
    <div style={styles.tabContainer}>
      <div style={styles.inputContainer}>
        <div style={{ width: "50%" }}>
          <Input
            className="server-url"
            addonAfter={state.loading ? <Icon type="loading"/> : <Icon type="database"/>}
            defaultValue={state.url}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch(setUrl(e.target.value));
              storeUrl(e.target.value);
              onRequestChange && onRequestChange(e.target.value, state.data, state.metadata);
            }}/>
        </div>

        {service && (
          <div>
            <Button
              icon={"file-ppt"}
              type="dashed"
              onClick={() => dispatch(setProtoVisibility(true))}
            >
              Proto File
            </Button>
          </div>
        )}
      </div>

      <div style={{ ...styles.playIconContainer, position: "absolute" }}>
        <PlayControl
          dispatch={dispatch}
          methodName={methodName}
          service={service}
          data={state.data}
          loading={state.loading}
          metadata={state.metadata}
          url={state.url}
          call={state.call}
        />
      </div>

      <div style={styles.editorContainer}>
        <AceEditor
          style={{ marginTop: "10px", background: "#fff" }}
          width={"50%"}
          height={"calc(100vh - 155px)"}
          mode="json"
          theme="textmate"
          name="inputs"
          fontSize={13}
          cursorStart={2}
          onChange={(value) => {
            dispatch(setData(value));
            onRequestChange && onRequestChange(state.url, value, state.metadata);
          }}
          showPrintMargin
          showGutter
          highlightActiveLine={false}
          value={state.data}
          setOptions={{
            useWorker: true
          }}
        />

        <div style={styles.responseContainer}>
          <Response loading={state.loading} output={state.output}/>
        </div>
      </div>

      <Metadata
        onClickMetadata={() => {
          dispatch(setMetadataVisibilty(!state.metadataOpened));
        }}
        onMetadataChange={(value) => {
          dispatch(setMetadata(value));
          onRequestChange && onRequestChange(state.url, state.data, value);
        }}
        value={state.metadata}
        visibile={state.metadataOpened}
      />

      {service && <Drawer
          title={service.proto.fileName.split('/').pop()}
          placement={"right"}
          width={"50%"}
          closable={false}
          onClose={() => dispatch(setProtoVisibility(false))}
          visible={state.protoViewVisibile}
      >
          <AceEditor
              style={{ marginTop: "10px", background: "#fff" }}
              width={"100%"}
              height={"calc(100vh - 115px)"}
              mode="protobuf"
              theme="textmate"
              name="output"
              fontSize={13}
              showPrintMargin={false}
              wrapEnabled

              showGutter={false}
              readOnly
              highlightActiveLine={false}
              value={service.proto.protoText}
              onLoad={(editor: any) => {
                editor.renderer.$cursorLayer.element.style.display = "none";
                editor.gotoLine(0, 0, true);
              }}
              setOptions={{
                useWorker: true,
                showLineNumbers: false,
                highlightGutterLine: false,
                fixedWidthGutter: true,
                tabSize: 1,
              }}
          />
      </Drawer>}
    </div>
  )
};

Editor.defaultProps = {
  methodName: "",
};

export { Editor }

const styles = {
  tabContainer: {
    width: "100%",
    height: "100%",
  },
  editorContainer: {
    display: "flex",
    height: "100%",
    borderLeft: "1px solid rgba(0, 21, 41, 0.18)",
    background: "#fff"
  },
  responseContainer: {
    background: "white",
    width: "50%",
    borderLeft: "1px solid #eee",
    borderRight: "1px solid rgba(0, 21, 41, 0.18)",
    overflow: "auto"
  },
  playIconContainer: {
    zIndex: 10,
    left: "50%",
    marginLeft: "-25px",
    top: "50%",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid rgba(0, 21, 41, 0.18)",
    borderBottom: "1px solid #eee",
    background: "#fafafa",
    padding: "15px",
    boxShadow: "2px 0px 4px 0px rgba(0,0,0,0.20)",
  },
};