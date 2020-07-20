export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
export const UPDATE_LIKES = 'UPDATE_LIKES';
export const CLEAR_POSTS = 'CLEAR_POSTS';

export const getPostsAC = (posts: Array<TPost>): TGetPosts => ({
  type: GET_POSTS,
  payload: posts,
});

export const addPostAC = (post: TPost): TAddPost => ({
  type: ADD_POST,
  payload: post,
});

export const deletePostAC = (post: TPost): TDeletePost => ({
  type: DELETE_POST,
  payload: post,
});

export const clearPostsAC = (): TClearPosts => ({
  type: CLEAR_POSTS,
});

export const updateLikesAC = (
  postId: string,
  likes: Array<TLike>
): TUpdateLikes => ({
  type: UPDATE_LIKES,
  payload: { likes, postId },
});

export const updateCommentsAC = (
  postId: string,
  comments: Array<TComment>
): TUpdateComments => ({
  type: UPDATE_COMMENTS,
  payload: {
    postId,
    comments,
  },
});

export type TPost = {
  _id: string;
  name: string;
  text: string;
  avatar: string;
  likes: Array<TLike>;
  createdAt: Date;
  comments: Array<TComment>;
};

export type TComment = {
  _id: string;
  text: string;
  avatar: string;
  name: string;
};

export type TLike = {
  user: string;
  _id: string;
};

export type TGetPosts = {
  type: typeof GET_POSTS;
  payload: Array<TPost>;
};

export type TAddPost = {
  type: typeof ADD_POST;
  payload: TPost;
};

export type TDeletePost = {
  type: typeof DELETE_POST;
  payload: TPost;
};

export type TClearPosts = {
  type: typeof CLEAR_POSTS;
};

export type TUpdateComments = {
  type: typeof UPDATE_COMMENTS;
  payload: {
    postId: string;
    comments: Array<TComment>;
  };
};

export type TUpdateLikes = {
  type: typeof UPDATE_LIKES;
  payload: { likes: Array<TLike>; postId: string };
};

export type TPostActions =
  | TGetPosts
  | TAddPost
  | TDeletePost
  | TUpdateComments
  | TUpdateLikes
  | TClearPosts;
