import React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import FormControl from '../../../Common/Form/FormControl';
import { addPostRequest } from './../../../../redux/posts/postsActions';
import { useDispatch } from 'react-redux';

const AddPostForm: React.FC<TAddPostFormProps> = ({ setShowModal }) => {
  const [expandModal, setExpandModal] = React.useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    post: '' as string,
  };

  type TInitialValues = typeof initialValues;

  const onSubmit = (value: TInitialValues): void => {
    dispatch(addPostRequest(value.post));
    setShowModal(false);
  };

  const validationSchema = Yup.object({
    post: Yup.string().required('Field is required!'),
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

type TAddPostFormProps = {
  setShowModal: (value: boolean) => void;
};
