import { UPDATE_USERNAME, UPDATE_PASSWORD } from '../constants';

export const updateUsername = (newName: string): UPDATE_USERNAME => ({
  type: 'UPDATE_USERNAME',
  payload: newName,
});

export const updatePassword = (newPass: string): UPDATE_PASSWORD => ({
  type: 'UPDATE_PASSWORD',
  payload: newPass,
});

export const login = (inputUsername: string, inputPassword: string) => {
  //submit state to backend probably for Oauth
  //redirect to profile if successfully signed in
  
  console.log(inputUsername, inputPassword);
};

export const signUp = (inputUsername: string, inputPassword: string) => {
  //submit state to backend probably for Oauth
  //redirect to profile if successfully signed in
  
  console.log(inputUsername, inputPassword, "signup");
};
