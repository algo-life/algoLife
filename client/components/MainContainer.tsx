import * as React from 'react';
import { connect } from 'react-redux';
import CodeEditor from './CodeEditor';
import testHtml from '../browserTest/testhtml';
import { updateTest, updateCode, updateAlgos } from '../actions/actions';
import { algorithms } from '../constants';

function MainContainer(props: any) {
  const [frameHtml, setFrameHtml] = React.useState('');
  const [alg, setAlg] = React.useState({ ...props.algorithm });
  const [saved, setSaved] = React.useState(false);

  const runTest = () => {
    if (alg.test) {
      const test = testHtml.replace('__TESTHERE__', alg.test);
      setFrameHtml(test.replace('__SOLUTIONHERE__', props.code));
    }
  };

  React.useEffect(() => {
    props.updateCode('');
  }, [props.algorithm]);

  const markSolved = () => {
    const newEl = { ...alg, solved: !alg.solved };
    const filteredAlgos = props.algos.filter(
      (algo: algorithms) => algo._id !== props.algorithm._id
    );

    const body = {
      user_id: props.user._id,
      algorithm_id: alg._id,
    };

    const endpoint = alg.solved ? '/algos/unsolve' : '/algos/solve';

    fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          props.updateAlgos([...filteredAlgos, newEl]);
          setAlg(newEl);
        }
      })
      .catch((err) => console.log('err from Profile ', err));
  };

  const saveSolution = () => {
    setSaved(true);
    const newEl = { ...alg, solution: props.code };
    const filteredAlgos = props.algos.filter(
      (algo: algorithms) => algo._id !== alg._id
    );
    const body = {
      user_id: props.user._id,
      algorithm_id: alg._id,
      solution: props.code,
    };
    fetch('algos/solution', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAlg(newEl);
          props.updateAlgos([...filteredAlgos, newEl]);
        }
      })
      .catch((err) => console.log('err from Profile ', err));
  };

  React.useEffect(() => {
    if (alg.solution) props.updateCode(alg.solution);
  }, []);

  return (
    <div id="algoContainer">
      <div id="algoHeader">
        <h1 id="algoName">{alg.name}</h1>
        <h4 id="algoPrompt"> {alg.prompt}</h4>
      </div>
      <div className="codeAndTest">
        <div id="codeEditorContainer">
          <CodeEditor
            code={props.code}
            solution={alg.solution}
            setSaved={setSaved}
          />
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
              Mark as {alg.solved ? 'unsolved' : 'solved'}
            </button>
            <button className="algoButtons" onClick={saveSolution}>
              {saved ? 'Saved!' : 'Save Solution'}
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
