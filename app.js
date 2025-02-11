feather.replace();

function validateForm(){
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let number = document.forms["myForm"]["number"].value;
    let comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";
    let inputs = [{error: 'Name', value: name}, {error: 'Email', value: email}, {error: 'Subject', value: subject}, {error: 'Number', value: number}, {error: 'Comment', value: comments}];

    inputs.forEach(input => {
        if(input.value === "" || input.value === null){
            document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message'>*Please enter a " + input.error + "</div>";
            fadeIn();
            input.haveError = true;
        }
    });
    
    return inputs.findIndex(x => x.haveError === true) === 0 ? false : true;
}

function fadeIn(){
    let fade =  document.getElementById("error-msg");
    let opacity = 0;
    let intervalId = setInterval(function (){
        if(opacity < 1){
            opacity = opacity + 0.5;
            fade.style.opacity = opacity;
        }else{
            clearInterval(intervalId);
        }
    }, 200);
}