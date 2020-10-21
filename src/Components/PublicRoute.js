// import React, { Component } from "react";
// import { Route, Redirect } from "react-router-dom";
// import {useSelector} from "react-redux"

// const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//   const { isLogin } = useSelector((state) => state.Auth)
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLogin && restricted ? (
//           <Redirect to="/home" />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };

// export default PublicRoute;
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { isLogin, loginAs } from "../utils";
// import { isLogin } from "../utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  //restricted (true) = public route itu bisa diakses ga sih ketika user tidak ada token/belum login
  //restricted (false) = public
  const { isLogin } = useSelector((state) => state.Auth)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

// contoh memberi route ngadmin
{
  /* <Route
{...rest}
render={(props) =>
  isLogin() && restricted ? (
    loginAs("admin") ? (
      <Redirect to="/ngadmin" />
    ) : (
      <Redirect to="/dashboard" />
    )
  ) : (
    <Component {...props} />
  )
} */
}
export default PublicRoute;
