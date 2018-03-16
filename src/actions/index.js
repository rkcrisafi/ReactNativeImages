import * as APIUtil from '../APIUtil';

export const FETCH_IMAGES = 'FETCH_IMAGES';

const receiveImages = (imgs) => {
  let images = { total: imgs.total,
    hits: imgs.hits};
  return {
    type: FETCH_IMAGES,
    images
  };
};

export const fetchImages = (query, page = 1) => dispatch => (
  APIUtil.fetchImages(query, page)
  .then(images => {
    dispatch(receiveImages(images));
    // return images;
  })
);
