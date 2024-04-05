// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItemsMarkup(galleryItems);

function galleryItemsMarkup(item) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
                <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a></div>
                `
    }).join('');
};

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
    captionPosition: 'bottom',
    enableKeyboard: true,
    
});
