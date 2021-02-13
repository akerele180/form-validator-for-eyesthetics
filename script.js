const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, displayMessage) {
    const addParentClass = input.parentElement;
    addParentClass.className = "portion error";
    const small = addParentClass.querySelector('small');
    small.innerText = displayMessage;
}

function showSuccess(input) {
    const addParentClass = input.parentElement;
    addParentClass.className = "portion success";
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', (e)=> {
    e.preventDefault(); //This prevents the form from refreshing which is the normal modus operanding after pressing a submit button. 
    // "Another way to achieve this is by using this syntax; onsubmit="return false" as the dom eventlistener in the HTML file
    
    if(username.value==="") {
        showError(username, "Username is required")
    } else {
        showSuccess(username);
    }

    if(email.value==="" || validateEmail(email.value)===false) {
        showError(email, "Please enter a valid email")
    } else {
        showSuccess(email);
    }

    if(password.value==="") {
        showError(password, "Password is required")
    } else {
        showSuccess(password);
    }

    if(password2.value!==password.value || password2.value==="") {
        showError(password2, "Password mismatch! Type again");
    } else {
        showSuccess(password2);
    }
})