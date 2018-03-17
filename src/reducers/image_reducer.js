import { FETCH_IMAGES, CLEAR_IMAGES } from '../actions/index';

const INITIAL_STATE = { total: null, hits: [] };

const ImageReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_IMAGES:
      let newState = { ...state };
      newState.total = action.images.total;
      newState.hits = newState.hits.concat(action.images.hits);
      return newState;
    case CLEAR_IMAGES:
      return { total: null, hits: [] };
    default:
      return state;
  }
};

export default ImageReducer;
