export interface PostTypes {
  _id: string;
  text: string;
  name: string;
  avatar: string;
  likes: [Like];
  createdAt: Date;
  comments: [CommentType];
}

export type CommentType = {
  _id: string;
  text: string;
  avatar: string;
  name: string;
};

export type Like = {
  user: string;
  _id: string;
};

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
export const UPDATE_LIKES = 'UPDATE_LIKES';
export const CLEAR_POSTS = 'CLEAR_POSTS';

export type getPosts = {
  type: typeof GET_POSTS;
  payload: Array<PostTypes>;
};

export type addPost = {
  type: typeof ADD_POST;
  payload: PostTypes;
};

export type deletePost = {
  type: typeof DELETE_POST;
  payload: PostTypes;
};

export type updateComments = {
  type: typeof UPDATE_COMMENTS;
  payload: {
    postId: string;
    comments: Array<CommentType>;
  };
};

export type updateLikes = {
  type: typeof UPDATE_LIKES;
  payload: { likes: [{ user: string }]; postId: string };
};

export type getPostsResponce = {
  posts: Array<PostTypes>;
};

export type getPostResponce = {
  post: PostTypes;
};

export type Posts =
  | getPosts
  | addPost
  | deletePost
  | updateComments
  | updateLikes;
