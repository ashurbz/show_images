import SearchComponent from "./components/SearchComponent";
import searchImages from "./api";
import ImageCardList from "../src/components/ImageCardList";
import { useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (text) => {
    const results = await searchImages(text);

    setSearchResults(results);
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <ImageCardList imageInfo={searchResults} />
    </div>
  );
};

export default App;
