const log = document.querySelector('.log')
const reg = document.querySelector('.reg')
const create = document.querySelector('.create')
log.addEventListener('submit',function(e){
 e.preventDefault()
 const data = {
  email:e.target.elements.email.value,
  password:e.target.elements.password.value,
  returnSecureToken:true
  
}
fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ',{
  method: 'POST',
   // *GET, POST, PUT, DELETE, etc.
  body: JSON.stringify(data) // body data type must match "Content-Type" header
})
.then(r=>r.json())
.then(r=>localStorage.setItem("localId",r.localId)
)

})




reg.addEventListener('submit',function(e){
  e.preventDefault()
  const data = {
    email:e.target.elements.email.value,
    password:e.target.elements.password.value,
    returnSecureToken:true
    
  }
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ',{
    method: 'POST',
     // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  .then(r=>r.json())
  .then(r=>localStorage.setItem("localId",r.localId)
)
 })



create.addEventListener('submit',function(e){
  e.preventDefault()
  const data = {
    name:e.target.elements.name.value,
    age:e.target.elements.age.value,
  }
  fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}/user.json`,{
    method: 'POST',
     // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  .then(r=>r.json())
  .then(r=>console.log(r)
)
 })


 fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}/user.json`,{
  method: 'GET',
})
.then(r=>r.json())
.then(r=>console.log(r))

