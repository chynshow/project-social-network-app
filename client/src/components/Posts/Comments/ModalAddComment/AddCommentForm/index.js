import React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import FormControl from '../../../../Common/Form/FormControl';

const AddCommentForm = () => {
  const initialValues = {
    comment: '',
  };

  const onSubmit = (value) => {
    console.log('AddCommetModal', value);
  };

  const validate = (value) => {
    const errors = {};
    if (!value.comment) {
      errors.comment = 'Require!';
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
            name="comment"
            placeholder="New comment"
            className="c-modal-add-message__text-area"
          />
          <div className="c-modal-add-message__action-panel c-comments-modal-add-comment__action-panel">
            <button className="c-btn c-btn--primary" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddCommentForm;
