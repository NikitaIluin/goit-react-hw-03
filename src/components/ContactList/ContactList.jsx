import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
export const ContactList = ({contacts, onDelete})=>{
    return (
        <ul className={css.li}>
            {contacts.map((contact)=>{
            return (
                <li key={contact.id}>
                    <Contact data={contact} onDelete={onDelete}/>
                </li>);
})}
        </ul>
    );
}
export default ContactList;