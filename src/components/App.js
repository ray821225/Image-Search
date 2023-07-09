import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "../components/ImageList";
import searchImages from "../api/unSplash";

const App = () => {
  const [images, setImages] = useState();

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
