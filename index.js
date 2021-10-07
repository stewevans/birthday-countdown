
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function startCountdown(name, birthdate){

    const today = new Date();

    let birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

    if (today > birthday) {
        birthday = new Date(today.getFullYear()+1, birthdate.getMonth(), birthdate.getDate());
    }

    const countDown = new Date(birthday).getTime();

    document.getElementById("birthday-name").innerText = `${name}'s`;

    const timer = setInterval(function() {    

        document.getElementById("countdown-container").style.display = "block";
        document.getElementById("countdown-form").style.display = "none";

        const now = new Date().getTime();
        const distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("birthday-content").style.display = "block";
            clearInterval(timer);
        }

    }, 0);

}
