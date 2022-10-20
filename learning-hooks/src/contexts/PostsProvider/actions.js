import * as types from './types'

export const loadPosts = async (dispatch) => {
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts'); // Give a look in AbortController
  const posts = await postsRaw.json();
  
  return () => dispatch({ type: types.POSTS_LOADED, payload: posts })
};