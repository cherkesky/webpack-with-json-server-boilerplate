const ContactList = {
//***********************************************************************************************
//  GET all the contacts
//***********************************************************************************************
getAllContacts(){
  console.log("GETALLCONTACT CALLED")

  return fetch("http://localhost:8088/contacts")
    .then(response => response.json())
},
//***********************************************************************************************
//   ADDING a new contact
//***********************************************************************************************
addContact(newContactObj) {
  return fetch("http://localhost:8088/contacts", { 
  method: "POST",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify(newContactObj)
      })
}

}


export default ContactList