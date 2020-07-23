import React from 'react';
import { Formik, Form } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import FormControl from '../Common/Form/FormControl';
import { registrationRequest } from './../../redux/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux';

const Registration: React.FC<{}> = () => {
  const { isAuth } = useSelector((state: AppState) => state.auth);
  return (
    <>
      {isAuth ? (
        <Redirect to="/profile" />
      ) : (
        <div className="c-registration">
          <h3 className="c-title-secondary c-registration__title">
            Registration
          </h3>
          <RegistrationForm />
        </div>
      )}
    </>
  );
};

const RegistrationForm: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  type TInitialValues = typeof initialValues;

  const validationSchema = Yup.object({
    name: Yup.string().required('Field is required!'),
    email: Yup.string()
      .required('Field is required!')
      .email('Email is not valid!'),
    password: Yup.string()
      .required('Field is required!')
      .min(6, 'Password should be more than 6 characters!'),
    confirmPassword: Yup.string()
      .required('Field is required!')
      .when('password', {
        is: (val) => !!(val && val.length > 0),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          "Passwords don't match!"
        ),
      }),
  });

  const onSubmit = ({ name, password, email }: TInitialValues): void => {
    dispatch(registrationRequest(name, email, password));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="c-registration__form">
          <FormControl
            control="input"
            type="text"
            label="Name"
            placeholder="Name"
            name="name"
          />
          <FormControl
            control="input"
            type="text"
            label="Email"
            placeholder="Email doesn't need verification"
            name="email"
          />
          <FormControl
            control="input"
            type="text"
            label="Password"
            placeholder="Password"
            name="password"
          />
          <FormControl
            control="input"
            type="text"
            label="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <div className="c-registration__btn-container">
            <button className="c-btn c-btn--primary" type="submit">
              Registration
            </button>
            <Link className="c-link c-registration__link" to="/">
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
