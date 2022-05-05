import {types} from './../../types/types';

import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { firebaseApp } from './../../firebase/firebase-config';

const auth = getAuth(firebaseApp)

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(loginAction( user.uid, user.displayName ));
        console.log('exito en el login')
        dispatch(uiFinishLoading());
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message)
        dispatch(uiFinishLoading());
      })
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logOut());
  };
};




export const loginAction = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      name: displayName
    }
  }
};

const logOut = () => {
  return{
    type: types.logout
  }
}

const uiStartLoading = () => {
  return{
    type: types.uiStartLoading,
  }
};

const uiFinishLoading = () => {
  return{
    type: types.uiFinishLoading,
  }
};