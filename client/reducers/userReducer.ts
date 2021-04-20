import { UserAction } from '../constants';

export interface UserState {
  username: string;
}

const initialState: UserState = {
  username: null,
};

export default function UserReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case 'UPDATE_USER': {
      return { ...state, username: action.payload.username };
    }
    default: {
      return state;
    }
  }
}
