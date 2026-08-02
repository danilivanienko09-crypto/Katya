const openButton = document.getElementById("openButton");
const story = document.getElementById("story");
const reasons = document.getElementById("reasons");
const showReasons = document.getElementById("showReasons");
const nextPage = document.getElementById("nextPage");
const finalPage = document.getElementById("finalPage");
const typing = document.getElementById("typing");

const message = `
Я хочу, чтобы ты знала, насколько ты для меня важна.

Ты стала очень родным человеком для меня.

Мне дороги наши моменты и время, которое мы проводим вместе.

Спасибо тебе за твою улыбку, тепло и заботу ❤️
`;

let i = 0;

function printText() {

    if (i < message.length) {

        typing.innerHTML += message[i];

        i++;

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

    finalPage.classList.remove("hidden");

    finalPage.scrollIntoView({
        behavior: "smooth"
    });

};




