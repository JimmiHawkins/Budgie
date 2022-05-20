var loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	db.collection('details').doc().set({
		username: loginForm.uname.value,
		password: loginForm.psw.value

	}).then(() => {
		if (loginForm.uname.value === "12345" && loginForm.psw.value === "12345") {

			location.href = "home.html";

		} else {
			alert("Invalid information");
		}

	})


});

console.log("js")
// const nameList = document.querySelector('#name-user');


// function renderName(doc){
//     let li = document.createElement('li');
//     let n = document.createElement('span');
//     let u = document.createElement('span');

//     li.setAttribute('data-id', doc.id);
//     n.textContent = doc.data().n;
//     u.textContent = doc.data().u;

//     li.appendChild(n);
//     li.appendChild(u);

//     nameList.appendChild(li);
// }


// db.collection('details').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderName(doc);
//     });
// });