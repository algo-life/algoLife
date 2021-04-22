import * as React from 'react';
import createAlgo from '../helpers/createAlgo';

export default function AlgoSubmit() {
  const [algoInfo, setAlgoInfo] = React.useState({});

  const handleChange = (e: any) => {
    setAlgoInfo({ ...algoInfo, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const algoObj = createAlgo(algoInfo);
    if (algoObj) {
      console.log(algoObj);
      // send createAlgo(algoInfo) object to DB!!!
    }
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', width: '400px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="Algo Name">Name</label>
      <input id="name" placeholder="Algo Name" onChange={handleChange} />
      <label htmlFor="Algo prompt">Prompt</label>
      <input id="prompt" placeholder="Algo prompt" onChange={handleChange} />
      <label htmlFor="Algo difficulty">Difficulty</label>
      <input
        id="difficulty"
        placeholder="Algo difficulty"
        onChange={handleChange}
      />
      <label htmlFor="Algo input">Input - (1, 2)|(3, 4)|(5,6)</label>
      <input id="input" placeholder="Algo input" onChange={handleChange} />
      <label htmlFor="Algo output">Output - 3,7,11</label>
      <input id="output" placeholder="Algo output" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
