import getImagesByQuery from './js/pixabay-api';
import createGallery from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', imageSearch);

function imageSearch(e) {
  e.preventDefault();
  const input = e.currentTarget;

  const queryValue = input.elements['search-text'].value.toLowerCase();
  getImagesByQuery(queryValue)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.error({
          message: `Sorry, there are no images matching your ${queryValue}. Please try again!`,
        });
      }
      return createGallery(data.hits);
    })
    .catch(err => console.log('error catch', err));

  form.reset();
}
