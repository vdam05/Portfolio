/*---------------------------INTRO--------------------------------------*/ 
//Changing the color of the name
let colors = ["red", "blue", "green", "cyan", "blueviolet", "brown"];
let index = 0;
let specialEffectName = document.querySelector("#clickable");
specialEffectName.addEventListener('click', changeColors);
function changeColors() {
    index++;
    if (index >= (colors.length)) {
        index = 0;
    } 
    specialEffectName.style.color = colors[index];
    
}
//Changing the color of the header menu items
let listItemSelect = document.querySelectorAll(".list a");
listItemSelect.forEach(item => item.addEventListener('click', menuSelected));
function menuSelected (e) { 
    for (const item of listItemSelect) {
        item.style.color = "#e0e0e0";
        item.style.textUnderlineOffset = "0%";
        item.style.textDecoration = "none";
    }
    e.currentTarget.style.color = "rgb(250, 250, 102)";
    e.currentTarget.style.textDecoration = "underline";
    e.currentTarget.style.textUnderlineOffset = "25%";
}
/*---------------------------INTRO--------------------------------------*/ 

/*---------------------------SKILLS--------------------------------------*/ 

/*---------------------------SKILLS--------------------------------------*/ 

/*---------------------------PROJECTS--------------------------------------*/ 
//Switching project image and captions
let captionArray = [
    {
        name: "image1",
        caption: "This is my first Java project about making a basic game using StdDraw",
    },
    {
        name: "image2",
        caption: "My website built with plain HTML, CSS, and JavaScript",
    },
];
let projectButtons = document.querySelectorAll(".imageId");
let projectImage = document.querySelector(".projects-image");
let projectImageCaption = document.querySelector(".project-image-cap");
projectButtons.forEach((button) => button.addEventListener("click", (e) => {
    const chosenButton = e.currentTarget;
    const chosenImg = `url(./images/project-imgs/${chosenButton.id}.png)`;
    let chosenCaption = "";
    projectImage.style.backgroundImage = chosenImg;
    projectButtons.forEach((button) => {
        button.style.backgroundColor = "white";
    })
    chosenButton.style.backgroundColor = "red";
    projectImageCaption.innerText = "";
    try {
        chosenCaption = captionArray.find((element) => element.name === chosenButton.id).caption;
    } catch (error) {
        chosenCaption= "Seems like there is nothing here??? Check out my other things then.";
    }
    projectImageCaption.innerText = chosenCaption;
}));
/*---------------------------PROJECTS--------------------------------------*/ 

/*---------------------------CONTACTS--------------------------------------*/ 

/*---------------------------CONTACTS--------------------------------------*/ 



