import React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import FormControl from '../../Common/Form/FormControl';
import Overlay from '../../Common/Overlay';
import * as Yup from 'yup';

interface ModalAddUserInfoPropTypes {
  setShowModal: (value: boolean) => void;
}

const ModalAddUserInfo: React.FC<ModalAddUserInfoPropTypes> = ({
  setShowModal,
}) => {
  interface InitialValuesPropTypes {
    name: string;
    about: string;
    location: string;
    skills: string;
    languages: string;
  }

  const initialValues: InitialValuesPropTypes = {
    name: '',
    about: '',
    location: '',
    skills: '',
    languages: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Field is required!'),
    about: Yup.string().required('Field is required!'),
    location: Yup.string().required('Field is required!'),
    skills: Yup.string().required('Field is required!'),
    languages: Yup.string().required('Field is required!'),
  });

  const onSubmit = (values: InitialValuesPropTypes) =>
    console.log('Formik', values);
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
          onSubmit={onSubmit}
          validationSchema={validationSchema}
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
      <Overlay
        zIndex={2}
        background="#fff"
        opacity={0.1}
        onClick={() => setShowModal(false)}
      />
    </>
  );
};

export default ModalAddUserInfo;
