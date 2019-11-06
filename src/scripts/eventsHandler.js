import API from "./apiManager.js"
import DOMrenderer from "./DomRenderer.js"


const eventManager = {
//***********************************************************************************************
//  SHOW entries button been clicked
//***********************************************************************************************
  showEntriesClick() {
    document.getElementById("show-contact").addEventListener("click", function () {
      console.log("SHOW CONTACTS CLICK")
      API.getAllContacts()
        .then(jsonfiedInfo => DOMrenderer.displayContacts(jsonfiedInfo))
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

      API.addContact({first_name, last_name, address, phone})
      .then (eventManager.showEntriesClick)
    })
  }
}

export default eventManager