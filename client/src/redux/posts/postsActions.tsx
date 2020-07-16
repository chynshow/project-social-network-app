import { BaseThunk } from './../';
import { Posts, getPostsResponce, getPostResponce } from './postsTypes';
import { instance } from '../../utils/axiosUtils';
import {
  getPostsAC,
  addPostAC,
  deletePostAC,
  updateLikesAC,
  updateCommentsAC,
} from './postsActionCreators';
import { showAlert } from '../alert/alertActions';

export const getPostsRequest = (): BaseThunk<Posts> => async (dispatch) => {
  try {
    const res = await instance.get<getPostsResponce>('/api/v1/posts');
    dispatch(getPostsAC(res.data.posts));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getPostsByUserIdRequest = (
  userId: string
): BaseThunk<Posts> => async (dispatch) => {
  try {
    const res = await instance.get<getPostsResponce>(`/api/v1/posts/${userId}`);
    dispatch(getPostsAC(res.data.posts));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const addPostRequest = (postText: string): BaseThunk<Posts> => async (
  dispatch
) => {
  const body = JSON.stringify({ postText });

  try {
    const res = await instance.post<getPostResponce>('/api/v1/posts', body);

    dispatch(addPostAC(res.data.post));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const deletePostRequest = (postId: string): BaseThunk<Posts> => async (
  dispatch
) => {
  try {
    const res = await instance.delete(`/api/v1/posts/${postId}`);
    dispatch(deletePostAC(res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const updateLikesRequest = (postId: string): BaseThunk<Posts> => async (
  dispatch
) => {
  try {
    // change like url to likes

    const res = await instance.put(`/api/v1/posts/like/${postId}`);
    dispatch(updateLikesAC(postId, res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const updateCommentsRequest = (
  postId: string,
  comment: string
): BaseThunk<Posts> => async (dispatch) => {
  const body = JSON.stringify({ comment });
  try {
    const res = await instance.put(`/api/v1/posts/comment/${postId}`, body);
    dispatch(updateCommentsAC(postId, res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const delCommentRequest = (
  postId: string,
  commentId: string
): BaseThunk<Posts> => async (dispatch) => {
  try {
    const res = await instance.delete(
      `/api/v1/posts/comment/${postId}/${commentId}`
    );
    dispatch(updateCommentsAC(postId, res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};
