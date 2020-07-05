import React from 'react';
import { Formik, Form } from 'formik';
import FormControl from '../../Common/Form/FormControl';
import Overlay from '../../Common/Overlay';

const ModalAddUserInfo = ({ setShowModal }) => {
  const initialValues = {
    name: '',
    about: '',
    location: '',
    skills: '',
  };
  const validate = (value) => {
    const error = {};
    if (!value.name) {
      error.name = 'Required!';
    }
    if (!value.about) {
      error.about = 'Required!';
    }
    return error;
  };
  const onSubmit = (values) => console.log('Formik', values);
  return (
    <div className="c-modal-add-user-info">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <FormControl
              control="input"
              type="text"
              label="Name"
              name="name"
              placeholder="Name"
            />
            <FormControl
              control="textarea"
              type="text"
              label="About Me"
              name="about"
              placeholder="Type couple word about you self"
            />
            <FormControl
              control="input"
              type="text"
              label="Skills"
              name="skills"
              placeholder="Professional skills"
            />
            <FormControl
              control="input"
              type="text"
              label="Location"
              name="location"
              placeholder="Location"
            />
            <button className="c-btn" type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
      <Overlay onClick={() => setShowModal(false)} />
    </div>
  );
};

export default ModalAddUserInfo;
