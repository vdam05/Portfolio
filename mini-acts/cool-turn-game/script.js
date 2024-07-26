/*Menu Screen*/
const startGameButton = document.querySelector(".menu-screen button:nth-of-type(1)");
const loadGameButton = document.querySelector(".menu-screen button:nth-of-type(2)");
const credits = document.querySelector(".menu-screen button:nth-of-type(3)");
const mainButtons = [startGameButton, loadGameButton, credits];
const introName = document.querySelector(".intro"); 
const toggleMenu = () => {
    startGameButton.classList.add("start-game");
    loadGameButton.classList.add("load-game");
    credits.classList.add("credit-game");
};
introName.addEventListener("click", toggleMenu);