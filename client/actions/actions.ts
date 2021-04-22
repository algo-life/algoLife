import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_CODE,
  UPDATE_THEME,
  UPDATE_TEST,
  UPDATE_CODE_ALGO,
  algorithms,
} from '../constants';

// add this in order to listen to state/store changes in the UI [state.isLoggedIn])
export const updateAlgos = (updateAlgos: Array<algorithms>) => ({
  type: 'UPDATE_ALGOS',
  payload: updateAlgos,
});

export const updateUsername = (newName: string): UPDATE_USERNAME => ({
  type: 'UPDATE_USERNAME',
  payload: newName,
});

export const updatePassword = (newPass: string): UPDATE_PASSWORD => ({
  type: 'UPDATE_PASSWORD',
  payload: newPass,
});

export const login = (username: string, password: string) => (
  dispatch: any
) => {
  fetch('/auth/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((userInfo: any) => {
      dispatch({ type: 'UPDATE_USER', payload: userInfo });
    })
    .catch((e) => console.log('error from login action...', e));
};

export const signUp = (username: string, password: string) => (
  dispatch: any
) => {
  fetch('/auth/signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((userInfo: any) => {
      dispatch({ type: 'UPDATE_USER', payload: userInfo });
    })
    .catch((e) => console.log('error from signUp action...', e));
};

export const updateCode = (code: string): UPDATE_CODE => ({
  type: 'UPDATE_CODE',
  payload: code,
});

export const updateTheme = (theme: string): UPDATE_THEME => ({
  type: 'UPDATE_THEME',
  payload: theme,
});

export const updateTest = (test: string): UPDATE_TEST => ({
  type: 'UPDATE_TEST',
  payload: test,
});

export const updateCodeAlgo = (algo: algorithms): UPDATE_CODE_ALGO => ({
  type: 'UPDATE_CODE_ALGO',
  payload: algo,
});
