const API_KEY = '8377980-115b5a0ad394c8c37a6cbf137';
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;

//&page=${pageNumber}

export const fetchImages = (query, page) => {
  console.log(`${URL}${encodeURIComponent(query)}&page=${page}`);
  return fetch(`${URL}${encodeURIComponent(query)}&page=${page}`)
  .then(response => response.json());
};
