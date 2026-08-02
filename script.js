const openButton = document.getElementById("openButton");
const story = document.getElementById("story");
const reasons = document.getElementById("reasons");
const showReasons = document.getElementById("showReasons");
const finalPage = document.getElementById("finalPage");
const nextPage = document.getElementById("nextPage");
const typing = document.getElementById("typing");

const text = `
Я хочу, чтобы ты знала одну вещь.

Ты стала для меня очень родным и важным человеком.

Я счастлив, что именно ты появилась в моей жизни.

Мне дороги наши моменты вместе.

Спасибо тебе за твою улыбку,
тепло и заботу.

Я очень тебя люблю ❤️
`;

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.innerHTML += text[index];

        index++;

        setTimeout(typeText, 50);

    }

}

openButton.addEventListener("click", () => {

    story.classList.remove("hidden");

    story.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {

        typeText();

    }, 500);

});

showReasons.addEventListener("click", () => {

    reasons.classList.remove("hidden");

    reasons.scrollIntoView({
        behavior: "smooth"
    });

});

nextPage.addEventListener("click", () => {

    finalPage.classList.remove("hidden");

    finalPage.scrollIntoView({
        behavior: "smooth"
    });

});




