let colors = ["red", "blue", "green", "cyan", "blueviolet", "brown", "white"];
let index = 0;
let specialEffect = document.querySelector("#clickable");
specialEffect.onclick = changeColors;

function changeColors() {
    index++;
    if (index >= (colors.length)) {
        index = 0;
    } 
    specialEffect.style.color = colors[index];
    
}