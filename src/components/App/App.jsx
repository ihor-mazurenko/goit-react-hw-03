import { useState, useEffect } from 'react'
import initialContacts from '../../contacts.json'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedObject = window.localStorage.getItem('contactList');
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return initialContacts;
  });

  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    })
  }
  
  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    })
  }

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
   useEffect(() => {
    window.localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  )
};

