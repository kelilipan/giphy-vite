import { useState } from "react";
import { searchGif } from "./api/giphy";
import "./App.css";
import Grids from "./components/Grids";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

function App() {
  const [result, setResult] = useState([]);
  const handleSearchGif = (keyword: string) => {
    //@todo: types
    searchGif(keyword).then((res) => {
      setResult(res.data.data);
    });
  };

  return (
    <>
      <Navbar />
      <main className="contents">
        <SearchBox onSearch={handleSearchGif} />
        <Grids data={result} />
      </main>
    </>
  );
}

export default App;
