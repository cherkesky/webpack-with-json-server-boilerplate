//***********************************************************************************************
//  App initialization 
//***********************************************************************************************


import formManager from "./formManager.js"
import eventManager from "./eventsHandler.js"

//reference to the main container that holds the main form
const containerRef = document.getElementById("form-container")


//rendereing the main contact form on the screen
containerRef.innerHTML = formManager.renderMainForm()


//looking for clicks
eventManager.showEntriesClick();
eventManager.addNewEntryClick();
