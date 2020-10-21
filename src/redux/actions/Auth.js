import Axios from "axios";
import { useHistory } from "react-router-dom";

const AuthLoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const AuthLoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};
const AuthLoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};
// export const test=(data) =>{
//     console.log(data, "firee")
// }

export const AuthLogin = (fields) => {
    // console.log(fields, "look at here")
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return Axios({
      method: "POST",
      data: fields,
      url: "http://localhost:7000/auth/login",
    })
      .then((res) => {
        const data = res.data;
        // console.log(data, "dataas");
        dispatch(AuthLoginSuccess(data));
        // fields.history.replace('/dashboard')
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginError(message));
      });
  };
};

export const AuthLogout = () => {
  return {
    type: "LOGOUT",
  };
};
