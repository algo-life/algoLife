import { Action } from 'redux';

export interface UPDATE_USERNAME extends Action {
  type: 'UPDATE_USERNAME';
  payload: string;
}

export interface UPDATE_PASSWORD extends Action {
  type: 'UPDATE_PASSWORD';
  payload: string;
}

export type FormAction = UPDATE_USERNAME | UPDATE_PASSWORD;
