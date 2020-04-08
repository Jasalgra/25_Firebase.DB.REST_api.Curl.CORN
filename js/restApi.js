console.log("111");
console.log("222");

// const data = {
//     "name": "Petya",
//     "age": 15
// }

// fetch('https://rest-api20.firebaseio.com/users2.json', {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     })
//     .then(r => r.json())
//     .then(r => console.log(r))


const log = document.querySelector('.log')
const reg = document.querySelector('.reg')
const create = document.querySelector('.create');

log.addEventListener('submit', function (e) {
    e.preventDefault()
    const data = {
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        returnSecureToken: true
    }
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(result => result.json())
        .then(result => console.log(result))
        // .then(result => localStorage.setItem('localId', result.localId))
        .catch(result => console.log("ERRORRRRRR"))
});

reg.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        returnSecureToken: true
    }
    console.log(data.email);
    console.log(data.password);
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(result => result.json())
        .then(result => localStorage.setItem('localId', result.localId))
})


create.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        name: e.target.elements.name.value,
        age: e.target.elements.age.value
    }

    console.log(data[0]);
    console.log(data[1]);

    // fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.setItem('localId')}/user.json`, {
    //         method: "POST",
    //         body: JSON.stringify(data)
    //     })
    //     .then(result => result.json())
    //     .then(result => result)


    // fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}/user.json`, {
    //         method: "GET",
    //         body: JSON.stringify(data)
    //     })
    //     .then(r => r.json())
    //     .then(r => console.log(r))
})

// create.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const data = {

//     }
//     fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}/user.json`, {
//             method: 'POST',
//             // *GET, POST, PUT, DELETE, etc.
//             body: JSON.stringify(data) // body data type must match "Content-Type" header
//         })
//         .then(r => r.json())
//         .then(r => console.log(r))
// })