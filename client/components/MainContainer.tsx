import * as React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CodeEditor from './CodeEditor';
import testHtml from '../browserTest/testhtml';
import { updateTest, updateCode, updateAlgos } from '../actions/actions';
import { algorithms } from '../constants';

function MainContainer(props: any) {
  console.log(props);
  console.log('props.algorithm.prompt');
  const [frameHtml, setFrameHtml] = React.useState('');
  const history = useHistory();

  const runTest = () => {
    if (props.algorithm.test) {
      const test = testHtml.replace('__TESTHERE__', props.algorithm.test);
      setFrameHtml(test.replace('__SOLUTIONHERE__', props.code));
    }
  };

  React.useEffect(() => {
    props.updateCode('');
  }, [props.algorithm]);

  const markSolved = () => {
    const newEl = { ...props.algorithm, solved: !props.algorithm.solved };
    const filteredAlgos = props.algos.filter(
      (algo: algorithms) => algo._id !== props.algorithm._id
    );

    const body = {
      user_id: props.user._id,
      algorithm_id: props.algorithm._id,
    };

    const endpoint = props.algorithm.solved ? '/algos/unsolve' : '/algos/solve';

    fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          props.updateAlgos([...filteredAlgos, newEl]);
          history.push('/profile');
        }
      })
      .catch((err) => console.log('err from Profile ', err));
  };

  const saveSolution = () => {
    const newEl = { ...props.algorithm, solution: props.code };
    const filteredAlgos = props.algos.filter(
      (algo: algorithms) => algo._id !== props.algorithm._id
    );
    const body = {
      user_id: props.user._id,
      algorithm_id: props.algorithm._id,
      solution: props.code,
    };
    fetch('algos/solution', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) props.updateAlgos([...filteredAlgos, newEl]);
      })
      .catch((err) => console.log('err from Profile ', err));
  };

  React.useEffect(() => {
    if (props.algorithm.solution) props.updateCode(props.algorithm.solution);
  }, []);

  return (
    <div id="algoContainer">
      <div id="algoHeader">
        <h1 id="algoName">{props.algorithm.name}</h1>
        <h4 id="algoPrompt"> {props.algorithm.prompt}</h4>
      </div>
      <div className="codeAndTest">
        <div id="codeEditorContainer">
          <CodeEditor code={props.code} solution={props.algorithm.solution} />
        </div>
        <div id="testContainer">
          <iframe
            id="test-frame"
            style={{ height: '300px', width: '400px' }}
            srcDoc={frameHtml || '<h1></h1>'}
          />
          <div className="algoButtonsContainer">
            <button
              className="algoButtons"
              id="runTestButton"
              onClick={runTest}
            >
              Run test
            </button>
            <button className="algoButtons" onClick={markSolved}>
              Mark as {props.algorithm.solved ? 'unsolved' : 'solved'}
            </button>
            <button className="algoButtons" onClick={saveSolution}>
              Save Solution!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state: any) => ({
  code: state.code.code,
  curTest: state.code.curTest,
  codeAlgo: state.code.curAlgo,
  algos: state.user.algorithms,
});

const mapDispatch = (dispatch: any) => ({
  updateCode: (code: string) => dispatch(updateCode(code)),
  updateTest: (test: string) => dispatch(updateTest(test)),
  updateAlgos: (algoInfo: Array<algorithms>) => dispatch(updateAlgos(algoInfo)),
});

export default connect(mapState, mapDispatch)(MainContainer);
