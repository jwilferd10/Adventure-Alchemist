// Basic Application Use 
import { savedContentEl, savedCardEl, textAreaEl, limitNotifyEl, placeholderTextEl } from './dom-elements.js';

// localStorage 
import { saveToLocalStorage, createSavedContentEl } from './localstorage.js';

// Retrieve value from localStorage otherwise create empty array
export let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

// // Retrieve value from localStorage, default 1 if no value is found
export let savedItemNum = parseInt(localStorage.getItem('savedItemNum')) || 1;

// Array for generated elements on the list
const generatedElements = [];

// Counter for generating unique IDs
let idCounter = 0;

// Function to reset savedItemNum
export const resetSavedItemNum = () => { savedItemNum = 1 };

// Function to generate a unique ID
export const generateUniqueID = () => `generated-${idCounter++}`;

// Function to create a list element
export const createListElement = (generatedText) => {
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
export const savedContentList = (generatedEl, savedData) => {
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

// Function to create and append generated text
export const appendGeneratedText = (generatedText) => {
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