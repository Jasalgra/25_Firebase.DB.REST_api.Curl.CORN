// console.log(db);
// console.log(db.collection('guides'));
// console.log('asdasdasdasdas',db.collection('guides'));

const log = document.querySelector('.log')
const reg = document.querySelector('.reg') //sign up
const create = document.querySelector('.create');
// const create = document.querySelector('.create');
console.log(create);

// listen fot Auth status changes
// auth.onAuthStateChanged(user => {
//     if (user) {
//         //         db.collection('guides').onSnapshot(takeDocs => {
//         //             setupGuide(takeDocs.docs);
//         setupIU(user);
//         //         })
//     } else {
//         //         setupGuide([]);
//         setupIU(user);
//     }
// })
// let user = "";
// if(user) {

// } 

// let currentUser = (e) => {
//     if (signupForm !== null) {
//         setupIU(e);
//         console.log();

//     }
// }


//SIGN UP
// const signupForm = document.querySelector('#signup-form');
const signupForm = document.querySelector('#signup-form');
// console.log(signupForm);
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    // const email = signupForm['signup_email'].value;        //оба варианта формы работают верно=)
    // const password = signupForm['signup_password'].value;
    const data = {
        // email: signupForm['signup-email'].value,
        email: e.target.elements.signup_email.value,
        password: e.target.elements.signup_password.value,
        returnSecureToken: true
    }
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(result => result.json())
        .then(result => localStorage.setItem('localId', result.localId))
    //sign up user 
    // auth.createUserWithEmailAndPassword(email, password).then(credentialCard => {
    //  .log(credentialCard.user);
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    // });
});
// console.log(data);



//LOGIN
let loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        // email: signupForm['signup-email'].value,
        email: loginForm['login_email'].value,
        password: loginForm['login_password'].value,
        returnSecureToken: true
    }
    // const email = loginForm['login-email'].value;
    // const password = loginForm['login-password'].value;
    // console.log(email, password);
    console.log(data);
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxQzumZ_qU5xkViTyHFFnS99vcYIgKHIQ", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(result => result.json())
        // .then(result => console.log(result))
        .then(result => localStorage.setItem('localId', result.localId))
        // .then(result => {
        //     console.log(result);
        //     let card = []
        //     let cardNew = [...card, result]
        //     console.log(cardNew);
        //     createCard(cardNew)
        // })
        .catch(result => console.error("ERRORRRRRR"));
    // auth.signInWithEmailAndPassword(email, password).then((credentialCard) => {
    //     // console.log(credentialCard.user);
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
    // })
    // .catch(e=>document.write(e)
    // )
})
//END LOGIN
console.log(loginForm);


//LOGOUT
let logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        // console.log("User log out");
    });
})
//END LOGOUT


create.addEventListener('submit', function (e) {
    console.log(create);
    e.preventDefault()
    const data = {
        title: e.target.elements.title.value,
        content: e.target.elements.content.value,
    }
    console.log(data);
    fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}/user.json`, {
            method: 'POST',
            // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(result => result.json())
        .then(result => console.log(result))
    // .then(result => localStorage.setItem("localId", result.localId))

    fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}.json`, {
            // fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}/user.json`, {
            method: 'GET'
            // *GET, POST, PUT, DELETE, etc.
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(result => result.json())
        // .then(result => console.log(result))
        // .then(result => console.log(`${localStorage.getItem('localId.title')}`))
        // .then(result => {
        //     // result.addEventListener('load', function () {
        //     //     if (request.readyState === 4 && request.status == 200) {
        //     //         let data = JSON.parse();
        //     //     } else {
        //     //         console.error("Что то пошло не так!")
        //     //     }
        //     // })
        // })
        .then(result => {
            console.log(result);
            let card = []
            let cardNew = [...card, result]
            console.log(cardNew);
            createCard(cardNew)
            //     setupGuide(JSON.stringify(result))
            //     function setupGuide(data) {
            //         // if (data.length) {
            //         let html = "";
            //             let li = `
            //             <li>
            //                 <div class="collapsible-header grey"><i class="material-icons">filter_drama</i>${guide.title}</div>
            //                 <div class="collapsible-body white"><span>${guide.content}</span></div>
            //             </li>
            //             `;
            //             html += li;
            //         // }
            //         guidesList.innerHTML = html;
            // }

            //     //////////////////////////
            //     // result.forEach(elementDoc => {
            //     //     let guide = elementDoc;
            //     //     console.log(guide);

            //     //     //         let guide = elementDoc.data();
            //     //     //         // console.log(guide);
            //     //     //         let li = `
            //     //     //     <li>
            //     //     //         <div class="collapsible-header grey"><i class="material-icons">filter_drama</i>${guide.title}</div>
            //     //     //         <div class="collapsible-body white"><span>${guide.content}</span></div>
            //     //     //     </li>
            //     //     //     `;
            //     //     //         html += li;
            //     // });
            //     // }
            //     //     guidesList.innerHTML = html;
            // })
        })
}) //END of CREATE

// fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}/user.json`, {
//         method: 'GET',
//     })
//     .then(r => {
//         r.json();
//         console.log(r);
//         console.log(r.json());

//     })
//     .then(r => console.log(r))


// fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}.json`, {
fetch(`https://rest-api20.firebaseio.com/user_list/${localStorage.getItem('localId')}/user.json`, {
        method: 'GET'
    })
    .then(result => result.json())
    .then(result => {
        console.log(result);
        let card = []
        let cardNew = [...card, result]
        console.log(cardNew);
        // createCard(cardNew)
    })


fetch(`/JSON/rest-api20-export/${localStorage.getItem('localId')}/user`, {
        method: 'GET'
    })
    .then(result => result.json())
    .then(result => 
        console.log(result)
        
    )
    // console.log(result[0])
    // .then(result => {
//     console.log(result);
//     let card = []
//     let cardNew = [...card, result]
//     console.log(cardNew);
//     createCard(cardNew)
// })