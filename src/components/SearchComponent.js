import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: "50%", padding: "10px" }}
            type="text"
            placeholder="Search for Images"
            onChange={handleOnChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
