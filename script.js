const openButton = document.getElementById("openButton");

const story = document.getElementById("story");
const reasons = document.getElementById("reasons");
const photoPage = document.getElementById("photoPage");
const finalPage = document.getElementById("finalPage");

const showReasons = document.getElementById("showReasons");
const nextPage = document.getElementById("nextPage");
const finalButton = document.getElementById("finalButton");

const typing = document.getElementById("typing");

const message = `
Я хочу, чтобы ты знала, насколько ты для меня важна.

Ты стала очень родным человеком для меня.

Мне дороги наши моменты и время, которое мы проводим вместе.

Спасибо тебе за твою улыбку, тепло и заботу ❤️
`;

let index = 0;

function printText() {

    if (index < message.length) {

        typing.innerHTML += message[index];

        index++;

        setTimeout(printText, 40);

    }

}

openButton.onclick = function() {

    story.classList.remove("hidden");

    story.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(printText, 500);

};

showReasons.onclick = function() {

    reasons.classList.remove("hidden");

    reasons.scrollIntoView({
        behavior: "smooth"
    });

};

nextPage.onclick = function() {

    photoPage.classList.remove("hidden");

    photoPage.scrollIntoView({
        behavior: "smooth"
    });

};

finalButton.onclick = function() {

    finalPage.classList.remove("hidden");

    finalPage.scrollIntoView({
        behavior: "smooth"
    });

};

// Таймер отношений

function updateTimer() {

    const startDate = new Date("2026-07-14T00:00:00");

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);

    const minutes = Math.floor(diff / (1000 * 60) % 60);

    const seconds = Math.floor(diff / 1000 % 60);

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) daysElement.textContent = days;
    if (hoursElement) hoursElement.textContent = hours;
    if (minutesElement) minutesElement.textContent = minutes;
    if (secondsElement) secondsElement.textContent = seconds;

}

updateTimer();

setInterval(updateTimer, 1000);
