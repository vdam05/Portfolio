/*---------------------------HEADER--------------------------------------*/ 
//For hamburger icon
const hamburger = document.querySelector(".nav-unit");
const list = document.querySelector(".list");
const listItem = document.querySelectorAll(".list a");
const smallListClick = () => {
    hamburger.classList.toggle("hamburger-clicked"); 
    list.classList.toggle("list-small");
}
hamburger.addEventListener('click', smallListClick);
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
    setTimeout(smallListClick, 750);
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
const projectButtons = document.querySelectorAll(".imageId");
const projectImage = document.querySelector(".projects-image");
const projectImageCaption = document.querySelector(".project-image-cap");
class Caption {
    constructor(name, caption, specific) {
        this.name = name;
        this.caption = caption;        
        this.specific = specific || 0; 
        this.fullCaption = caption; //default fullCaption
    }
    //Function to add a link to a word (specific)
    constructCap(link) {
        const htmlCap = `<a href=${link} target="_blank" class="caption-extra">${this.specific}</a>`;
        this.fullCaption = this.caption.concat(htmlCap);
    }
}
//List of captions
const caption1 = new Caption("image1", "Making a small space game using Java");
const caption2 = new Caption("image2", "This website using HTML, CSS, and ", "JavaScript");
caption2.constructCap("https://vdam05.github.io/Chill-And-Random/");
//
const captionArray = [caption1, caption2];
const mainCaption = (e) => {
    let chosenCaption = "";
    const chosenButton = e.currentTarget;
    //Helpers
    const resetButtons = (button) => {
        projectButtons.forEach((button) => button.style.backgroundColor = "white");
        button.style.backgroundColor = "red";
    }
    const selectImg = (button) => {
        const chosenImg = `./images/project-imgs/${button.id}.png`;
        projectImage.src = chosenImg;
    }
    resetButtons(chosenButton);
    selectImg(chosenButton);
    const defaultCaption = "Empty here...";
    try {
        chosenCaption = captionArray.find((element) => element.name === chosenButton.id).fullCaption;
    } catch (error) {
        chosenCaption = defaultCaption;
    }
    projectImageCaption.innerHTML = chosenCaption;
    projectImage.alt = chosenCaption != defaultCaption ? chosenCaption : defaultCaption;
};
projectButtons.forEach((button) => button.addEventListener("click", mainCaption));
/*---------------------------PROJECTS--------------------------------------*/ 

/*---------------------------CONTACTS--------------------------------------*/
/*---------------------------CONTACTS--------------------------------------*/ 



