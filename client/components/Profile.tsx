import * as React from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, login } from '../actions/actions';
import { UserObject, algorithms } from '../constants';

function Profile(props: any) {
  function displayAllAlgos() {
    const list = props.algos.map((el: algorithms) => el.name);
    
    list.foreach((el: string) => {
      
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
      <h2>{props.user}</h2>
      {/* render list of algos */}
      {displayAllAlgos()}
{/* possible put this in form ane then have submit to update database???? of completed... */}
      
      
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.username,
  algos: state.algorithms,
  algoListName: () => {
    state.algorithms.map((el: algorithms) => el.name);
  },
});

const mapDispatchToProps = (dispatch: any) => ({
//update algos possibly
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
