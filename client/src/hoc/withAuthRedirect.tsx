import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from './../redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.SFC<{
  component: React.ReactType;
  path: string;
  exact: boolean;
}> = ({ component: Component, ...rest }) => {
  const { isAuth, loading } = useSelector((state: AppState) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth && !loading ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default PrivateRoute;
