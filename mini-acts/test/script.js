// script.js

function changeContent(newContent) {
    const contentContainer = document.getElementById('contentContainer');
    
    // Create a temporary element to measure the new width
    const tempContainer = document.createElement('div');
    tempContainer.style.display = 'inline-block';
    tempContainer.style.visibility = 'hidden';
    tempContainer.style.whiteSpace = 'nowrap';
    tempContainer.style.padding = '10px';
    tempContainer.style.border = '1px solid #ccc';
    tempContainer.textContent = newContent;
  
    document.body.appendChild(tempContainer);
    
    // Get the new width based on the temporary element
    const newWidth = tempContainer.offsetWidth + 'px';
    
    // Remove the temporary element
    document.body.removeChild(tempContainer);
  
    // Set the new content and update the width with a transition
    contentContainer.style.width = newWidth;
    contentContainer.textContent = newContent;
  }
  