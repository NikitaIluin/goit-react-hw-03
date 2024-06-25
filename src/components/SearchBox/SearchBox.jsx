import css from "./SearchBox.module.css"
export const SearchBox = ({value, onChange})=>{
    return(
        <div>
            <p className={css.title}>Find contacts by name</p>
            <input type="text" className={css.in} value={value} onChange={onChange}/>
            </div>
        
    );
}
export default SearchBox;