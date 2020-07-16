import {
  GET_POSTS,
  ADD_POST,
  UPDATE_LIKES,
  UPDATE_COMMENTS,
  CLEAR_POSTS,
  PostTypes,
  Posts,
  DELETE_POST,
} from './postsTypes';

const initialState = {
  posts: [] as Array<PostTypes>,
  loading: true,
};

type InitialState = typeof initialState;

export default (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts] as Array<PostTypes>,
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter((post) => post._id !== action.payload._id),
        ],
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post: PostTypes) =>
          post._id === action.payload.postId
            ? { ...post, likes: action.payload.likes }
            : post
        ),
        loading: false,
      };
    case UPDATE_COMMENTS:
      return {
        ...state,
        posts: state.posts.map((post: PostTypes) =>
          post._id === action.payload.postId
            ? {
                ...post,
                comments: action.payload.comments,
              }
            : post
        ),
        loading: false,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: [],
        loading: false,
      };
    default:
      return state;
  }
};
