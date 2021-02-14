import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  // children is react component child, rest is parameter
  // console.log(children);
  // console.log(rest)
  // const { myUser } = useUserContext();
  const { user } = useAuth0();

  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
