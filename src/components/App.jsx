import React from "react";
import Card from "../components/Card";
import contacts from "../contact";
import Avatar from "../components/Avatar";


// creating a createCard() function 
function createCard(contact){
  return <Card key={contact.id} name={contact.name} img={contact.imgURL} tel={contact.phone} email={contact.email}/>
}

function App() {
  return(
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4JihYalR4xiRzJjZRsUBgxfP5UYT9pMjLyw&usqp=CAU" />


{/* this map() function will have a parameter as function and the createCard will loop through the contacts array as contact and returns the individual value */}
      {contacts.map(createCard)}

      {/* this is the <CARD /> component from card.jsx file */}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;