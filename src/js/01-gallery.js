// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryRef = document.querySelector('.gallery')
const createItems=(item)=>{
    return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
}
const markUp = galleryItems.map(createItems).join("")
galleryRef.insertAdjacentHTML("beforeend",markUp)
let lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay:250,captionPosition:"bottom" });