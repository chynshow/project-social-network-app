import React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import FormControl from '../../../../Common/Form/FormControl';
import { useDispatch } from 'react-redux';
import { updateCommentsRequest } from './../../../../../redux/posts/postsActions';

type PropTypes = {
  _id: string;
  setShowModal: (value: boolean) => void;
};

const AddCommentForm: React.FC<PropTypes> = ({ _id, setShowModal }) => {
  const dispatch = useDispatch();

  const initialValues = {
    comment: '',
  };

  type InitialValueTypes = typeof initialValues;

  const onSubmit = (value: InitialValueTypes): void => {
    dispatch(updateCommentsRequest(_id, value.comment));
    setShowModal(false);
  };

  const validationSchema = Yup.object({
    comment: Yup.string().required('Field is required!'),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
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
