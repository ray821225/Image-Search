import React from "react";
import "../components/ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images: imagesProps }) => {
  const images = imagesProps?.map((image, index) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
