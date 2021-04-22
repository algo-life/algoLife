import * as React from 'react';
import { connect } from 'react-redux';
import CodeEditor from './CodeEditor';
import testHtml from '../browserTest/testhtml';
import { updateTest, updateCode } from '../actions/actions';

// mocking algo that will be passed down through props
// const algo = {
//   created_at: '2021-04-21T21:03:08.939Z',
//   difficulty: 'easy',
//   name: 'Find Sum',
//   prompt:
//     'Create a function "sum" that accepts two numbers and returns the sum',
//   saved: false,
//   solution: 'function sum(a, b) { return a + b; }',
//   solved: true,
//   test: `describe('sum', function () {
//     it('should return sum of arguments', function () {
//       chai.expect(sum(1, 2)).to.equal(3);
//     });
//   });`,
//   _id: 3,
// };

function MainContainer(props: any) {
  console.log(props);
  console.log('props.algorithm.prompt');
  const [frameHtml, setFrameHtml] = React.useState('');

  const runTest = () => {
    if (props.algorithm.test) {
      const test = testHtml.replace('__TESTHERE__', props.algorithm.test);
      setFrameHtml(test.replace('__SOLUTIONHERE__', props.code));
    }
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
            srcDoc={frameHtml || '<h1>Test here</h1>'}
          />
          <button id="runTestButton" onClick={runTest}>
            Run test
          </button>
        </div>
      </div>
    </div>
  );
}

const mapState = (state: any) => ({
  code: state.code.code,
  curTest: state.code.curTest,
  codeAlgo: state.code.curAlgo,
});

const mapDispatch = (dispatch: any) => ({
  updateCode: (code: string) => dispatch(updateCode(code)),
  updateTest: (test: string) => dispatch(updateTest(test)),
});

export default connect(mapState, mapDispatch)(MainContainer);
