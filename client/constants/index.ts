import { Action } from 'redux';

export interface UPDATE_USERNAME extends Action {
  type: 'UPDATE_USERNAME';
  payload: string;
}

export interface UPDATE_PASSWORD extends Action {
  type: 'UPDATE_PASSWORD';
  payload: string;
}

interface UserObject{
  username: string;
}

export interface UPDATE_USER extends Action{
    type:'UPDATE_USER';
    payload: UserObject;
}
export type FormAction = UPDATE_USERNAME | UPDATE_PASSWORD;
export type UserAction = UPDATE_USER;