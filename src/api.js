import axios from "axios";

const searchImages = async (text) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 4l08lVyRPjlO1abyrGOUL7DZcPosN4KV6W68Q6iUD7s",
    },
    params: {
      query: text,
    },
  });
  return response.data.results;
};

export default searchImages;
