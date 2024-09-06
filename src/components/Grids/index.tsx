import copy from "copy-to-clipboard";
import css from "./styles.module.css";
interface Grids {
  data: any;
}
const Grids = ({ data }: Grids) => {
  const handleClickShare = (url: string) => {
    copy(url);
  };

  return (
    <div className={css.container}>
      {data.map((item: any) => (
        <div key={item.id}>
          <img src={item.images["original"].webp} width="100%" height="auto" />
          <span>{item.username}</span>
          <button onClick={() => handleClickShare(item.url)}>Share</button>
        </div>
      ))}
    </div>
  );
};

export default Grids;
