//A ContactForm component that listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the ContactCollection component.
import API from "./apiManager.js"


const eventManager = {
  showEntriesClick() {
document.getElementById("show-contact").addEventListener("click", function () {
  console.log("SHOW CONTACTS")
  API.getAllContacts()
})},



addNewEntryClick() {
  document.getElementById("add-contact").addEventListener("click", function () {
    console.log("ADD CONTACT")
})}
}

export default eventManager