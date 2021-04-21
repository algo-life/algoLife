import { combineReducers } from 'redux';
import formReducer from './formReducer';
import userReducer from './userReducer';
import codeReducer from './codeReducer';

//grabs all pieces of state and the corresponding reducers(fxns)
const reducers = combineReducers({
  form: formReducer,
  user: userReducer,
  code: codeReducer,
});

export default reducers;
