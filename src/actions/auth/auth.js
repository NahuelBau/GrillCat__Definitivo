import {types} from './../../types/types';



export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    
  };
};

export const startLogout = () => {
  return (dispatch) => {
  };
};




const login = (uid, displayName) => {
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