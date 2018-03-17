const API_KEY = '8377980-115b5a0ad394c8c37a6cbf137';
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;

export const fetchImages = (query, page = 1) => {
  return fetch(`${URL}${encodeURIComponent(query)}&page=${page}`)
  .then(response => response.json());
};
