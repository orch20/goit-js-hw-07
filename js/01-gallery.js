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
  const str = `
    <img src="${src}" width="800" height="600">
`;
  const lightBox = basicLightbox.create(str, {
    onShow: () => {
      addEventListener(
        "keydown",
        (closeEvent) => {
          if (closeEvent.code === "Escape") {
            console.log(closeEvent.code);
            lightBox.close();
          }
        },
        { once: true }
      );
    },
  });
  lightBox.show();
};
