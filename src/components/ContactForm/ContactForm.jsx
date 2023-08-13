import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledInput, StyledButton } from './ContactForm.styled.js';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleInputChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
    };

    this.props.onAddContact(newContact);

    this.setState({ name: '' });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

export default ContactForm;
