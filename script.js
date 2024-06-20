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
let listItemSelect = document.querySelectorAll(".list-item");
listItemSelect.forEach(item => item.addEventListener('click', menuSelected));
function menuSelected (e) { //e for event
}
/*---------------------------INTRO--------------------------------------*/ 

/*---------------------------SKILLS--------------------------------------*/ 

/*---------------------------PROJECTS--------------------------------------*/ 
let imageSelections = document.querySelectorAll("#imageId");
imageSelections.forEach(selection => selection.addEventListener('checked'))

/*---------------------------PROJECTS--------------------------------------*/ 

