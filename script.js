/*---------------------------HEADER--------------------------------------*/ 
//For hamburger icon
const hamburger = document.querySelector(".nav-unit");
const list = document.querySelector(".list");
const listItem = document.querySelectorAll(".list a");
hamburger.addEventListener('click', () => {
    console.log("Clicked!"); //this works
    hamburger.classList.toggle("hamburger-clicked"); 
    list.classList.toggle("list-small");
});
//Changing the color of the header menu items
const listItemSelect = document.querySelectorAll(".list a");
listItemSelect.forEach(item => item.addEventListener('click', menuSelected));
function menuSelected (e) { 
    //Helper functions
    const colorReset = (item) => {
        item.style.color = "#e0e0e0";
        item.style.textUnderlineOffset = "0%";
        item.style.textDecoration = "none";
    }
    const colorChange = (item) => {
        item.style.color = "rgb(250, 250, 102)";
        item.style.textDecoration = "underline";
        item.style.textUnderlineOffset = "25%";
    }
    //
    for (const item of listItemSelect) {
        colorReset(item);
    }
    colorChange(e.currentTarget);
    list.classList.toggle("list-small");
    hamburger.classList.toggle("hamburger-clicked"); 
}
/*---------------------------HEADER--------------------------------------*/ 

/*---------------------------INTRO--------------------------------------*/ 
//Changing the color of the name
const colors = ["red", "blue", "green", "cyan", "blueviolet", "brown"];
let index = 0;
const specialEffectName = document.querySelector("#clickable");
specialEffectName.addEventListener('click', changeColors);
function changeColors() {
    index++;
    if (index >= (colors.length)) {
        index = 0;
    } 
    specialEffectName.style.color = colors[index];
    
}
/*---------------------------INTRO--------------------------------------*/ 

/*---------------------------SKILLS--------------------------------------*/
//About-me-paragraph with interactable heading
const mainHeader = document.querySelector(".about-me-paragraph h");
const appearingPar = document.querySelector(".about-me-paragraph p");
mainHeader.addEventListener("click", () => {
  appearingPar.classList.toggle("about-me-text");
}) 
//Interactable skills lists
const openList = (list) => {
    //Note: We are accessing list's objects
    const heading = list.querySelector(".prog-heading");
    const mainList = list.querySelector(".prog-list");
    list.classList.toggle("active"); //as a way to gauge status
    if (list.classList.contains("active")) {
        heading.style.transform = "translateY(-25%)";
        mainList.style.top = "0%";
    } else {
        heading.style.transform = "translateY(0%)";
        mainList.style.top = "100%";
    }
}

/*---------------------------SKILLS--------------------------------------*/ 

/*---------------------------PROJECTS--------------------------------------*/ 
//Switching project image and captions
const captionArray = [
    {
        name: "image1",
        caption: "This is my first Java project about making a basic game using StdDraw",
    },
    {
        name: "image2",
        caption: "My website built with plain HTML, CSS, and <strong class='javascript-extra'>JavaScript</strong>",
    },
];
const projectButtons = document.querySelectorAll(".imageId");
const projectImage = document.querySelector(".projects-image");
const projectImageCaption = document.querySelector(".project-image-cap");
const mainCaption = (e) => {
    const chosenButton = e.currentTarget;
    const chosenImg = `url(./images/project-imgs/${chosenButton.id}.png)`;
    let chosenCaption = "";
    projectImage.style.backgroundImage = chosenImg;
    projectButtons.forEach((button) => button.style.backgroundColor = "white");
    chosenButton.style.backgroundColor = "red";
    try {
        chosenCaption = captionArray.find((element) => element.name === chosenButton.id).caption;
    } catch (error) {
        chosenCaption= "Seems like there is nothing here??? Check out my other things then.";
    }
    projectImageCaption.innerHTML = chosenCaption;

};
projectButtons.forEach((button) => button.addEventListener("click", mainCaption));
/*---------------------------PROJECTS--------------------------------------*/ 

/*---------------------------CONTACTS--------------------------------------*/ 

/*---------------------------CONTACTS--------------------------------------*/ 



