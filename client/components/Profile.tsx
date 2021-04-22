import * as React from 'react';
import { connect } from 'react-redux';
import { updateAlgos, updateCodeAlgo } from '../actions/actions';
import { algorithms } from '../constants';
import { useHistory } from 'react-router-dom';

function Profile(props: any) {
  const history = useHistory();
  if (!props.user.username) history.push('/login');

  const handleClick = (el: algorithms) => {
    props.updateCodeAlgo(el);

    const body = {
      user_id: props.user._id,
      algorithm_id: el._id,
    };

    fetch('/algos/viewed', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log('err from Profile ', err));
    history.push('/main');
  };

  function displayAlgos(solve: boolean) {
    if (!props.algos) return null;
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
      const styles = { textDecoration: 'none' };
      if (el.solved) styles.textDecoration = 'line-through';
      return (
        <div id="algoList" key={`${el.name}1`}>
          <label
            className="singleAlgo"
            onClick={() => handleClick(el)}
            style={styles}
            id={`${el._id}`}
          >
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
});

const mapDispatchToProps = (dispatch: any) => ({
  updateCodeAlgo: (algoInfo: algorithms) => dispatch(updateCodeAlgo(algoInfo)),
  updateAlgos: (algoInfo: Array<algorithms>) => dispatch(updateAlgos(algoInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
