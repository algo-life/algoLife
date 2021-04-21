import * as React from 'react';
import { connect } from 'react-redux';
import CodeEditor from './CodeEditor';
import testHtml from '../browserTest/testhtml';
import { updateTest, updateCode } from '../actions/actions';

// mocking algo that will be passed down through props
const algo = {
  created_at: '2021-04-21T21:03:08.939Z',
  difficulty: 'easy',
  name: 'Find Sum',
  prompt:
    'Create a function "sum" that accepts two numbers and returns the sum',
  saved: false,
  solution: 'function sum(a, b) { return a + b; }',
  solved: true,
  test_id: 3,
  _id: 3,
};

function MainContainer(props: any) {
  const [frameHtml, setFrameHtml] = React.useState('');

  const runTest = () => {
    if (props.curTest) {
      const test = testHtml.replace('__TESTHERE__', props.curTest);
      setFrameHtml(test.replace('__SOLUTIONHERE__', props.code));
    }
  };

  React.useEffect(() => {
    fetch('/algos/test/' + algo.test_id)
      .then((res) => res.json())
      .then((test) => {
        console.log(test);
        props.updateTest(test.test_body);
      });

    if (algo.solution) props.updateCode(algo.solution);
  }, []);

  return (
    <div>
      <h1>MainContainer</h1>
      <CodeEditor code={props.code} solution={algo.solution} />
      <button onClick={runTest}>Run test</button>
      <iframe
        id="test-frame"
        style={{ height: '300px', width: '400px' }}
        srcDoc={frameHtml || '<h1>Test results will appear here</h1>'}
      />
    </div>
  );
}

const mapState = (state: any) => ({
  code: state.code.code,
  curTest: state.code.curTest,
});

const mapDispatch = (dispatch: any) => ({
  updateCode: (code: string) => dispatch(updateCode(code)),
  updateTest: (test: string) => dispatch(updateTest(test)),
});

export default connect(mapState, mapDispatch)(MainContainer);
