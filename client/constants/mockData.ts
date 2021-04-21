import { UserObject } from './index'

// UserObject:
// { username: string, _id: number, algorithms: [{name, prompt, difficulty level, test_id, solved, saved, solution, created_at}] }

 const user1= {
    username: "user1",
    _id: 1,
    algorithms:[
        {
        name: "algo1",
        prompt: "testpromp",
        level:"peasy",
        solved:false,
        saved: false,
        solution:"stuff"
    },
    {
        name: "algo2",
        prompt: "testpromp2",
        level:"peasy2",
        solved:false,
        saved: false,
        solution:"stuff2"

    }

    ]

}
export default user1