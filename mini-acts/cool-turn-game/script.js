/*Menu Screen*/
const startGameButton = document.querySelector(".menu-screen button:nth-of-type(1)");
const loadGameButton = document.querySelector(".menu-screen button:nth-of-type(2)");
const credits = document.querySelector(".menu-screen button:nth-of-type(3)");
const buttonList = [startGameButton, loadGameButton, credits];
const introName = document.querySelector(".intro"); 
const toggleMenu = () => {
    buttonList.forEach((button) => {
        button.style.display = "block";
    });
    setTimeout(() => {
        startGameButton.classList.add("start-game");
     loadGameButton.classList.add("load-game");
        credits.classList.add("credit-game");
    }, 500);
};
introName.addEventListener("click", toggleMenu);
/*Start Game*/
class Game {

}
class Character {

}
class Card {
    constructor(type, property) {
        this.type = type;
        this.property = property;
    }
}
class Enemies {
    constructor(type, positions) {
        this.type = type;
        this.positions = {
            x,y,
        }
    }
}