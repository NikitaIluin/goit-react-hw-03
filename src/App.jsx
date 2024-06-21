import { useState, useEffect } from "react";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox"
import { contactList } from "./components/helper";
 const [searchValue, setSearchValue] = useState("");
function App() {
  const savedContactList = JSON.parse(
    window.localStorage.getItem("saved-contacts")
  );
  const [contacts, setContact] = useState(savedContactList || contactList);

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchValue, setSearchValue] = useState(" ");

  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const delContact = (contactId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((el) => {
        return el.id !== contactId;
      });
    });
  };

  const filtered = contacts.filter((elem) => {
    return elem.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div>
        <ContactForm onSubmit={addContact} contacts={contacts} />
        <SearchBox value={searchValue} onChange={setSearchValue} />
      </div>
      <ContactList contacts={filtered} onDelete={delContact} />
    </>
  );
}

export default App;