import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import FormControl from '../Common/Form/FormControl';
import { required } from '../../utils/validators';

const Registration = () => {
  return (
    <div className="c-registration">
      <h3 className="c-title-secondary c-registration__title">Registration</h3>
      <RegistrationForm />
    </div>
  );
};

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form className="c-registration__form">
          <FormControl
            control="input"
            type="text"
            label="Name"
            placeholder="Name"
            name="name"
            validate={required}
          />
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
          <FormControl
            control="input"
            type="text"
            label="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            validate={required}
          />
          <div className="c-registration__btn-container">
            <button className="c-btn c-btn--primary" type="submit">
              Registration
            </button>
            <Link className="c-link c-registration__link" to="/login">
              <button className="c-btn" type="submit">
                Already have an account? Sign in here!
              </button>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;
