import * as React from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';
import Themes from './Themes';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-ambiance';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-dawn';
import 'ace-builds/src-noconflict/theme-twilight';
import { updateCode } from '../actions/actions';

const mapState = (state: any) => ({
  code: state.code.code,
  theme: state.code.theme,
  // solution: state.user.algorithms[2] ? state.user.algorithms[2].solution : '',
});

const mapDispatch = (dispatch: any) => ({
  updateCode: (val: string) => dispatch(updateCode(val)),
});

function CodeEditor(props: any) {
  return (
    <>
      <Themes />
      <AceEditor
        className="codeEditor"
        placeholder="your solution here"
        mode="javascript"
        theme={props.theme}
        editorProps={{
          $blockScrolling: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        setOptions={{ useWorker: false }}
        width="700px"
        fontSize={14}
        tabSize={2}
        onChange={(val) => {
          props.updateCode(val);
          props.setSaved(false);
        }}
        value={props.code}
        defaultValue={props.solution}
      />
    </>
  );
}

export default connect(mapState, mapDispatch)(CodeEditor);
