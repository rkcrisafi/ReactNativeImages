import APIUtil from './util/APIUtil';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_IMAGE = 'FETCH_IMAGE';

const receiveImages = (images) => {
  return {
    type: FETCH_IMAGES,
    images
  };
};

const receiveImage = (image) => {
  return {
    type: FETCH_IMAGE,
    image
  };
};

const fetchImages = () => dispatch => (
  APIUtil.fetchImages().then(images => dispatch(receiveImages(images)))
);

const fetchImage = (imageId) => dispatch => (
  APIUtil.fetchImage().then(image => dispatch(receiveImage(image)))
);
