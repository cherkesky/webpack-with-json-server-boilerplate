import formManager from "./formManager.js"
import eventManager from "./eventsHandler.js"

const containerRef = document.getElementById("form-container")


//rendereing the main contact form on the screen
containerRef.innerHTML = formManager.renderMainForm()

eventManager.showEntriesClick();
eventManager.addNewEntryClick();
