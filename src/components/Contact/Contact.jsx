import { FaSquarePhone } from "react-icons/fa6";;
import { BiSolidContact } from "react-icons/bi";
import css from "./Contact.module.css"
export const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
      <div className={css.container}>
        <div className={css.box}>
          <p className={css.part}>
            <FaSquarePhone className={css.icon}/>
        {name}
          </p>
          <p className={css.part}>
          <BiSolidContact className={css.icon}/>
           {number}
          </p>
        </div>
        <button className={css.button} onClick={()=>onDelete(id)}>
          Delete
        </button>
      </div>
    );
  };
  export default Contact;