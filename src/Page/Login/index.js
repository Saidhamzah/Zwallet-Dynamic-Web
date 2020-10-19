import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../redux/actions/Auth";
// import { isLogin } from "../../utils";
// import { login } from "../../utils";

const Login = (props) => {
//   console.log(props, 'ahha')
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.Auth);

  const onSubmit = (e) => {
    e.preventDefault(e);
    // test({
    //   username: username,
    //   password: password
    // })
    dispatch(
      AuthLogin({
        email: username,
        password: password
      })
    );
    console.log(username, password, 'yuhu')
  };

  return (
    <div>
      <h2>Page Login</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>
          email:
          <input
            type="text"
            name="email"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          password:
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {loading ? (
          <button type="submit" disabled={true}>Loading....</button>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
    </div>
  );
};

export default Login;
