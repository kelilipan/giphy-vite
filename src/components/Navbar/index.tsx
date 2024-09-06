import css from "./styles.module.css";
const Navbar = ({ onChange }: any) => {
  const handleClick = (e: any, pathname: string) => {
    e.preventDefault();
    onChange(pathname);
  };
  return (
    <div className={css.container}>
      <a onClick={(e) => handleClick(e, "/")} href="/">
        Home
      </a>
      <a onClick={(e) => handleClick(e, "/trending")} href="/trending">
        Trending
      </a>
    </div>
  );
};

export default Navbar;
