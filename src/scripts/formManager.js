

const formManager = {
  //***********************************************************************************************
  //  Creating the MAIN form
  //***********************************************************************************************
    renderMainForm() {
    return `
    <br>
    <h1 class=" display-4 text-center ">Contact List</h1>
    <br>
    <form class="form-group flex-nowrap jumbotron">
        <fieldset>
        <label for="first-input">First Name</label>
        <input type="text" name="first-input" id="first-input" class="form-control" required>
        </fieldset>
        <br>
        <fieldset>
            <label for="last-input">Last Name</label>
            <input type="text" name="last-input" id="last-input" class="form-control" required>
        </fieldset>
        <br>
        <fieldset>
            <label for="address-input">Address</label>
            <textarea name="address-input" id="address-input" class="form-control" required></textarea>
        </fieldset>
        <br>
        <fieldset>
            <label for="phone-input">Phone Number</label>
            <input type="text" name="phone-input" id="concept-input" class="form-control" required>
        </fieldset>
        <br>
    </form>

    <form class="form-group flex-nowrap card">
    <button id="show-contact" class="btn btn-primary btn-lg">Show Contacts</button>
   <button id="add-contact" class="btn btn-secondary btn-lg">Add New Contact</button>
   </form>  
    <br><br>
    <hr>
    `
  }
}

export default formManager
