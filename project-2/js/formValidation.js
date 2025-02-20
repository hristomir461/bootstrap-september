var email = document.forms["myForm"]["email"];
function fillingInput() {
    let subscirptionInput = document.getElementById("subscirption-input").value;
    email.value = subscirptionInput;
}

function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let number = document.forms["myForm"]["number"].value;
    let comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";
    let inputs = [{ error: 'Name', value: name }, { error: 'Email', value: email.value }, { error: 'Subject', value: subject }, { error: 'Number', value: number }, { error: 'Comment', value: comments }];

    inputs.forEach(input => {
        if (input.value === "" || input.value === null) {
            document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message'>*Please enter a " + input.error + "</div>";
            fadeIn();
            input.haveError = true;
        }
    });

    let isValidated = inputs.findIndex(x => x.haveError === true) === 0 ? false : true;
    if(isValidated){
        let rows = [];
        let row = {
            name: name,
            email: email.value,
            subject: subject,
            contact: number,
            message: comments
        };
        if(localStorage.getItem("contactRows") !== null){
            rows =  JSON.parse(localStorage.getItem("contactRows"));
            rows.push(row);
            rows = JSON.stringify(rows);
            localStorage.setItem("contactRows", rows);
        }else{
            rows.push(row);
            rows = JSON.stringify(rows);
            localStorage.setItem("contactRows", rows);
        }
        fetchContacts();
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'));
        console.log(modal);
        modal.hide();
        name = "";
        email.value = "";
        subject = "";
        number = "";
        comments  = "";
    }
}

function fadeIn() {
    let fade = document.getElementById("error-msg");
    let opacity = 0;
    let intervalId = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 200);
}
if(localStorage.getItem("contactRows") !== null){
fetchContacts();
}
function fetchContacts(){
    let contactRows = localStorage.getItem("contactRows");
    let contactRowsTable = document.getElementById("contactRows");
    contactRows = JSON.parse(contactRows);
    contactRowsTable.innerHTML = "";
    contactRows.forEach((contact) => {
        contactRowsTable.innerHTML += `<tr>
                                        <td>${contact.name}</td>
                                        <td>${contact.email}</td>
                                        <td>${contact.subject}</td>
                                        <td>${contact.contact}</td>
                                        <td>${contact.message}</td>
                                        </tr>`;
    });
}