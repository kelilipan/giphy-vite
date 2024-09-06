import { ChangeEvent, FormEvent, useState } from "react";
import css from "./styles.module.css";
const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(keyword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.inputContainer}>
        <label htmlFor="keyword" className={css.hidden}>
          Search
        </label>
        <input
          value={keyword}
          onChange={handleChange}
          id="keyword"
          type="text"
          placeholder="Search Gif's"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBox;
