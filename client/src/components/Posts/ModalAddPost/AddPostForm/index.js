import React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import FormControl from '../../../Common/Form/FormControl';

const AddPostForm = () => {
  const [expandModal, setExpandModal] = React.useState(false);
  const initialValues = {
    post: '',
  };

  const onSubmit = (value) => {
    console.log(value);
  };

  const validate = (value) => {
    const errors = {};
    if (!value.post) {
      errors.post = 'Require!';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      validateOnBlur={false}
    >
      {() => (
        <Form>
          <FormControl
            control="textarea"
            type="text"
            name="post"
            placeholder="New post"
            className={
              expandModal
                ? 'c-modal-add-message__text-area c-posts-modal-add-post__text-area--expand'
                : 'c-modal-add-message__text-area'
            }
          />
          <div className="c-modal-add-message__action-panel c-posts-modal-add-post__action-panel">
            <button
              className="c-btn c-btn--primary"
              type="button"
              onClick={() => setExpandModal(!expandModal)}
            >
              <FontAwesomeIcon icon={faExpandAlt} />
            </button>
            <button className="c-btn c-btn--primary" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddPostForm;
