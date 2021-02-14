const form = document.getElementById('form');
// LINE 3-6 IS TO GET THE RESPECTIVE INPUT FIELDS.
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// FUNCTIONS DEFINITIONS
function showError(input, displayMessage) { //input serves as the input-field-type.
    const addParentClass = input.parentElement;
    addParentClass.className = "portion error";
    const small = addParentClass.querySelector('small');
    small.innerText = displayMessage;
    // return false;
}

function showSuccess(input) {
    const addParentClass = input.parentElement;
    addParentClass.className = "portion success";
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequired(inputArr){
    inputArr.forEach(element => {
        console.log(element.value);
        if(element.value === "") {
            showError(element, `${element.id.slice(0,1).toUpperCase() + element.id.slice(1)} is required`);
        } else {
            showSuccess(element);
        }
    });
}

 
form.addEventListener('submit', (e)=> {
    e.preventDefault(); //This prevents the form from refreshing which is the normal modus operanding after pressing a submit button. 
    // "Another way to achieve this is by using this syntax; onsubmit="return false" as the dom eventlistener in the HTML file
    
    // if(username.value==="") {
    //     showError(username, "Username is required");
    // } else {
    //     showSuccess(username);
    // }

    // if(email.value==="" || validateEmail(email.value)===false) {
    //     showError(email, "Please enter a valid email address")
    // } else {
    //     showSuccess(email);
    // }

    // if(password.value==="") {
    //     showError(password, "Password is required")
    // } else {
    //     showSuccess(password);
    // }

    // if(password2.value==="") {
    //     showError(password2, "Password is required");
    //     console.log(password2.value)
    // } else if(password2.value==="" && password2.value!==password.value) {
    //     showError(password2, "Password mismatch! Type again");
        
    // }
    // else {
    //     showSuccess(password2);
    // }

    // LINE 32 to 59 is a wonderful approach to getting this done but it seem to be very messy. So, in order to clean this up, we shall introduce a more robust, cleaner and shorter lines of code to execute the same program.

    // This new concept would have a function that would take in an array of the inputs (i.e. username, email, password & password2) and use them as arguements for the function.
    const arrayArg = [username, email, password, password2];
    checkRequired(arrayArg);
})