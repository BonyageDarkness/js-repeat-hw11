import axios from 'axios';

function getImagesByQuery(query) {
  const API_KEY = '44822574-4b43621c9303530917b2f490d';
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => {
      return response.data;
    });
}

export default getImagesByQuery;
