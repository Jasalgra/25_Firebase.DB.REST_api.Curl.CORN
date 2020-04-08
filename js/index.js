//guides add into HTML to DOM
let guidesList = document.querySelector('.guides');
let logOutLinks = document.querySelectorAll('.logged-out')
let logInLinks = document.querySelectorAll('.logged-in');


// let setupIU = function (user) {
//     if (user) {
//         logInLinks.forEach(element => {
//             element.style.display = "block";
//         });
//         logOutLinks.forEach(element => {
//             element.style.display = "none";
//         });
//     } else {
//         // logInLinks.style.display = "none";
//         logInLinks.forEach(element => {
//             element.style.display = "none";
//         });
//         logOutLinks.forEach(element => {
//             element.style.display = "block";
//         });
//     }
// }
// function createCard(cardNew) {
//     cardNew.forEach(elementDoc => {
//         let guide = document.createElement('ul');
//         console.log(guide);
//         guide.classList.add('collapsible', 'z\-depth\-0', 'guides');
//         console.log(`${elementDoc.title}`);
//         console.log(elementDoc.user.title);
//         guide.setAttribute("data-collapsible", "accordion")
//         // guide.classList.add('collapsible z-depth-0 guides');
//         guide.innerHTML = `
//             <li>
//                 <div class="collapsible-header grey"><i class="material-icons">filter_drama</i>${elementDoc.title}</div>
//                 <div class="collapsible-body white"><span>${elementDoc.content}</span></div>
//             </li>
//                 `;
//         document.querySelector('.container_create').appendChild(guide);
//     });
// }

function createCard(cardNew) {
    let guide = "";
    cardNew.forEach(elementDoc => {
        // console.log(guide);
        console.log(`${elementDoc.title}`);
        // console.log(elementDoc.user.title);
        let li = `
            <li>
                <div class="collapsible-header grey"><i class="material-icons">filter_drama</i>${elementDoc.title}</div>
                <div class="collapsible-body white"><span>${elementDoc.content}</span></div>
            </li>
                `;
        guide += li;
    });
    document.querySelector('.guides').innerHTML = guide;
}


let setupGuide = function (data) {
    // if (data.length) {
    let html = "";
    data.forEach(elementDoc => {
        let guide = elementDoc.data();
        console.log(guide);
        let li = `
        <li>
            <div class="collapsible-header grey"><i class="material-icons">filter_drama</i>${elementDoc.title}</div>
            <div class="collapsible-body white"><span>${elementDoc.content}</span></div>
        </li>
        `;
        html += li;
    });
    // }
    guidesList.innerHTML = html;
}

// {/* <li>
// <div class="collapsible-header grey"><i class="material-icons">filter_drama</i>${guide.title}</div>
// <div class="collapsible-body white"><span>${guide.content}</span></div>
// </li> */}














// setupGuide(result)

// let setupGuide = function (data) {

//     if (data.length) {
//         let html = "";
//         data.forEach(elementDoc => {
//             let guide = elementDoc.data();
//             // console.log(guide);
//             let li = `
//             <li>
//                 <div class="collapsible-header grey"><i class="material-icons">filter_drama</i>${guide.title}</div>
//                 <div class="collapsible-body white"><span>${guide.content}</span></div>
//             </li>
//             `;
//             html += li;
//         });
//         guidesList.innerHTML = html;
//     } else {
//         guidesList.innerHTML = "<h3>Load Guide after user log in</h3>";
//     }
// }

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
});
document.addEventListener('DOMContentLoaded', function () {});

// fetch('https://rest-apiwdb.firebaseio.com/')
//   .then(response => response.json(console.log(response)))
//   .then(commits => alert(commits[0].author.login));