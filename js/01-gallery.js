import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const refs = {
  gallery: document.querySelector("gallery"),
};

const showGallery = () => {
  return galleryItems
    .map(
      (el) => `<img src="${el.preview}" alt="${el.description}" data-src="#" />`
    )
    .join("");
};
console.log(showGallery());

refs.gallery.innerHTML = showGallery();
