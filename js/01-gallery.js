import { galleryItems } from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
};

const renderGallery = () =>
  galleryItems
    .map(
      ({ preview, original, description }) => `  
      <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
        </a>
      </div>`
    )
    .join("");

refs.gallery.insertAdjacentHTML("afterbegin", renderGallery());

const onClickOpenModal = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();
  createAndShowModalImg(e.target.dataset.source);
};

refs.gallery.addEventListener("click", onClickOpenModal);

const createAndShowModalImg = (src) => {
  const lightBox = basicLightbox.create(
    `
    <img src="${src}" width="800" height="600">
`
  );
  lightBox.show();
};

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     console.log("qwrP");
//   }
// });

// lightBox.show(() => console.log("lightbox now visible"));
// instance.close(() => console.log("lightbox not visible anymore"));
