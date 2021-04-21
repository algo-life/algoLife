import { UserAction } from '../constants';

export interface UserState {
  username: string;
  _id: number;
  loginError?: string;
}

const initialState: UserState = {
  username: null,
  _id: null,
  //   loginError:? ''
};

export default function UserReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        username: action.payload.username,
        _id: action.payload._id,
      };
      break;
    }
    case 'UPDATE_USER_FAIL': {
      return { ...state, loginError: 'Invalid username/password combination' };
      break;
    }
    default: {
      return state;
    }
  }
}
