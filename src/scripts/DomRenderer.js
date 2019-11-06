const Contact = {
//****************************************************************************************************
//  Iterate through the josn response and build the contact list 
//****************************************************************************************************
  displayContacts(jsonfiedResponse){
      console.log("DISPLAYCONTACTS CALLED")

      console.log(jsonfiedResponse)
      let HtmlForAllEntries = ""
      jsonfiedResponse.forEach(entry => {
        const entryHtml = Contact.createHTML(entry)
        HtmlForAllEntries += entryHtml
      })
      const contactRef = document.getElementById("contacts-container")
      contactRef.innerHTML = HtmlForAllEntries

  },
//****************************************************************************************************
//  Create Contact Card in HTML
//****************************************************************************************************
createHTML(entries) {
  console.log("CREATE HTML CALLED")
    return `
      <section class="card">
        <h3 class="card-header">${entries.first_name} ${entries.last_name}</h3>
        <div class="card-body">

        <p class="card-title"> Address: ${entries.address}</p>
        <p class="card-text"> Phone: ${entries.phone}</p>
        </div>
        <hr>
      </section>
    `
}
}


export default Contact