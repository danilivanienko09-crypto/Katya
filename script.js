const openButton = document.getElementById("openButton");
const story = document.getElementById("story");
const reasons = document.getElementById("reasons");
const finalPage = document.getElementById("finalPage");
const nextPage = document.getElementById("nextPage");
const typing = document.getElementById("typing");

const text = `
Я хочу, чтобы ты знала:
ты стала для меня очень важным человеком.

Спасибо за каждый момент рядом,
за твою улыбку и за то тепло,
которое ты мне даришь.

Я очень ценю тебя ❤️
`;

let index = 0;

function typeText(){
    if(index < text.length){
        typing.innerHTML += text[index];
        index++;
        setTimeout(typeText, 50);
    }
}

openButton.addEventListener("click", () => {

    story.classList.remove("hidden");

    setTimeout(() => {
        story.scrollIntoView({
            behavior: "smooth"
        });

        typeText();

    },300);

});

nextPage.addEventListener("click", () => {

    reasons.classList.remove("hidden");

    setTimeout(() => {

        reasons.scrollIntoView({
            behavior:"smooth"
        });

    },300);

});

window.addEventListener("scroll", () => {

    if(window.scrollY > 1200){

        finalPage.classList.remove("hidden");

    }

});



