import * as React from 'react';
import CodeEditor from './CodeEditor';
import testHtml from '../browserTest/testhtml';
import testString from '../browserTest/testString';
import solutionString from '../browserTest/solutionString';

export default function MainContainer() {
  const test = testHtml.replace('***TESTHERE***', testString);
  const solution = test.replace('***SOLUTIONHERE***', solutionString);
  return (
    <div>
      <h1>MainContainer</h1>
      <CodeEditor />
      <iframe id="test-frame" srcDoc={solution} />
    </div>
  );
}
