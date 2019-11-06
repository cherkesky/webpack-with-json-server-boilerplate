//***********************************************************************************************
//  App initialization 
//***********************************************************************************************


import ContactForm from "./formManager.js"
import ContactCollection from "./eventsHandler.js"

//reference to the main container that holds the main form
const containerRef = document.getElementById("form-container")


//rendereing the main contact form on the screen
containerRef.innerHTML = ContactForm.renderMainForm()


//looking for clicks
ContactCollection.showEntriesClick();
ContactCollection.addNewEntryClick();
