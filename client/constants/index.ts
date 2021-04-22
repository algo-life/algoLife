import { Action } from 'redux';

export interface UPDATE_USERNAME extends Action {
  type: 'UPDATE_USERNAME';
  payload: string;
}

export interface UPDATE_PASSWORD extends Action {
  type: 'UPDATE_PASSWORD';
  payload: string;
}

export interface UPDATE_USER_FAIL extends Action {
  type: 'UPDATE_USER_FAIL';
}

export interface UPDATE_ALGOS{
  type: 'UPDATE_ALGOS'
  payload:UserObject["algorithms"]
}


export interface algorithms {
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

export interface UserObject {
  username: string;
  _id: number;
  algorithms: algorithms[];
  loginError?: string;
}

export interface UPDATE_CODE {
  type: 'UPDATE_CODE';
  payload: string;
}

export interface UPDATE_TEST {
  type: 'UPDATE_TEST';
  payload: string;
}

export interface UPDATE_THEME {
  type: 'UPDATE_THEME';
  payload: string;
}

export interface UPDATE_USER_FAIL extends Action {
  type: 'UPDATE_USER_FAIL';
}

export interface UPDATE_USER extends Action {
  type: 'UPDATE_USER';
  payload: UserObject;
}

export interface UPDATE_CODE_ALGO extends Action{
  type: 'UPDATE_CODE_ALGO'
  payload:algorithms
}
export type FormAction = UPDATE_USERNAME | UPDATE_PASSWORD;
export type UserAction = UPDATE_USER | UPDATE_USER_FAIL | UPDATE_ALGOS;
export type CodeAction = UPDATE_CODE | UPDATE_THEME | UPDATE_TEST | UPDATE_CODE_ALGO;
