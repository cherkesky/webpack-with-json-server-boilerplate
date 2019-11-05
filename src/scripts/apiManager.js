const API = {

getAllContacts(){
  console.log("GETALLCONTACT CALLED")

  return fetch("http://localhost:8088/contacts")
    .then(response => response.json())
    .then(jsonfiedinfo => console.log(jsonfiedinfo))
}
}

export default API