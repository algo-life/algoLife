import { combineReducers } from 'redux';
import formReducer from './formReducer';

//grabs all pieces of state and the corresponding reducers(fxns)
const reducers = combineReducers({
  form: formReducer,
});

export default reducers;
