import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" loading="lazy">
      </a>
    </li>
  `;
}

function renderGalleryItems() {
  const itemsMarkup = galleryItems.map(item => createGalleryItemMarkup(item)).join('');
  galleryList.insertAdjacentHTML('beforeend', itemsMarkup);
}

renderGalleryItems();

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
