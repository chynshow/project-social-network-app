import React from 'react';
import { Formik, Form } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import FormControl from '../Common/Form/FormControl';
import { loginRequest } from './../../redux/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux';

const Login: React.FC<{}> = () => {
  const { isAuth } = useSelector((state: AppState) => state.auth);
  return (
    <>
      {isAuth ? (
        <Redirect to="/profile" />
      ) : (
        <div className="c-login">
          <h3 className="c-title-secondary c-login__title">Login</h3>
          <LoginForm />
        </div>
      )}
    </>
  );
};

const LoginForm: React.FC<{}> = () => {
  const initialValues = {
    email: '' as string,
    password: '' as string,
  };

  type TInitialValues = typeof initialValues;

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Field is required!')
      .email('Email is not valid!'),
    password: Yup.string()
      .required('Field is required!')
      .min(6, 'Password should be more than 6 characters!'),
  });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }: TInitialValues): void => {
    dispatch(loginRequest(email, password));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="c-login__form">
          <FormControl
            control="input"
            type="text"
            label="Email"
            placeholder="Type your email"
            name="email"
          />
          <FormControl
            control="input"
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
          />

          <div className="c-login__btn-container">
            <button className="c-btn c-btn--primary" type="submit">
              Log in
            </button>
            <Link className="c-link c-login__link" to="/registration">
              <button className="c-btn" type="submit">
                Don't have an account? Registration here!
              </button>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
