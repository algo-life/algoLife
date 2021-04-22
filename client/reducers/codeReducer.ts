import { CodeAction, algorithms } from '../constants';

interface CodeState {
  code: string;
  theme: string;
  curTest: string;
  curAlgo?: algorithms;
}

const initialState: CodeState = {
  code: '',
  theme: 'monokai',
  curTest: '',
};

export default function codeReducer(
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
    case 'UPDATE_TEST': {
      return { ...state, curTest: action.payload };
    }
    case 'UPDATE_CODE_ALGO':{
      return {...state, curAlgo:action.payload}
    }
    default: {
      return state;
    }
  }
}
