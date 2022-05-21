import { galleryItems } from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
};

const renderGallery = () =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
            </a>`
    )
    .join("");

refs.gallery.insertAdjacentHTML("afterbegin", renderGallery());

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
