feather.replace();

function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let number = document.forms["myForm"]["number"].value;
    let comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";
    let inputs = [{ error: 'Name', value: name }, { error: 'Email', value: email }, { error: 'Subject', value: subject }, { error: 'Number', value: number }, { error: 'Comment', value: comments }];

    inputs.forEach(input => {
        if (input.value === "" || input.value === null) {
            document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message'>*Please enter a " + input.error + "</div>";
            fadeIn();
            input.haveError = true;
        }
    });

    return inputs.findIndex(x => x.haveError === true) === 0 ? false : true;
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

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

if (document.getElementsByClassName('feature-slider')[0] != undefined) {
    var slider = tns({
        container: '.feature-slider',
        loop: true,
        navPosition: "bottom",
        speed: 400,
        mouseDrag: true,
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        responsive: {
            640: {
                edgePadding: 20,
                gutter: 20,
                items: 1
            },
            700: {
                edgePadding: 20,
                gutter: 30,
                items: 2
            },
            900: {
                edgePadding: 20,
                items: 4
            }
        }
    });
}