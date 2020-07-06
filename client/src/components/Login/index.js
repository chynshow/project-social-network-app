import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import FormControl from '../Common/Form/FormControl';
import { required } from '../../utils/validators';

const Login = () => {
  return (
    <div className="c-login">
      <h3 className="c-title-secondary c-login__title">Login</h3>
      <LoginForm />
    </div>
  );
};

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form className="c-login__form">
          <FormControl
            control="input"
            type="text"
            label="Email"
            placeholder="Type your email"
            name="email"
            validate={required}
          />
          <FormControl
            control="input"
            type="text"
            label="Password"
            placeholder="Password"
            name="password"
            validate={required}
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
