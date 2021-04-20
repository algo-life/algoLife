import * as types from '../constants';
import { FormAction } from '../constants';

interface FormState {
  username: string;
  password: string;
}

const initialState: FormState = {
  username: '',
  password: '',
};
// { type: 'UPDATE_USERNAME', payload: 'angelo' }

export default function formReducer(
  state = initialState,
  action: FormAction
): FormState {
  switch (action.type) {
    case 'UPDATE_USERNAME': {
      return { ...state, username: action.payload };
    }
    case 'UPDATE_PASSWORD': {
      return { ...state, password: action.payload };
    }
    default: {
      return state;
    }
  }
}
