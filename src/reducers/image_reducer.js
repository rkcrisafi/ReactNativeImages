import { FETCH_IMAGES } from '../actions/index';

const INITIAL_STATE = { total: null, hits: [] };

const ImageReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        total: action.images.total,
        hits: action.images.hits
      }
    default:
      return state;
  }
};

export default ImageReducer;
