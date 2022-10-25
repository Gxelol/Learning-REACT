import * as actionTypes from './action-types';

export const actionFactory = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
  };
};
