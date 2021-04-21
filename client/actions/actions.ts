import { UPDATE_USERNAME, UPDATE_PASSWORD, UPDATE_USER, algorithms, UPDATE_ALGOS} from '../constants';
// change if the user has successfully logged in and redirect to home
//screen
// import { useHistory } from 'react-router-dom';
// const history = useHistory()

// export const isLoggedIn= (username:string|null)=>{
//   if(username){
//     history.push('/profile');
//   }
// }

// add this in order to listen to state/store changes in the UI [state.isLoggedIn])
export const updateAlgos= (updateAlgos: Array<algorithms>)=>({
  type:'UPDATE_ALGOS',
  payload: updateAlgos
})

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
      console.log(userInfo);
      dispatch({ type: 'UPDATE_USER', payload: userInfo });
    })
    .catch((e) => console.log('error from login action...', e));
};

export const signUp = (username: string, password: string) => (
  dispatch: any
) => {
  //submit state to backend probably for Oauth
  //redirect to profile if successfully signed in
  fetch('/auth/signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((userInfo: any) => {
      console.log('actions signup', userInfo);
      dispatch({ type: 'UPDATE_USER', payload: userInfo });
    })
    .catch((e) => console.log('error from signUp action...', e));
};
