const openButton = document.getElementById("openButton");
const story = document.getElementById("story");
const reasons = document.getElementById("reasons");
const finalPage = document.getElementById("finalPage");
const nextPage = document.getElementById("nextPage");
const typing = document.getElementById("typing");

const text = `
Я хочу, чтобы ты знала одну вещь.

Ты стала для меня очень родным и важным человеком.

Я счастлив, что именно ты появилась в моей жизни.

Мне дороги наши встречи и моменты, которые мы проводим вместе.

Спасибо тебе за твою улыбку, тепло и заботу.

Я очень ценю тебя ❤️
`;

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.innerHTML += text[index];

        index++;

        setTimeout(typeText, 45);

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

    }, 9000);

});

nextPage.addEventListener("click", () => {

    finalPage.classList.remove("hidden");

    finalPage.scrollIntoView({
        behavior: "smooth"
    });

});




