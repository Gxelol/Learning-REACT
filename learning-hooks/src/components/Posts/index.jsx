import { useContext, useEffect, useRef } from 'react';
import { CounterContext } from '../../contexts/ExampleProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { incrementCounter } from '../../contexts/ExampleProvider/action'
import { decrementCounter } from '../../contexts/ExampleProvider/action'

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const {postsState, postsDispatch} = postsContext;

  const counterContext = useContext(CounterContext);
  const {counterState, counterDispatch} = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch)
      .then((dispatch) => {
        if (isMounted.current) {
          dispatch();
        }
      });

      return () => {
        isMounted.current = false;
      }
  }, [postsDispatch]);

  return (
    <>
    <button onClick={() => incrementCounter(counterDispatch)}>Counter +: {counterState.counter}</button>
    <button onClick={() => decrementCounter(counterDispatch)}>Counter -: {counterState.counter}</button>
    <h1>Hello World!</h1>
    {postsState.loading && (
      <p>Loading...</p>
    )}

    {postsState.posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </>
  )
}
