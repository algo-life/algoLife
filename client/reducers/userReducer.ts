import { UserAction } from '../constants';

export interface UserState {
  username: string;
  _id: number;
  algorithms: Algorithm[];
  loginError?: string;
}

export interface Algorithm {
  created_at: string;
  difficulty: string;
  name: string;
  prompt: string;
  saved: boolean;
  solution: string;
  solved: boolean;
  test: string;
  _id: number;
}

const initialState: UserState = {
  username: null,
  _id: null,
  algorithms: [],
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
        algorithms: action.payload.algorithms,
      };
    }
    case 'UPDATE_USER_FAIL': {
      return { ...state, loginError: 'Invalid username/password combination' };
    }
    default: {
      return state;
    }
  }
}
