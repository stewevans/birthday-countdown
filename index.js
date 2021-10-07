
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function setupPage(){
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const name = urlParams.get("personname");
    const birthdate = new Date(urlParams.get("birthdate"));
    const countType = urlParams.get("countType");

    if(countType == "age"){
        agecount(name, birthdate);
    }
    else if (countType == "countdown"){
        countdown(name, birthdate);
    }
    else{
        displayForm();
    }
}


function agecount(name, birthdate){
    displayAgeCount(name);

    const timer = setInterval(function() {    

        const distance = new Date().getTime() - birthdate.getTime();

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    }, 100);
}

function countdown(name, birthdate){

    const today = new Date();

    let birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate(), 0, 0, 0, 0);

    if (today > birthday) {
        birthday = new Date(today.getFullYear()+1, birthdate.getMonth(), birthdate.getDate(), 0, 0, 0, 0);
    }

    const birthdayTime = birthday.getTime();

    displayCountdown(name);

    const timer = setInterval(function() {    

        const nowTime = new Date().getTime();
        const distance = birthdayTime - nowTime;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
            displayBirthday(name, birthdate);
            clearInterval(timer);
        }

    }, 100);

}


function displayForm(){
    document.getElementById("details-form").style.display = "block";
    document.getElementById("count-container").style.display = "none";
    document.getElementById("birthday-container").style.display = "none";
    document.getElementById("goback-container").style.display = "none";
}

function displayAgeCount(name){
    document.getElementById("details-form").style.display = "none";
    document.getElementById("count-container").style.display = "block";
    document.getElementById("birthday-container").style.display = "none";
    document.getElementById("goback-container").style.display = "block";

    document.getElementById("age-birthday-name").innerText = `${name}'s`;
    document.getElementById("count-headline").style.display = "none";
    document.getElementById("age-headline").style.display = "inline-block";
}

function displayCountdown(name){
    document.getElementById("details-form").style.display = "none";
    document.getElementById("count-container").style.display = "block";
    document.getElementById("birthday-container").style.display = "none";
    document.getElementById("goback-container").style.display = "block";

    document.getElementById("count-birthday-name").innerText = `${name}'s`;
    document.getElementById("count-headline").style.display = "inline-block";
    document.getElementById("age-headline").style.display = "none";
}

function displayBirthday(name, birthdate){

    document.getElementById("details-form").style.display = "none";
    document.getElementById("count-container").style.display = "none";
    document.getElementById("birthday-container").style.display = "block";
    document.getElementById("goback-container").style.display = "block";

    document.getElementById("birthday-headline").innerText = `It's ${name}'s birthday!`;
}
