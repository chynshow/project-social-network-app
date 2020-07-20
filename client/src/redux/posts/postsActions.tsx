import { BaseThunk } from './../';
import { TPostActions, TPost, TLike, TComment } from './postsActionCreators';
import { instance } from '../../utils/axiosUtils';
import {
  getPostsAC,
  addPostAC,
  deletePostAC,
  updateLikesAC,
  updateCommentsAC,
} from './postsActionCreators';
import { showAlert } from '../alert/alertActions';

export const getPostsRequest = (): BaseThunk<any> => async (dispatch) => {
  try {
    const res = await instance.get<TGetPostsResponce>('/api/v1/posts');
    dispatch(getPostsAC(res.data.posts));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getPostsByUserIdRequest = (
  userId: string
): BaseThunk<TPostActions> => async (dispatch) => {
  try {
    const res = await instance.get<TGetPostsResponce>(
      `/api/v1/posts/${userId}`
    );
    dispatch(getPostsAC(res.data.posts));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const addPostRequest = (
  postText: string
): BaseThunk<TPostActions> => async (dispatch) => {
  const body = JSON.stringify({ postText });

  try {
    const res = await instance.post<TPost>('/api/v1/posts', body);

    dispatch(addPostAC(res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const deletePostRequest = (
  postId: string
): BaseThunk<TPostActions> => async (dispatch) => {
  try {
    const res = await instance.delete<TPost>(`/api/v1/posts/${postId}`);
    dispatch(deletePostAC(res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const updateLikesRequest = (
  postId: string
): BaseThunk<TPostActions> => async (dispatch) => {
  try {
    const res = await instance.put<Array<TLike>>(
      `/api/v1/posts/like/${postId}`
    );
    dispatch(updateLikesAC(postId, res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const updateCommentsRequest = (
  postId: string,
  comment: string
): BaseThunk<TPostActions> => async (dispatch) => {
  const body = JSON.stringify({ comment });
  try {
    const res = await instance.put<Array<TComment>>(
      `/api/v1/posts/comment/${postId}`,
      body
    );
    dispatch(updateCommentsAC(postId, res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const delCommentRequest = (
  postId: string,
  commentId: string
): BaseThunk<TPostActions> => async (dispatch) => {
  try {
    const res = await instance.delete<Array<TComment>>(
      `/api/v1/posts/comment/${postId}/${commentId}`
    );
    dispatch(updateCommentsAC(postId, res.data));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

type TGetPostsResponce = {
  posts: Array<TPost>;
};
