const email = document.getElementById("email");

const submitButton = document.getElementById("submit-click");

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

document.querySelector("#error").style.display="none"
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(!validateEmail(email.value)){
        document.querySelector("#error").style.display="block"
    } else {

        document.querySelector("#error").style.display="none"
        
    }
})

