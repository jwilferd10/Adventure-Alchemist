// Basic Application Use 
import { clearSavesEl, savedContentEl, savedCardEl } from './dom-elements.js';
import { savedData, savedItemNum, clearList, showSavedContent, handleDelete } from './script.js';

// Function to save data to localStorage
export let saveToLocalStorage = (savedData) => {
    // Use console.log to check content
    console.log('Saving to localStorage:', savedData);
    console.log('Saving savedItemNum to localStorage:', savedItemNum);

    localStorage.setItem('savedData', JSON.stringify(savedData));
    localStorage.setItem('savedItemNum', savedItemNum.toString());
};

// Function to load data from localStorage
export let loadFromLocalStorage = () => {
    let savedContent = JSON.parse(localStorage.getItem('savedData'));

    // Check savedContent
    console.log('Retrieved savedContent;', savedContent);

    if (!savedContent) {
        console.log('No saved content has been found in localStorage');
        return;
    }

    // Run createSavedContentEl for each savedContent and append it
    savedContent.forEach((item) => {
        const savedObjElement = createSavedContentEl(item);
        savedContentEl.append(savedObjElement);
    });

    // Test logs
    console.log('Updated savedData:', savedData);
    console.log('Updated savedItemNum:', savedItemNum);
};

// Append an HTML element to 'Saved Content'
export const createSavedContentEl = (savedObj) => {
    // Create a container div to hold the list item and the delete button
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('d-flex', 'flex-column', 'align-items-center');

    // Set the unique ID as a data attribute on the container div
    containerDiv.setAttribute('data-save-id', savedObj.id);

    // Create the delete button element
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'border', 'border-dark', 'rounded', 'btn-danger');
    deleteButton.addEventListener('click', () => {
        handleDelete(containerDiv, savedObj);
    });

    containerDiv.appendChild(deleteButton);

    // Create a list element
    const generatedListItem = document.createElement('li');
    generatedListItem.classList.add('text-center', 'listStyle', 'savedItem', 'border', 'border-dark', 'rounded');

    generatedListItem.addEventListener('click', () => {
        clearList();
        showSavedContent(savedObj);
    });

    // Increment every time an element is created
    const spanEl = document.createElement('span');
    spanEl.textContent = `Save ${savedObj.id}`;

    // Append span element to generatedListItem
    generatedListItem.appendChild(spanEl);

    containerDiv.appendChild(generatedListItem);

    savedCardEl.classList.remove('hidden');
    clearSavesEl.classList.remove('hidden');

    return containerDiv;
};

// clearLocalStorage empties savedContent's list and clears up localStorage, then hide the clearSaves btn
export const clearLocalStorage = () => {
    // Clear the saves container
    savedContentEl.innerHTML = '';

    // Clear the generatedElements array
    savedData.length = 0;

    // Reset the generated item counter
    savedItemNum = 1;

    // Hide the saved card and clear saves button
    savedCardEl.classList.add('hidden');
    clearSavesEl.classList.add('hidden');

    localStorage.clear();
};
