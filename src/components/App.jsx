import { useState, useEffect } from 'react';

import { Box, Title, Subtitle } from './App.styled';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const isInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) return alert(`${contact.name} is already in contacts`);

    setContacts([...contacts, contact]);
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts([...newContacts]);
  };

  const handleFilter = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />

      <Subtitle>Contacts</Subtitle>
      <Filter filterValue={filter} onFilter={handleFilter}></Filter>
      <Contacts contacts={filteredContacts} handleClick={deleteContact} />
    </Box>
  );
};

export default App;
