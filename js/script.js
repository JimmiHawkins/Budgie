var loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('.submit',(e)=>{
    e.preventDefault();
    
    db.collection('loginForm').doc().set({
        username: loginForm.uname.value,
        password: loginForm.psw.value,

    }).then(()=>{
        
    })   

    if (loginForm.uname.value === "1" && loginForm.psw.value === "1") {
        
        console.log('hi');
        
    } else {
        alert("Invalid information");
        console.log(loginForm.uname.value);
        
    }})




