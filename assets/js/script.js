// Basic Application Use 
import {
    generateBtnEl,
    clearListBtnEl,
    clearSavesEl,
    searchSelectionEl,
    savedContentEl,
    savedCardEl,
    textAreaEl,
    mobileGenBtnEl,
    limitNotifyEl,
    placeholderTextEl,
    closeModalEl,
    secondCloseButtonEl
} from './dom-elements.js';

// localStorage 
import { saveToLocalStorage, loadFromLocalStorage, createSavedContentEl } from './localstorage.js';

// Dungeon Parameters
import {
    interiorDungeonThemes,
    exteriorDungeonThemes,
    monsterTypes,
    trapTypes,
    lootType,
    interiorAmbiance,
    exteriorAmbiance,
    areaDifficulty,
} from './dungeon-parameters.js';

// Modal-Handler
import {
    closeModal,
    showClearSavesConfirmation,
    emptyForm,
    showInitialModal
} from './modal-handler.js';

// Array that collects all existing Dungeon Parameters 
const dungeonInfo = [
    interiorDungeonThemes,
    exteriorDungeonThemes,
    monsterTypes,
    trapTypes,
    lootType,
    exteriorAmbiance,
    interiorAmbiance,
    areaDifficulty
];

// Array for generated elements on the list
const generatedElements = [];

// Retrieve value from localStorage otherwise create empty array
export let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

// // Retrieve value from localStorage, default 1 if no value is found
export let savedItemNum = parseInt(localStorage.getItem('savedItemNum')) || 1;

// Counter for generating unique IDs
let idCounter = 0;

// Function to generate a unique ID
const generateUniqueID = () => `generated-${idCounter++}`;

// Function to create and append generated text
const appendGeneratedText = (generatedText) => {
    // Create list element
    const generatedListItem = createListElement(generatedText);
    
    // Add elementObject to generatedElements array
    const elementObject = { id: generateUniqueID(), generatedText: generatedListItem };
    generatedElements.push(elementObject);
    
    // When the generatedList overexceeds ten generated listItems 
    if (generatedElements.length > 10) {
        // Use shift() to remove the first element from the array
        const oldestElement = generatedElements.shift();
        // Remove the oldestElement's text from the HTML
        textAreaEl.removeChild(oldestElement.generatedText);
        // Remove the oldestElement's object from localStorage
        localStorage.removeItem(oldestElement.id);
    }

    // Add red flashing effects to the earliest generated listItem
    if (generatedElements.length >= 9) {
        const secondElement = generatedElements[0];
        secondElement.generatedText.classList.add('flashingEffect');
    }

    // Append to textAreaEl
    textAreaEl.append(generatedListItem);
};

// Function to create a list element
const createListElement = (generatedText) => {
    const generatedListItem = document.createElement('li');
    generatedListItem.classList.add('text-center', 'listStyle', 'border','border-dark', 'rounded', 'saveGenContent');
    generatedListItem.id = generateUniqueID();

    // Create and append span element
    const spanEl = document.createElement('span');
    spanEl.textContent = generatedText;
    generatedListItem.appendChild(spanEl);

    // When generatedEl is clicked, pass to savedContentList to process data
    generatedListItem.addEventListener('click', () => {
        savedContentList(generatedListItem, savedData);
    });

    // Append to textAreaEl
    return generatedListItem;
};

// Create 'savedContentList' section that uses savedContent to generate HTML list items for future calls
const savedContentList = (generatedEl, savedData) => {
    // Check if the savedData array already contains an object with the same text property
    const alreadyExists = savedData.some(savedObj => savedObj.text === generatedEl.textContent);

    // If alreadyExists is true return nothing and console.log the info
    if (alreadyExists) {
        console.log('Content already saved');
        return;
    }

    // Object that collects the text and ID, will be stored in an array
    let savedObj = {
        text: generatedEl.textContent,
        id: savedItemNum
    };

    // Create and append generatedListEl to HTML
    const generatedListEl = createSavedContentEl(savedObj);
    savedContentEl.append(generatedListEl);

    // Add savedObj to the savedData array
    savedData.push(savedObj);
    savedItemNum++;

    // Save the array to localStorage
    saveToLocalStorage(savedData, savedItemNum);
};

// Recreate the textContent from generatedEl when invoked
export const showSavedContent = (savedObj) => {
    const remadeEl = document.createElement('li');
    remadeEl.classList.add('text-center', 'listStyle', 'border', 'border-dark', 'rounded', 'remadeEl');

    const spanEl = document.createElement('span');
    spanEl.textContent = savedObj.text;

    // Append span element to li element & Append remadEl & it's children to textAreaEl
    remadeEl.appendChild(spanEl);
    textAreaEl.append(remadeEl);

    // Hide notifications
    limitNotifyEl.classList.add('hidden');
    placeholderTextEl.classList.add('hidden');
};

// Function to handle deletion of a single saved item
export const handleDelete = (containerDiv, savedObj) => {
    // Remove HTML
    containerDiv.remove();

    // Collect unique ID to delete it from localStorage
    const saveId = savedObj.id;

    // Locate the index of element with the matching ID in savedData
    const index = savedData.findIndex(item => item.id === saveId);

    if (index !== -1) {
        // Remove the element from the savedData array
        savedData.splice(index, 1);

        // Update array to localStorage
        saveToLocalStorage(savedData);

        // Check if savedData length is 0
        if (savedData.length === 0) {
            // Hide the saved card
            savedCardEl.classList.add('hidden');
        }
    }
};

// clearList empties the array and sets textAreaEl to an empty string
export const clearList = () => {
    generatedElements.length = 0;
    textAreaEl.innerHTML = '';
    limitNotifyEl.classList.add('hidden');
    placeholderTextEl.classList.remove('hidden');
};

// Build form select functionality
const generateButtonHandler = () => {
    // Remove any existing 'remadeEl' 
    const existingRemadeEl = document.querySelector('.remadeEl');

    if (existingRemadeEl) {
        existingRemadeEl.remove();
    };

    // remove hidden and show user a notification
    limitNotifyEl.classList.remove('hidden');

    // Add hidden to the placeholder
    placeholderTextEl.classList.add('hidden');

    // Collect the value from HTML formSelect and clear searchSelectionEl afterwards 
    let generateParam = searchSelectionEl.value;

    // generate based by input
    switch (generateParam) {
        case 'entireScenario':
            generateDungeon();
            break;
        case 'dungeonTheme':
            generateDungeonTheme();
            break;
        case 'roomNum':
            generateRoomAmount();
            break;
        case 'difficulty':
            generateDifficulty();
            break; 
        case 'monsterType':
            generateMonsterType();
            break;
        case 'checkTrap': 
            generateTrap();
            break;
        case 'loot':
            generateLoot();
            break;
        default: 
        emptyForm();
        limitNotifyEl.classList.add('hidden');
        placeholderTextEl.classList.remove('hidden');
    };
};

// generate every topic all at once 
const generateDungeon = () => {
    const numberOfRooms = setRoomAmount();
    const theme = setTheme();
    const ambiance = setAmbiance();
    const monstersArr = setMonsterType();
    const monsterStr = formatMonsterStr(monstersArr);
    const trap = setTrap();
    const lootItem = setLoot();
    const difficulty = setDifficulty();

    // ternary operator is checking whether traps are in or not
    appendGeneratedText(`You have entered a ${theme} with ${numberOfRooms} ${numberOfRooms === 1 ? 'noteworthy area.' : 'noteworthy areas.'} ${ambiance} Be cautious of the ${monsterStr} that may lurk about. ${trap ? ` You're bound to run into a ${trap} Trap somewhere.` : ''} ${difficulty} Perhaps you shall find ${lootItem} amidst the shadows.`);
};

// generate theme
const generateDungeonTheme = () => {
    const theme = setTheme();
    const ambiance = setAmbiance();
    appendGeneratedText(`You have entered a ${theme}. ${ambiance}`);

};

// generate room amount
const generateRoomAmount = () => {
    const numberOfRooms = setRoomAmount();
    appendGeneratedText(`You have entered an area with ${numberOfRooms} unique locations`);
};

// select difficulty at random 
const generateDifficulty = () => {
    const difficulty = setDifficulty();
    appendGeneratedText(`${difficulty}`);
};

// generate monster type 
const generateMonsterType = () => {
    const monstersArr = setMonsterType();
    const monsterStr = formatMonsterStr(monstersArr);
    appendGeneratedText(`You have entered an area infested with ${monsterStr}`);
};

// generate and determine if traps are present
const generateTrap = () => {
    const trap = setTrap();

    if (trap === null || trap === undefined) {
        appendGeneratedText(`You have entered a dungeon with no traps`);
    } else if (trap) {
        appendGeneratedText(`You have entered a dungeon with a ${trap} Trap somewhere`);
    };
};

// generate loot
const generateLoot = () => {
    const lootItem = setLoot();
    appendGeneratedText(`You can find a ${lootItem} somewhere here!`);
};

// getRandomItem rounds off and selects a random number within an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Randomly select room amount 
const setRoomAmount = () =>  Math.floor(Math.random() * 30) + 1;

// Randomly select theme
const setTheme = () => {
    let dungeonLocation = randomChance();

    // If True, return exterior dungeon themes
    if (dungeonLocation) {
        return getRandomItem(dungeonInfo[0]);
    } else {
        // If false, return interior dungeon themes
        return getRandomItem(dungeonInfo[1]);
    };
};

// Randomly select monster type
const setMonsterType = () => {
    // Create an empty array to store monster types
    const monsterArr = [];

    // make a copy of the monsterTypes array
    const monsterTypesCopy = monsterTypes.slice();

    // initialize an empty array to store used monster types
    const usedMonsterTypes = [];

    // Function returns random monsterType and ensures it hasn't been selected twice
    const getRandomMonsterType = () => { 
        // if all monster types have been used, reset the usedMonsterTypes and monsterTypesCopy arrays
        if (monsterTypesCopy.length === 0) {
            // Resets the usedMonsterTypes to an empty array. Ensures no repeat for any monster type
            usedMonsterTypes.length = 0;
            // Reset monsterTypesCopy array to original contents. splice() method used to modify the array in place, starting from index 0 and removing monsterTypes.length elements. 
            // Then, using the spread operator ..., insert all elements of monsterTypes at the beginning of array
            monsterTypesCopy.splice(0, monsterTypes.length, ...monsterTypes);
        };

        // Generate a random index to select a monster type from the global monsterTypes array
        const randomIndex = Math.floor(Math.random() * monsterTypesCopy.length);
        // Collect the monster type from randomIndex 
        const randomMonsterType = monsterTypesCopy[randomIndex];

        // If monsterType has already been used, recursively call the function again to get a new type
        if(usedMonsterTypes.includes(randomMonsterType)) {
            return getRandomMonsterType();
        } else {
            usedMonsterTypes.push(randomMonsterType);
            return randomMonsterType;
        };
    };

    // Randomly select a number between 1 and 3, determines how many monsters are around
    const randomAmount = Math.floor(Math.random() * 3) + 1;

    // Loop through randomAmount and add random monsters to the monsterArr
    for (let i = 0; i < randomAmount; i++) {
        const randomMonsterType = getRandomMonsterType();
        monsterArr.push(randomMonsterType);       
    }

    // Return the array
    return monsterArr; 
};

// Randomly determine if traps are active in dungeon, then generate trap type
const setTrap = () => {
    let trapBoolean = randomChance();

    if (trapBoolean) {
        return getRandomItem(dungeonInfo[3]);
    } else {
        return null;
    }
};

// Randomly select loot type
const setLoot = () => getRandomItem(dungeonInfo[4]);

// setAmbiance
const setAmbiance = (dungeonLocation) =>  { 
    // Check to see if dungeonLocation is true or false and pass array data appropriately
    let ambianceArray = dungeonLocation ? dungeonInfo[5] : dungeonInfo[6];
    return getRandomItem(ambianceArray);
};

// set difficulty
const setDifficulty = () => getRandomItem(dungeonInfo[7]);

// format monsterStr
const formatMonsterStr = (monstersArr) => {
    let monsterStr = '';
    
    if (monstersArr.length > 2) {
        // create new string with second to last element of monstersArr removed, joined with commas
        // then add 'and' before the last element of monstersArr
        monsterStr = `${monstersArr.slice(0, -1).join(', ')} and ${monstersArr.slice(-1)}`;
    } else {
        monsterStr = monstersArr[0];
    };

    return monsterStr;
};
    
// randomChance will be true/false roughly 50% of the time.
const randomChance = () => { return Math.random() < 0.5 };

// Event Listeners
generateBtnEl.addEventListener('click', generateButtonHandler);
mobileGenBtnEl.addEventListener('click', generateButtonHandler);
clearListBtnEl.addEventListener('click', clearList); 
clearSavesEl.addEventListener('click', showClearSavesConfirmation);
searchSelectionEl.addEventListener('change', () => generateBtnEl.focus());
closeModalEl.addEventListener('click', closeModal);
secondCloseButtonEl.addEventListener('click', closeModal);
document.addEventListener('DOMContentLoaded', showInitialModal);

loadFromLocalStorage();