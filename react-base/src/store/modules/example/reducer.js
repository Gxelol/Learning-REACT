import * as types from '../types';

const initialState = {
  clickedButton: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS: {
      console.log('success');
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }

    case types.CLICKED_BUTTON_FAILURE: {
      console.log('error');
      return state;
    }

    case types.CLICKED_BUTTON_REQUEST: {
      console.log('Doing the request');
      return state;
    }

    default: {
      return state;
    }
  }
}
