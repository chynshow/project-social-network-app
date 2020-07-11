import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from './../redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.SFC<{
  component: React.ReactType;
  path: string;
  exact: boolean;
}> = ({ component: Component, ...rest }) => {
  const { isAuth, loading } = useSelector((state: AppStateType) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PrivateRoute;
