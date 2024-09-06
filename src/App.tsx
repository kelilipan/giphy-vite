import { useState } from "react";
import { searchGif } from "./api/giphy";
import "./App.css";
import Grids from "./components/Grids";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

function App() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState("/");

  const handleSearchGif = (keyword: string) => {
    //@todo: types
    setLoading(true);
    searchGif(keyword)
      .then((res) => {
        setResult(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderPage = () => {
    switch (activePage) {
      case "/":
        return (
          <main className="contents">
            <SearchBox onSearch={handleSearchGif} />
            {loading ? "Loading..." : <Grids data={result} />}
          </main>
        );
      case "/trending":
        return <>Trending</>;
      default:
        return <>Not found</>;
        break;
    }
  };

  return (
    <>
      <Navbar onChange={setActivePage} />
      {renderPage()}
    </>
  );
}

export default App;
