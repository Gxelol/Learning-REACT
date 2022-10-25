import * as actionTypes from './action-types';

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  const timeOut = await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_END });
      r('RESOLVED!');
    }, 2000);
  });
};

const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  const timeOut = await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR });
      reject(new Error('THAT\'S BAD'));
    }, 2000);
  });

  return timeOut;
};

export const actionFactory = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payload) => dispatch({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch),
  };
};
