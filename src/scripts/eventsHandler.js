import ContactList from "./apiManager.js"
import Contact from "./DomRenderer.js"

const ContactCollection = {
//***********************************************************************************************
//  SHOW entries button been clicked
//***********************************************************************************************
  showEntriesClick() {
    document.getElementById("show-contact").addEventListener("click", function () {
      console.log("SHOW CONTACTS CLICK")
      ContactList.getAllContacts()
        .then(jsonfiedInfo => Contact.displayContacts(jsonfiedInfo))
    })
  },


//***********************************************************************************************
//   ADD new entry button been clicked
//***********************************************************************************************
  addNewEntryClick() {
    document.getElementById("add-contact").addEventListener("click", function () {
      console.log("ADD CONTACT CLICK")

      let first_name = document.getElementById("first-input").value
      let last_name= document.getElementById("last-input").value
      let address= document.getElementById("address-input").value
      let phone= document.getElementById("phone-input").value

      console.log (first_name, last_name, address, phone)

      ContactList.addContact({first_name, last_name, address, phone})
      .then (ContactList.getAllContacts)
      .then(jsonfiedInfo => Contact.displayContacts(jsonfiedInfo))
    })
  }
}

export default ContactCollection