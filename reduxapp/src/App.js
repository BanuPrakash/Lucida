import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { useState } from 'react';

function App(props) {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  function handleSubmit() {
    props.addContact({
      email,
      name
    })
  }
  return (
    <div className="App">
      <button onClick={props.clearContact} type='button'>Clear</button>
      {
        props.contactList.map(contact => <ContactView key={contact.email} contact={contact} delEvt={props.removeContact} />)
      }
      <form>
        Email <input type="text" onChange={evt => setEmail(evt.target.value)} /> <br />
        Name: <input type="text" onChange={evt => setName(evt.target.value)} /> <br />
        <button onClick={handleSubmit} type='button'>Add Contact</button>
      </form>
    </div>
  );
}

const ContactView = ({ contact, delEvt }) => (
  <div>
    Email : {contact.email} <br />
    Name: {contact.name} <br />
    <button type="button" onClick={() => delEvt(contact.email)}>Delete</button>
  </div>
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// state from redux store is the argument
// return props to App
function mapStateToProps(state) {
  return {
    contactList: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: contact => dispatch({ type: 'ADD_CONTACT', payload: contact }),
    removeContact: email => dispatch({ type: 'REMOVE_CONTACT', payload: email }),
    clearContact: () => dispatch({ type: 'CLEAR_CONTACTS' })
  }
}