import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
  import AdminRedirectHandler from "../oauth2/AdminRedirectHandler";

  function PrivateRoute ({ component: Component, authenticated,role, ...rest }) {
    return (
        <Route
            {...rest}
            render = {props => 
                new AdminRedirectHandler('users')?(
                    <Component {...rest} {...props} />
                ) : ( 
                    <Redirect to={{
                                    pathname: '/login', 
                                    state: {from: props.location}
                                  }} alert={"관리자계정으로 로그인하세요!"}
                    />
                )
            }
        />
    )
}
// const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         authenticated ? (
//           <Component {...rest} {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
// );
  
export default PrivateRoute