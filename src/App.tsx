import "./App.css";
import Grids from "./components/Grids";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <>
      <Navbar />
      <main className="contents">
        <SearchBox />
        <Grids />
      </main>
    </>
  );
}

export default App;
