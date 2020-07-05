import React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import FormControl from '../../Common/Form/FormControl';
import Overlay from '../../Common/Overlay';

const ModalAddUserInfo = ({ setShowModal }) => {
  const initialValues = {
    name: '',
    about: '',
    location: '',
    skills: '',
    languages: '',
  };
  const validate = (value) => {
    const error = {};
    if (!value.name) {
      error.name = 'Required!';
    }
    if (!value.about) {
      error.about = 'Required!';
    }
    if (!value.location) {
      error.location = 'Required!';
    }
    if (!value.skills) {
      error.skills = 'Required!';
    }
    if (!value.languages) {
      error.languages = 'Required!';
    }
    return error;
  };
  const onSubmit = (values) => console.log('Formik', values);
  return (
    <>
      <div className="c-modal-add-user-info">
        <h3 className="c-title-tertiary c-modal-add-user-info__title">
          <FontAwesomeIcon
            className="c-modal-add-user-info__title-icon"
            icon={faUserEdit}
          />
          Personal information
        </h3>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="c-modal-add-user-info__form">
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
                placeholder="Please use comma separated values (eg. HTML,CSS,JavaScript)"
              />
              <FormControl
                control="input"
                type="text"
                label="Location"
                name="location"
                placeholder="Location"
              />
              <FormControl
                control="input"
                type="text"
                label="Languages"
                name="languages"
                placeholder="languages"
              />
              <div className="l-modal-add-user-info">
                <button
                  className="c-btn c-btn--secondary"
                  type="submit"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="c-btn c-btn--primary" type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Overlay opacity=".1" onClick={() => setShowModal(false)} />
    </>
  );
};

export default ModalAddUserInfo;
