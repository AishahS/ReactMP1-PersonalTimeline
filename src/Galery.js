import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState, useCallback } from "react";

export const Galery = (props) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setPhotoIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <>
      <h1 className="main-text" style={{ fontSize: 48 }}>
        Gallery:
      </h1>

      <Gallery photos={props.photos} onClick={openLightbox} direction="row" />

      {isOpen && (
        <Lightbox
          mainSrc={props.photos[photoIndex].src}
          nextSrc={props.photos[(photoIndex + 1) % props.photos.length].src}
          prevSrc={
            props.photos[
              (photoIndex + props.photos.length - 1) % props.photos.length
            ].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.photos.length - 1) % props.photos.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.photos.length)
          }
        />
      )}
    </>
  );
};
