import React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import FormControl from '../../Common/Form/FormControl';
import Overlay from '../../Common/Overlay';
import * as Yup from 'yup';
import { updateProfileRequest } from './../../../redux/profile/profileActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux';
import { UpdateProfile } from './../../../redux/profile/profileTypes';

interface PropTypes {
  setShowModal: (value: boolean) => void;
}

const ModalAddUserInfo: React.FC<PropTypes> = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: AppState) => state.profile.profile);

  const initialValues: UpdateProfile = {
    name: profile?.name,
    profession: profile?.profession,
    position: profile?.position,
    about: profile?.about,
    location: profile?.location,
    skills: profile?.skills,
    languages: profile?.languages,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Field is required!'),
    profession: Yup.string(),
    position: Yup.string(),
    about: Yup.string(),
    location: Yup.string(),
    skills: Yup.string(),
    languages: Yup.string(),
  });

  const onSubmit = (values: UpdateProfile) => {
    dispatch(updateProfileRequest(values));
    setShowModal(false);
  };
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
                control="input"
                type="text"
                label="Profession"
                name="profession"
                placeholder="Profession"
              />
              <FormControl
                control="input"
                type="text"
                label="Position"
                name="position"
                placeholder="Position"
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
