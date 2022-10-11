import React, { useState, useEffect } from 'react';
import './App.css';
import './styles.css';

const App = () => {
  // state created to fetch data from the API
  const [contacts, setContacts] = useState([]);
  // adding a useEffect function to stop component re-rendering
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")

  // converting the response into JSON logging it to the console
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []); // the empty array here is called a dependency array, which means the useEffect function will only run when the component loads for the first time. For additional re-renders, the useEffect function is skipped.

  // making a GET request to the API, asking for three results
  ;
  return (
    <>
    {/* passing props: avatar, email, name, and age */}
    {/* we define prop by giving it a name
    props must be defined using quoted text or within braces
    */}
    {/* rewriting the return statement with the mock contacts data above */}
    {contacts.map(contact => (
    <ContactCard 
    // updating the data per the API
      avatar = {contact.picture.large}
      name = {contact.name.first + "" + contact.name.last}
      email = {contact.email}
      age={contact.dob.age}
    />
    // <ContactCard
    // avatar = "https://via.placeholder.com/150"
    // name = "Jackie Chan"
    // email = "Jackie.Chan@hotmail.com"
    // age={48}
    // />
    // <ContactCard 
    // avatar = "https://via.placeholder.com/150"
    // name = "Vidya Baalan"
    // email = "Vidya.Baalan@hotmail.com"
    // age={50}
    // /> 
    ))}
    </>
  );
};

// creating ContactCard function
const ContactCard = props => {
  // adding the useState Hook
  // display or hide age
  const [showAge, setShowAge] = useState(true); // useState object gives us a variable with the current value, and a function that lets us change that value. Initial value of useState set to false in this case. Using the first value to access the state value and the second to change it is called destructing assignment.
  return(
    <div className="contact-card">
      {/* replacing the hardcoded values with the values we receive from the props */}
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        {/* if showAge variable is true, render the age, if not, render nothing.  */}
        {showAge && <p>Age: {props.age}</p>}
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age
        </button>
      </div>
    </div>
  );
};

export default App;
