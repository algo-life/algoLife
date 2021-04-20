import { UserAction } from '../constants';

export interface UserState {
  username: string;
  loginError?: string;
}

const initialState: UserState = {
  username: null,
  //   loginError:? ''
};

export default function UserReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case 'UPDATE_USER': {
      return { ...state, username: action.payload.username };
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
