import magnifyingImg from "../../assets/images/magnifying.png";
import "./input-search.scss";

const InputSearch = () => {
  return (
    <div className="inputSearch__container">
      <img src={magnifyingImg} />
      <input
        className="inputSearch__item"
        type="search"
        placeholder="Search for something"
      />
    </div>
  );
};
export default InputSearch;
