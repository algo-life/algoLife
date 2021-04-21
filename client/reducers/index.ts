import { combineReducers } from 'redux';
import formReducer from './formReducer';
import userReducer from './userReducer'

//grabs all pieces of state and the corresponding reducers(fxns)
const reducers = combineReducers({
  form: formReducer,
  user: userReducer
});

export default reducers;
