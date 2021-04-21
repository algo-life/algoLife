import { CodeAction } from '../constants';

interface CodeState {
  code: string;
  theme: string;
}

const initialState: CodeState = {
  code: '',
  theme: '',
};

export default function formReducer(
  state = initialState,
  action: CodeAction
): CodeState {
  switch (action.type) {
    case 'UPDATE_CODE': {
      return { ...state, code: action.payload };
    }
    case 'UPDATE_THEME': {
      return { ...state, theme: action.payload };
    }
    default: {
      return state;
    }
  }
}
