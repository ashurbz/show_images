import React from "react";
import ImageCard from "./ImageCard";

const ImageCardList = ({ imageInfo }) => {
  console.log(imageInfo);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
      {imageInfo.map((image, index) => {
        return <ImageCard info={image} key={index} />;
      })}
    </div>
  );
};

export default ImageCardList;
