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

Спасибо тебе за твою улыбку,
тепло и моменты рядом.

Я очень ценю тебя ❤️
`;

let i = 0;

function typeText() {

    if (i < text.length) {

        typing.textContent += text[i];

        i++;

        setTimeout(typeText, 50);

    }

}

openButton.addEventListener("click", function(){

    story.classList.remove("hidden");

    story.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        typeText();
    },500);

});

nextPage.addEventListener("click", function(){

    finalPage.classList.remove("hidden");

    finalPage.scrollIntoView({
        behavior:"smooth"
    });

});
