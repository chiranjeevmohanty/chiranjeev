function printError(elementClass, hintmsg) {
    document.querySelector(elementClass).innerHTML = hintmsg;
}
function validateForm() {
    var name = document.forms["contactForm"]["fullName"].value.trim();
    var phoneNumber = document.forms["contactForm"]["phoneNumber"].value.trim();
    var emailId = document.forms["contactForm"]["emailId"].value.trim();
    const message = document.querySelector('#message');
    const namefield = document.querySelector('#fullName');
    const numberField = document.querySelector('#phoneNumber');
    const emailField = document.querySelector('#emailId');

    var NameError = emailError = telError = true;

    if (name == null || name == "") {
        document.querySelector(".name-err-icon").style.display = "block";
        document.querySelector(".name-err").innerHTML = "The field is blank";
        namefield.focus();
        return false;
    } else {
        regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            document.querySelector(".name-err-icon").style.display = "block";
            document.querySelector(".name-err").innerHTML = "Please enter valid data.";
            namefield.focus();
            return false;
        } else {
            document.querySelector(".name-err-icon").style.display = "none";
            document.querySelector(".name-suc-icon").style.display = "block";
            document.querySelector(".name-err").innerHTML = "";
            namefield.blur();
            NameError = false;
        }
    }

    if (phoneNumber == null || phoneNumber == "") {
        document.querySelector(".tel-err-icon").style.display = "block";
        document.querySelector(".tel-err").innerHTML = "The field is blank";
        numberField.focus();
        return false;
    } else {
        regex = /^[6-9]\d{9}$/;
        if (regex.test(phoneNumber) === false) {
            document.querySelector(".tel-err-icon").style.display = "block";
            document.querySelector(".tel-err").innerHTML = "Please enter valid number";
            numberField.focus();
            return false;
        }else{
            document.querySelector(".tel-err-icon").style.display = "none";
            document.querySelector(".tel-suc-icon").style.display = "block";
            document.querySelector(".tel-err").innerHTML = "";
            numberField.blur();
            telError = false;
        }
    }
    if(emailId == null || emailId == ""){
        document.querySelector(".email-err-icon").style.display = "block";
        document.querySelector(".email-err").innerHTML = "The field is blank";
        emailField.focus();
        return false;
    }else{
        regex = /^\S+@\S+\.\S+$/;
        if (regex.test(emailId) === false) {
            document.querySelector(".email-err-icon").style.display = "block";
            document.querySelector(".email-err").innerHTML = "Please enter valid number";
            numberField.focus();
            return false;
        }else{
            document.querySelector(".email-err-icon").style.display = "none";
            document.querySelector(".email-err").innerHTML = "";
            document.querySelector(".email-suc-icon").style.display = "block";
            numberField.focus();
            emailError = false;
        }
    }
}

clearButton = document.getElementById("clear");
icons = document.querySelectorAll(".icon"); 
clearButton.addEventListener("click", (e)=>{
    icons[0].style.display = "none";
    icons[1].style.display = "none";
    icons[2].style.display = "none";
    icons[3].style.display = "none";
    icons[4].style.display = "none";
    icons[5].style.display = "none";
    document.querySelector(".name-err").innerHTML = "";
    document.querySelector(".tel-err").innerHTML = "";
    document.querySelector(".email-err").innerHTML = "";
})