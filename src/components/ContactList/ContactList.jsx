import { nanoid } from "nanoid";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css";

const Contact = ({element:{ id, name, number}, onDelete }) =>  {
  return (
    <ul className={css.list}>
      {contacts.map((el) => {
        return (
          <div className={css.itemContact}>

          <p className={css.itemContactName}>
       
           <b>{name}</b>
       
          </p>
       
       
       
          <p className={css.itemContactName}>
       
           <b>{number}</b>
       
          </p>
       
          <button type='button' onClick={handleClick}>
       
           ❌ Delete
       
          </button>
       
         </div>
        );
      })}
    </ul>
  );
};

export default ContactList;