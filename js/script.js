console.log("Hello and enjoy");

let reverse = document.querySelector(".js-homePage");
let backgroundButton = document.querySelector(
    ".js-header__backgroundReverse--button"
);

let shadowButton = document.querySelector(".js-header__shadow--button");
let normalShadow = document.querySelector(".js-header__normalShadow");

backgroundButton.addEventListener("click", () => {
    if (backgroundButton.innerText === "Zmień background") {
        backgroundButton.innerText = "Przywróć pierwotny background";
    } else backgroundButton.innerText = "Zmień background";
});

backgroundButton.addEventListener("click", () => {
    reverse.classList.toggle("black");
});

shadowButton.addEventListener("click", () => {
    if (shadowButton.innerText === "Zmień cień tytułu na kolor czerwony") {
        shadowButton.innerText = "Zmień cień tytułu na kolor biały";
    } else shadowButton.innerText = "Zmień cień tytułu na kolor czerwony";
});

shadowButton.addEventListener("click", () => {
    normalShadow.classList.toggle("redShadow");
});
