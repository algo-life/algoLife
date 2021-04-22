import * as React from 'react';
import { connect } from 'react-redux';
import { login, updateAlgos } from '../actions/actions';
import { UserObject, algorithms } from '../constants';

function Profile(props: any) {
  function displayAlgos(solve: boolean) {
    let list;
    if (!solve) {
      const unsolvedlist = props.algos.filter((el: any) => {
        if (!el.solved) return el;
      });
      list = unsolvedlist.map((el: algorithms) => {
        return (
          <div key={`${el.name}`}>
            <input
              type="checkbox"
              id={`${el.name}`}
              // className="Unsolved"
              value={`${el.solved}`}
            />
            <label> ${el.name}</label>
          </div>
        );
      });
    } else {
      const solvedList = props.algos.filter((el: algorithms) => {
        if (el.solved) return el;
      });

      list = solvedList.map((el: algorithms) => {
        return (
          <div key={`${el.name}1`}>
            <input
              type="checkbox"
              id={`${el.name}`}
              // className="solved"
              value={`${el.solved}`}
              checked
            />
            <label> ${el.name}</label>
          </div>
        );
      });
    }

    return list;
  }

  return (
    <div>
      <h1 id="huh">Profile </h1>
      <h2>Hi there {props.user} get dat AlgoLife </h2>
      <div>
        <h3>completed dat Algo</h3>
        <input type="checkbox" id="hi" />
        <label> ${props.user.algoName}</label>
        {displayAlgos(true)}
        <button> Click to Update</button>
      </div>
      <br></br>
      <div>
        <h3>gotta git dat Algo </h3>
        {displayAlgos(false)}
        <button> Click to Update</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user.username,
  algos: state.user.algorithms,
  algoName: state.user.algorithms.name,
});

const mapDispatchToProps = (dispatch: any) => ({
  //update algos possibly
  updateAlgos: (algoInfo: Array<algorithms>) => dispatch(updateAlgos(algoInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
