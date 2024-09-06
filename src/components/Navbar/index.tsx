import css from "./styles.module.css";
const Navbar = () => {
  return (
    <div className={css.container}>
      <a href="/">Home</a>
      <a href="/trending">Trending</a>
    </div>
  );
};

export default Navbar;
