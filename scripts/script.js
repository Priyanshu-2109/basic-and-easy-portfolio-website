const textArray = ["AVID LEARNER", "TECH ENTHUSIASTIC", "OPTIMISTIC", "WEB DEVELOPER"];
let currentIndex = 0;

const changingTextElement = document.querySelector(".changing-text");

function changeText() {
    changingTextElement.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 1200);

changeText();
