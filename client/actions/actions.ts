import { UPDATE_USERNAME, UPDATE_PASSWORD} from '../constants';

export const updateUsername = (newName:string):UPDATE_USERNAME => ({
  type: 'UPDATE_USERNAME',
  payload: newName,
});

export const updatePassword = (newPass:string):UPDATE_PASSWORD => ({
  type: 'UPDATE_PASSWORD',
  payload: newPass,
});
  