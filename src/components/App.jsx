import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {
  Wrapper,
  Heading,
  ContactsTitle,
  FindContactByName,
} from './App.styled';

class App extends Component {
  state = {
    contacts: [],

    name: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <Wrapper>
        <div>
          <Heading>Phonebook</Heading>
          <ContactForm onAddContact={this.handleAddContact} />
          <ContactsTitle>Contacts</ContactsTitle>
          <FindContactByName>Find contacts by name</FindContactByName>
          <ContactList
            contacts={this.state.contacts}
            onDelete={this.deleteContacts}
          />
        </div>
      </Wrapper>
    );
  }
}

export default App;
