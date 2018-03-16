import { combineReducers } from 'redux';
import ImageReducer from './image_reducer';

export default combineReducers({
  images: ImageReducer,
  selectedImageId: null
});
