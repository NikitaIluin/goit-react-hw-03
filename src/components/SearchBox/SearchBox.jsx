import { Formik, Form, Field } from 'formik';
// import clsx from 'clsx';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {

  return (
 
   <>
 
    <label htmlFor="search">Find contacts by name</label>
 
    <input
 
     className={styles.searchField}
 
     type="text"
 
     name="search"
 
     id="search"
 
     placeholder="Enter name"
 
     value={value}
 
     onChange={(e) => onChange(e.target.value)}
 
    />
 
   </>
 
 
 
  );
 
 };


export default SearchBox;