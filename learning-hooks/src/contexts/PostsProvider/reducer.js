import * as types from './types';

export const postsReducer = (state, action) => {
  switch(action.type) {
    case types.POSTS_LOADED: {
      return { ...state, posts: action.payload, loading: false };
    }
    case types.POSTS_LOADING: {
      return { ...state, loading: true };
    }
  }

  return {...state};
};