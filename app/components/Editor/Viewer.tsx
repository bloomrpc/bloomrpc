import * as React from 'react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import AceEditor from 'react-ace';
import * as Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';
import { Input } from 'antd';

interface ResponseProps {
  output: string,
}

export function Viewer({ output }: ResponseProps) {

  const editorRef: any = useRef(null);
  const inputSearch: any = useRef(null);
  const [showFind, setShowFind] = useState(false);

  useEffect(() => {
    Mousetrap.bindGlobal(['command+f', 'ctrl+f'], () => {
      setShowFind(!showFind);
      return false;
    });

    return () => {
      Mousetrap.unbind(['command+f', 'ctrl+f'], 'keyup');
      Mousetrap.unbind(['command+f', 'ctrl+f'], 'keydown');
    }
  });

  return (
    <div style={styles.responseContainer}>
      <Input
        ref={inputSearch}
        name="search"
        autoFocus={showFind}
        className={`find-match ${!showFind ? 'hide' : ''}`}
        placeholder={"Search match"}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          editorRef.current.editor.findAll(e.target.value, {
            backwards: false,
            wrap: true,
            caseSensitive: false,
            wholeWord: false,
            regExp: true,
          });
        }}/>

      {!output && (
        <div style={styles.introContainer}>
          <h1 style={styles.introTitle}>Hit the play button to get a response here</h1>
          <img src={require('./../../../resources/blue/128x128.png')} style={{ opacity: 0.1 }}/>
        </div>
      )}
      <AceEditor
        ref={editorRef}
        className={"response-edit"}
        style={{ background: "#fff" }}
        width={"100%"}
        height={"calc(100vh - 188px)"}
        mode="json"
        theme="textmate"
        name="output"
        fontSize={13}
        showPrintMargin={false}
        wrapEnabled
        showGutter
        readOnly
        highlightActiveLine={false}
        value={output}
        onLoad={(editor: any) => {
          editor.renderer.$cursorLayer.element.style.display = "none";
        }}
        commands={[{
          name: 'find',
          bindKey: { win: 'Ctrl-f', mac: 'Command-f' }, //key combination used for the command.
          exec: () => {
            setShowFind(!showFind);
            inputSearch.current.focus();
          }
        }]}
        setOptions={{
          useWorker: true,
          showLineNumbers: false,
          highlightGutterLine: false,
          fixedWidthGutter: true,
          tabSize: 1,
        }}
      />
    </div>
  )
}

const styles = {
  introContainer: {
    textAlign: "center" as "center",
    position: "absolute" as "absolute",
    left: "25%",
    top: "35%",
    width: "45%",
    zIndex: 7,
  },
  introTitle: {
    position: "absolute" as "absolute",
    color: "rgba(17, 112, 134, 0.58)",
    fontSize: "25px",
    top: "120px",
  },
  responseContainer: {
    background: "white",
    position: "relative" as "relative",
  }
};