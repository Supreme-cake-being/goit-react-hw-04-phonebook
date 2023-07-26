import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormBox, Label, Input, Button } from './Form.styled';

const Form = ({ onSubmit }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    e.target.reset();

    onSubmit({ id: nanoid(), name, number });
  };

  return (
    <FormBox onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameId}
        onChange={handleChange}
      />

      <Label htmlFor={numberId}>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={numberId}
        onChange={handleChange}
      />

      <Button type="submit">Add contact</Button>
    </FormBox>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
