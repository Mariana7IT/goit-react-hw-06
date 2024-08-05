import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact, selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();
 const handleDelete = (id) => {
   dispatch(deleteContact(id));
 };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;