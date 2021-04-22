import { UserObject } from './index';

// UserObject:
// { username: string, _id: number, algorithms: [{name, prompt, difficulty level, test_id, solved, saved, solution, created_at}] }

const user1 = {
  username: 'user1',
  _id: 1,
  algorithms: [
    {
      name: 'algo1',
      prompt: 'testpromp',
      difficulty: 'peasy',
      solved: false,
      saved: false,
      solution: 'stuff',
    },
    {
      name: 'algo2',
      prompt: 'testpromp2',
      level: 'peasy2',
      solved: false,
      saved: false,
      solution: 'stuff2',
    },
  ],
};

// mocking algo that will be passed down through props
export const algo = {
  created_at: '2021-04-21T21:03:08.939Z',
  difficulty: 'easy',
  name: 'Find Sum',
  prompt:
    'Create a function "sum" that accepts two numbers and returns the sum',
  saved: false,
  solution: 'function sum(a, b) { return a + b; }',
  solved: true,
  test: `describe('sum', function () {
    it('should return sum of arguments', function () {
      chai.expect(sum(1, 2)).to.equal(3);
    });
  });`,
  _id: 3,
};

export default user1;
