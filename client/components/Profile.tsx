import * as React from 'react';
import { connect } from 'react-redux';
import { updateAlgos, updateCodeAlgo } from '../actions/actions';
import { UserObject, algorithms } from '../constants';
import { useHistory } from 'react-router-dom';

function Profile(props: any) {
  const history = useHistory();
  const handleClick = (el: algorithms) => {
    props.updateCodeAlgo(el);
    history.push('/main');
  };

  function displayAlgos(solve: boolean) {
    console.log('props:', props);
    let list;
    if (!solve) {
      const unsolvedlist = props.algos.filter((el: any) => {
        if (!el.solved) return el;
      });
      list = unsolvedlist;
    } else {
      const solvedList = props.algos.filter((el: algorithms) => {
        if (el.solved) return el;
      });
      list = solvedList;
    }

    return list.map((el: algorithms, i: number) => {
      return (
        <div className="singleAlgo" key={`${el.name}1`}>
          <label onClick={() => handleClick(el)} id={`${el._id}`}>
            {' '}
            {el.name}
          </label>
        </div>
      );
    });
  }

  return (
    <div className="profileContainer">
      <h1 className="profileHeader">Welcome, {props.user.username}!</h1>
      <div className="algoContainer">
        <div className="unsolvedAlgoContainer">
          <h1 className="algoSolveHeader">Unsolved Algorithms</h1>
          <div className="unsolvedAlgoList">{displayAlgos(false)}</div>
        </div>
        <div className="completedAlgoContainer">
          <form className="completedAlgoForm">
            <h1 className="algoSolveHeader">Completed Algorithms</h1>
            <label className="completedAlgoItem"> {props.user.algoName}</label>
            {displayAlgos(true)}
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  algos: state.user.algorithms,
  algoName: state.user.algorithms.name,
  codeState: state.code.curAlgo,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateCodeAlgo: (algoInfo: algorithms) => dispatch(updateCodeAlgo(algoInfo)),
  updateAlgos: (algoInfo: Array<algorithms>) => dispatch(updateAlgos(algoInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
