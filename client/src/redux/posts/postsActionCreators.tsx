import {
  getPosts,
  GET_POSTS,
  PostTypes,
  addPost,
  ADD_POST,
  deletePost,
  DELETE_POST,
  updateLikes,
  UPDATE_LIKES,
} from './postsTypes';

export const getPostsAC = (posts: Array<PostTypes>): getPosts => ({
  type: GET_POSTS,
  payload: posts,
});

export const addPostAC = (post: PostTypes): addPost => ({
  type: ADD_POST,
  payload: post,
});

export const deletePostAC = (post: PostTypes): deletePost => ({
  type: DELETE_POST,
  payload: post,
});

export const updateLikesAC = (
  postId: string,
  likes: [{ user: string }]
): updateLikes => ({
  type: UPDATE_LIKES,
  payload: { likes, postId },
});
