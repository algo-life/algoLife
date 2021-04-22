import * as React from 'react';
import { connect } from 'react-redux';
import { login, updateAlgos } from '../actions/actions';
import { UserObject, algorithms } from '../constants';

function Profile(props:any) {
 

  function displayAlgos(solve: boolean) {
    let list;
    if (solve) {
      const unsolvedlist = props.algos.filter((el: any) => {
        if (!el.solved) return el;
      })
      list = unsolvedlist;
    } else {
      const solvedlist = props.algos.filter((el: algorithms) => {
        if (el.solved) return el;
      });
      // console.log('list', solvedlist);
      list = solvedlist;
    }

     const listStuff= list.map((el: algorithms) => {
      
     
     let x= `<input type="checkbox" id=${el.name} value=${el.name}>
        <label>    ${el.name}</label>
        <br></br>
      </input>`;

      // console.log(x)
    });
   

    return listStuff
  }

  return (
    <div>
      <h1>Profile </h1>
      <h2>Hi there {props.user} get dat AlgoLife </h2> 

      {/* <input type="form">
        gotta git dat Algo */}
        {displayAlgos(false)} 
        {/* <br></br>
        <button>Update</button>
       </input> */}



<input type="checkbox" id="hi" >
        <label>    ${props.user.algoName}</label>
        <br></br>
      </input>
{displayAlgos(true)}
      {/* <hr>
        <h3>completed dat Algo</h3>
        {/* 
      </hr>
      {/* possible put this in form ane then have submit to update database???? of completed... */}
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
