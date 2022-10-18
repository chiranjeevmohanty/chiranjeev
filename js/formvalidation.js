function printError(elementClass, hintmsg) {
    document.querySelector(elementClass).innerHTML = hintmsg;
}
function validateForm() {
    var name = document.forms["contactForm"]["fullName"].value.trim();
    var phoneNumber = document.forms["contactForm"]["phoneNumber"].value.trim();
    var emailId = document.forms["contactForm"]["emailId"].value.trim();
    const message = document.forms["contactForm"]["message"].value.trim();
    const namefield = document.querySelector('#fullName');
    const numberField = document.querySelector('#phoneNumber');
    const emailField = document.querySelector('#emailId');
    const messageField = document.querySelector('#message');

    var NameError = emailError = telError = true;

    if (name == null || name == "") {
        document.querySelector(".name-err-icon").style.display = "block";
        document.querySelector(".name-suc-icon").style.display = "none";
        document.querySelector(".name-err").innerHTML = "The field is blank";
        document.querySelector(".tel-err-icon").style.display = "none";
        // document.querySelector(".tel-suc-icon").style.display = "none";
        document.querySelector(".email-err-icon").style.display = "none";
        // document.querySelector(".email-suc-icon").style.display = "none";
        document.querySelector(".email-err").innerHTML = "";
        document.querySelector(".tel-err").innerHTML = "";
        document.querySelector(".message-error").innerHTML = "";
        namefield.focus();
        return false;
    } else {
        regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            document.querySelector(".name-err-icon").style.display = "block";
            document.querySelector(".name-suc-icon").style.display = "none";
            document.querySelector(".name-err").innerHTML = "Please enter valid data.";
            document.querySelector(".tel-err-icon").style.display = "none";
            document.querySelector(".email-err-icon").style.display = "none";
            document.querySelector(".email-err").innerHTML = "";
            document.querySelector(".tel-err").innerHTML = "";
            document.querySelector(".message-error").innerHTML = "";
            namefield.focus();
            return false;
        } else {
            document.querySelector(".name-err-icon").style.display = "none";
            document.querySelector(".name-suc-icon").style.display = "block";
            document.querySelector(".name-err").innerHTML = "";
            document.querySelector(".tel-err-icon").style.display = "none";
            document.querySelector(".email-err-icon").style.display = "none";
            document.querySelector(".email-err").innerHTML = "";
            document.querySelector(".tel-err").innerHTML = "";
            document.querySelector(".message-error").innerHTML = "";
            namefield.blur();
            NameError = false;
        }
    }

    if (phoneNumber == null || phoneNumber == "") {
        document.querySelector(".name-err-icon").style.display = "none";
        document.querySelector(".name-err").innerHTML = "";
        document.querySelector(".tel-err-icon").style.display = "block";
        document.querySelector(".tel-suc-icon").style.display = "none";
        document.querySelector(".tel-err").innerHTML = "The field is blank";
        document.querySelector(".email-err-icon").style.display = "none";
        document.querySelector(".email-err").innerHTML = "";
        document.querySelector(".message-error").innerHTML = "";
        numberField.focus();
        return false;
    } else {
        regex = /^[6-9]\d{9}$/;
        if (regex.test(phoneNumber) === false) {
            document.querySelector(".name-err-icon").style.display = "none";
            document.querySelector(".name-err").innerHTML = "";
            document.querySelector(".tel-err-icon").style.display = "block";
            document.querySelector(".tel-suc-icon").style.display = "none";
            document.querySelector(".tel-err").innerHTML = "Please enter valid number";
            document.querySelector(".email-err-icon").style.display = "none";
            document.querySelector(".email-err").innerHTML = "";
            document.querySelector(".message-error").innerHTML = "";
            numberField.focus();
            return false;
        } else {
            document.querySelector(".name-err-icon").style.display = "none";
            document.querySelector(".name-err").innerHTML = "";
            document.querySelector(".tel-err-icon").style.display = "none";
            document.querySelector(".tel-suc-icon").style.display = "block";
            document.querySelector(".tel-err").innerHTML = "";
            document.querySelector(".email-err-icon").style.display = "none";
            document.querySelector(".email-err").innerHTML = ""; 
            document.querySelector(".message-error").innerHTML = "";
            numberField.blur();
            telError = false;
        }
    }
    if (emailId == null || emailId == "") {
        document.querySelector(".name-err-icon").style.display = "none";
        document.querySelector(".name-err").innerHTML = "";
        document.querySelector(".tel-err-icon").style.display = "none";
        document.querySelector(".tel-err").innerHTML = "";
        document.querySelector(".email-err-icon").style.display = "block";
        document.querySelector(".email-suc-icon").style.display = "none";
        document.querySelector(".email-err").innerHTML = "The field is blank";
        document.querySelector(".message-error").innerHTML = "";
        emailField.focus();
        return false;
    } else {
        regex = /^\S+@\S+\.\S+$/;
        if (regex.test(emailId) === false) {
            document.querySelector(".name-err-icon").style.display = "none";
            document.querySelector(".name-err").innerHTML = "";
            document.querySelector(".tel-err-icon").style.display = "none";
            document.querySelector(".tel-err").innerHTML = "";
            document.querySelector(".email-err-icon").style.display = "block";
            document.querySelector(".email-suc-icon").style.display = "none";
            document.querySelector(".email-err").innerHTML = "Please enter valid data";
            document.querySelector(".message-error").innerHTML = "";
            emailField.focus();
            return false;
        } else {
            document.querySelector(".name-err-icon").style.display = "none";
            document.querySelector(".name-err").innerHTML = "";
            document.querySelector(".tel-err-icon").style.display = "none";
            document.querySelector(".tel-err").innerHTML = "";
            document.querySelector(".email-err-icon").style.display = "none";
            document.querySelector(".email-suc-icon").style.display = "block";
            document.querySelector(".email-err").innerHTML = "";
            document.querySelector(".message-error").innerHTML = "";
            emailField.blur();
            emailError = false;
        }
    }
    if (message == null || message == "") {
        messageField.focus();
        document.querySelector(".message-error").innerHTML = "The field is blank.";
        return false;
    } else {
        document.querySelector(".message-error").innerHTML = "The field is blank.";
    }
}

clearButton = document.getElementById("clear");
icons = document.querySelectorAll(".icon");
clearButton.addEventListener("click", () => {
    icons[0].style.display = "none";
    icons[1].style.display = "none";
    icons[2].style.display = "none";
    icons[3].style.display = "none";
    icons[4].style.display = "none";
    icons[5].style.display = "none";
    document.querySelector(".name-err").innerHTML = "";
    document.querySelector(".tel-err").innerHTML = "";
    document.querySelector(".email-err").innerHTML = "";
    document.querySelector(".message-error").innerHTML = "";
})