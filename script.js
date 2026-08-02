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

Спасибо тебе за твою улыбку, тепло и заботу❤️
`;

let index = 0;

function printText() {

    if (index < message.length) {

        typing.innerHTML += message[index];

        index++;

        setTimeout(printText, 40);

    }

}

openButton.onclick = () => {

    story.classList.remove("hidden");

    story.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(printText, 500);

};

showReasons.onclick = () => {

    reasons.classList.remove("hidden");

    reasons.scrollIntoView({
        behavior: "smooth"
    });

};

nextPage.onclick = () => {

    photoPage.classList.remove("hidden");

    photoPage.scrollIntoView({
        behavior: "smooth"
    });

};

finalButton.onclick = () => {

    finalPage.classList.remove("hidden");

    finalPage.scrollIntoView({
        behavior: "smooth"
    });

};




