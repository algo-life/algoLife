// {
//     name
//     prompt
//     difficulty
//     test
// }

// (1, 2)|(3, 4)|(5,6)
// 3,7,11

export const createTestBody = (input: string, output: string, name: string) => {
  const inputArray = input.split('|');
  const outputArray = output.split(',');
  if (inputArray.length !== outputArray.length) return;
  let testBody = `describe("${name}", function () {
      it("should pass custom user tests", function () {\n`;

  for (let i = 0; i < inputArray.length; i++) {
    testBody += `chai.expect(${name}${inputArray[i]}).to.equal(${outputArray[i]});\n`;
  }
  testBody += `});\n});`;
  return testBody;
};

export default (algoInfo: any) => {
  const { name, prompt, difficulty, input, output } = algoInfo;
  if (!name || !prompt || !difficulty || !input || !output) return;

  return {
    name,
    prompt,
    difficulty,
    test: createTestBody(input, output, name),
  };
};
