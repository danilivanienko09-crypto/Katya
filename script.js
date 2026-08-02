const openButton = document.getElementById("openButton");
const story = document.getElementById("story");
const reasons = document.getElementById("reasons");
const nextPage = document.getElementById("nextPage");
const finalPage = document.getElementById("finalPage");
const typing = document.getElementById("typing");

const text = `
Я хочу, чтобы ты знала одну вещь.

Ты стала для меня очень родным и важным человеком.

Я счастлив, что именно ты появилась в моей жизни.

Спасибо тебе за твою улыбку,
тепло и моменты рядом.

Я очень ценю тебя ❤️
`;

let i = 0;

function typeText() {

    if (i < text.length) {

        typing.innerHTML += text[i];

        i++;

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

    setTimeout(() => {

        reasons.classList.remove("hidden");

    }, 7000);

});

nextPage.addEventListener("click", () => {

    finalPage.classList.remove("hidden");

    finalPage.scrollIntoView({
        behavior: "smooth"
    });

});



