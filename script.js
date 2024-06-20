//Variables
let colors = ["red", "blue", "green", "cyan", "blueviolet", "brown"];
let index = 0;

/*---------------------------INTRO--------------------------------------*/ 
let specialEffectName = document.querySelector("#clickable");
specialEffectName.addEventListener('click', changeColors);
function changeColors() {
    index++;
    if (index >= (colors.length)) {
        index = 0;
    } 
    specialEffectName.style.color = colors[index];
    
}
/*---------------------------INTRO--------------------------------------*/ 

/*---------------------------PROJECTS--------------------------------------*/ 
let changeImage = document.querySelector(".projects-image");
let option = document.querySelectorAll('.switching input[type="radio"]');
option.addEventListener('click', switchImage);
function switchImage(e) {
    const currentImage = "";
    currentImage += 
    changeImage.style.backgroundImage = url(`./images/project-imgs/${current-image}.png`);
}
/*---------------------------PROJECTS--------------------------------------*/ 

