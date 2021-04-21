import * as React from 'react';
import { connect } from 'react-redux';
import { login, updateAlgos } from '../actions/actions';
import { UserObject, algorithms } from '../constants';





function Profile(props: any) {
  
    function displayAlgos(solve:boolean):Array<any> {
    let list;
        if (solve){
            const unsolvedlist = props.algos.map((el: algorithms) => { if (!el.solved) el.name})
            list= unsolvedlist
        }
        else{ const solvedlist = props.algos.map((el: algorithms) => { if (el.solved) el.name})
        list= solvedlist}
  

    return list.foreach((el: string) => {

        <input type="checkbox" id={el} value={el}>
          <label> {el}</label>
          <br></br>
        </input>
      
    });
  }

  console.log(props);
  return (
    <div>
      <h1>Profile </h1>
      <h2>Hi there {props.user} get dat AlgoLife </h2>
      {/* render list of algos */}

      <input type='form'>
    gotta git dat Algo
      {displayAlgos(false)}
            <br></br>
      <button>Update</button>
      </input>
      
      <hr>
        <h3>completed dat Algo</h3>
        {displayAlgos(true)}
      </hr>
{/* possible put this in form ane then have submit to update database???? of completed... */}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user.username,
  algos: state.user.algorithms,
  
});

const mapDispatchToProps = (dispatch: any) => ({
//update algos possibly
updateAlgos: (algoInfo:Array<algorithms>) => dispatch(updateAlgos(algoInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
