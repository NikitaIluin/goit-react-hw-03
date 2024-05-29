import css from "./SearchBox.module.css";

export const SearchBox = ({ onChange }) => {
  return (
    <form className={css.form}>
      <label>Find contact by name</label>
      <input type="text" onChange={(evt) => onChange(evt.target.value)} />
    </form>
  );
};

export default SearchBox;