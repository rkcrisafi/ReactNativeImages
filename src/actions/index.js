import * as APIUtil from '../APIUtil';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const CLEAR_IMAGES = 'CLEAR_IMAGES';

const receiveImages = (imgs) => {
  let images = { total: imgs.total,
    hits: imgs.hits};

  return {
    type: FETCH_IMAGES,
    images
  };
};

export const clearImages = () => {
  return {
    type: CLEAR_IMAGES
  };
};

export const fetchImages = (query, page) => dispatch => (
  APIUtil.fetchImages(query, page)
  .then(images => dispatch(receiveImages(images)))
);
