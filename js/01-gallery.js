import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
let currentLightbox = null;

function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" loading="lazy">
      </a>
    </li>
  `;
}

function renderGalleryItems() {
  const itemsMarkup = galleryItems.map(item => createGalleryItemMarkup(item)).join('');
  galleryList.insertAdjacentHTML('beforeend', itemsMarkup);
}

function handleGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageSrc = event.target.closest('a').href;
  currentLightbox = basicLightbox.create(`
    <img src="${largeImageSrc}" alt="" loading="lazy">
  `);

  currentLightbox.show();
  document.addEventListener('keydown', handleDocumentKeyDown);
}

function handleDocumentKeyDown(event) {
  if (event.code === 'Escape') {
    currentLightbox.close();
    document.removeEventListener('keydown', handleDocumentKeyDown);
  }
}

renderGalleryItems();
galleryList.addEventListener('click', handleGalleryItemClick);

console.log(galleryItems);
