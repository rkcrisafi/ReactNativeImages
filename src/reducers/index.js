import { combineReducers } from 'redux';
import ImageReducer from './image_reducer';
import SelectionReducer from './SelectionReducer';
// import LibraryReducer from './LibraryReducer';
// import SelectionReducer from './SelectionReducer';

export default combineReducers({
  images: {},
  selectedImageId: null
});
