import React from "react";

const ImageCard = ({ info }) => {
  console.log(info.urls);
  const { thumb } = info.urls;
  return (
    <div>
      <img
        style={{ padding: "10px", borderRadius: "50px" }}
        width="300px"
        height="300px"
        src={thumb}
        alt="searchImage"
      />
    </div>
  );
};

export default ImageCard;
