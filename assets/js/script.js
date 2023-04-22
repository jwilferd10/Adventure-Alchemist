const generateBtnEl = document.getElementById('generateBtn');
const textAreaEl = document.getElementById('textArea');

const genContent = () => {
    let textTest = document.createElement('p');
    textTest.innerHTML = 'Hello world';

    textAreaEl.append(textTest);
}

// Create a function that picks a number between 0-100 standardly

    // Based on user input allow a user to customize the nubmer cap

// Create an array that contains multiple dungeon themes

// Create a function that randomly selects items in an array

// Create an array that contains multiple monster types

// Create a function that randomly selects at least 3 monster types

// Randomly determine if traps are true/false

// consider creating a basic loot system

generateBtnEl.addEventListener('click', genContent);