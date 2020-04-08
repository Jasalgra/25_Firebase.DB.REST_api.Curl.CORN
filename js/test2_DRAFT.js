 const data = {
   "name": "Petya",
   "age": 15
 }

 fetch('https://rest-api20.firebaseio.com/users2.json', {
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
     body: JSON.stringify(data) // body data type must match "Content-Type" header
   })
   .then(r => r.json())
   .then(r => console.log(r))

 const log = document.querySelector('.log')
 const reg = document.querySelector('.reg')
 log.addEventListener('submit', function (e) {
   e.preventDefault()
 })
 reg.addEventListener('submit', function (e) {
   e.preventDefault()
   fetch('https://rest-api20.firebaseio.com/users2.json', {
       method: 'POST', // *GET, POST, PUT, DELETE, etc.
       body: JSON.stringify(data) // body data type must match "Content-Type" header
     })
     .then(r => r.json())
     .then(r => console.log(r))
 })
 const data = {
   "name": "Petya",
   "age": 15
 }

 const log = document.querySelector('.log')
 const reg = document.querySelector('.reg')
 log.addEventListener('submit', function (e) {
   e.preventDefault()
 })
 reg.addEventListener('submit', function (e) {
   e.preventDefault()
   const data = {
     email: e.target.elements.name.value,
     password: e.target.elements.password.value,
     returnSecureToken: true

   }
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ', {
       method: 'POST',
       // *GET, POST, PUT, DELETE, etc.
       body: JSON.stringify(data) // body data type must match "Content-Type" header
     })
     .then(r => r.json())
     .then(r => console.log(r))
 })

 /////////////////////
 //////////////////////
 const log = document.querySelector('.log')
 const reg = document.querySelector('.reg')

 log.addEventListener('submit', function (e) {
   e.preventDefault()
   const data = {
     email: e.target.elements.email.value,
     password: e.target.elements.password.value,
     returnSecureToken: true
   }
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ', {
       method: 'POST',
       // *GET, POST, PUT, DELETE, etc.
       body: JSON.stringify(data) // body data type must match "Content-Type" header
     })
     .then(r => r.json())
     .then(r => console.log(r))
 });

 reg.addEventListener('submit', function (e) {
   e.preventDefault()
   const data = {
     email: e.target.elements.email.value,
     password: e.target.elements.password.value,
     returnSecureToken: true
   }
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ', {
       method: 'POST',
       // *GET, POST, PUT, DELETE, etc.
       body: JSON.stringify(data) // body data type must match "Content-Type" header
     })
     .then(r => r.json())
     .then(r => console.log(r))
 });

 /////////////////////////
 /////////////////////////
 /////////////////////////
 /////////////////////////