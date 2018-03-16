import * as APIUtil from '../APIUtil';

export const FETCH_IMAGES = 'FETCH_IMAGES';

const receiveImages = (imgs) => {
  let images = { total: imgs.total,
    hits: imgs.hits};
  debugger
  return {
    type: FETCH_IMAGES,
    images
  };
};

export const fetchImages = (query) => dispatch => (
  APIUtil.fetchImages(query)
  .then(images => dispatch(receiveImages(images)))
);
