// Basic Application Use 
import { modalNotifyEl, modalHeaderEl, modalTextEl, modalActionBtnEl } from './dom-elements.js';

import { clearLocalStorage } from './localstorage.js';

import { generateUniqueID, createListElement, savedContentList, showSavedContent, handleDelete, clearList, appendGeneratedText } from './utilities.js';

// Modal Functionality 
export const showModal = () => modalNotifyEl.classList.add('show');
export const closeModal = () => modalNotifyEl.classList.remove('show');

// Show initial modal on app load
export const showInitialModal = () => {
    modalHeaderEl.textContent = '🧙‍♂️ Welcome to Adventure Alchemist!';
    modalTextEl.textContent = 'Embark on an adventure of mystical wonders! Select an option from the sacred Arcane Insights to unveil adventures of epic or mundane proportions. Choose wisely, for the Arcane Insight shall divine your path through enchanted realms and perilous quests. So step forth, brave traveler, and let the arcane knowledge illuminate your journey! ✨';
  
    modalActionBtnEl.classList.remove('btn-outline-danger');
    modalActionBtnEl.classList.add('hidden');
  
    showModal();
};

// Popup if form is empty 
export const emptyForm = () => {
    modalHeaderEl.textContent = 'Please select an insight';
    modalTextEl.textContent = 'The form is currently empty. Select an insight and begin.';
    modalActionBtnEl.classList.add('hidden');
    showModal();
};

// Check with users if they want to clear save list
export const showClearSavesConfirmation = () => {
    modalHeaderEl.textContent = "🔍 Let's Double Check... 🔍";
    modalTextEl.textContent = "⚠️ Clicking 'Confirm' will wipe away ALL your cherished saves. Are you absolutely certain about this daring decision?";

    modalActionBtnEl.classList.add('btn-outline-danger');
    modalActionBtnEl.classList.remove('hidden');
    modalActionBtnEl.textContent = 'Clear Saves';

    modalActionBtnEl.addEventListener('click', clearLocalStorage);
};