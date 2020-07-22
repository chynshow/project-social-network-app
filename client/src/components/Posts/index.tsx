import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';
import ModalAddPost from './ModalAddPost';
import Tooltip from '../Common/Tooltip';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux';
import { getPostsRequest } from './../../redux/posts/postsActions';
import { useParams } from 'react-router-dom';
import { getPostsByUserIdRequest } from './../../redux/posts/postsActions';
import { clearPostsAC } from './../../redux/posts/postsActionCreators';
import Loader from '../Common/Loader';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { profile } from 'console';

const Posts: React.FC<{}> = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const { loading, posts } = useSelector((state: AppState) => state.posts);
  const dispatch = useDispatch();
  const { userId } = useParams<{ userId: string }>();

  React.useEffect(() => {
    if (userId) {
      dispatch(getPostsByUserIdRequest(userId));
    } else if (!userId) {
      dispatch(getPostsRequest());
    }
    return () => {
      dispatch(clearPostsAC());
    };
  }, []);

  // console.log(!posts.length, loading);

  return (
    <div className="c-posts">
      {loading && !posts.length ? (
        <Loader />
      ) : (
        <>
          <div className="c-posts__header">
            <h3 className="c-title-secondary c-posts__title">
              Posts
              <FontAwesomeIcon
                className="c-icon c-posts__title-icon"
                icon={faCommentAlt}
              />
            </h3>
            {!userId && (
              <Tooltip label="Add post">
                <button
                  type="button"
                  className="c-btn c-posts__add-post-btn"
                  onClick={() => setShowModal(!showModal)}
                >
                  <FontAwesomeIcon className="c-icon" icon={faPlus} />
                </button>
              </Tooltip>
            )}
          </div>
          <TransitionGroup>
            {showModal && (
              <CSSTransition
                in={showModal}
                timeout={200}
                classNames="c-modal-add-message"
              >
                <ModalAddPost setShowModal={setShowModal} />
              </CSSTransition>
            )}
          </TransitionGroup>
          <div className="c-posts__items-container">
            {!posts.length && (
              <p className="c-posts__info">You don't have any posts yet!</p>
            )}
            {posts.map((p) => (
              <Post
                key={p._id}
                _id={p._id}
                name={p.name}
                avatar={p.avatar}
                createdAt={p.createdAt}
                text={p.text}
                likes={p.likes}
                comments={p.comments}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
