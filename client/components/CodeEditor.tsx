import * as React from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';
import Themes from './Themes';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { updateCode, updateTheme } from '../actions/actions';

const mapState = (state: any) => ({
  value: state.code.value,
  theme: state.code.theme,
});

const mapDispatch = (dispatch: any) => ({
  updateCode: (val: string) => dispatch(updateCode(val)),
  updateTheme: (val: string) => dispatch(updateTheme(val)),
});

function CodeEditor(props: any) {
  return (
    <>
      <Themes />
      <AceEditor
        placeholder="your solution here"
        mode="javascript"
        theme="monokai"
        editorProps={{
          $blockScrolling: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        width="700px"
        fontSize={15}
        tabSize={2}
        onChange={props.updateCode}
        value={props.value}
      />
    </>
  );
}

export default connect(mapState, mapDispatch)(CodeEditor);
