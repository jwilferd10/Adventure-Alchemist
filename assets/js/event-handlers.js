import { generateBtnEl, clearListBtnEl, mobileGenBtnEl, clearSavesEl, searchSelectionEl, closeModalEl, secondCloseButtonEl } from './dom-elements.js';
import { closeModal, showClearSavesConfirmation, emptyForm, showInitialModal } from './modal-handler.js';
import { generateButtonHandler } from './main.js'; 
import { clearList } from './utilities.js';


export const setupEventListeners = () => {
    // Event Listeners
    generateBtnEl.addEventListener('click', generateButtonHandler);
    mobileGenBtnEl.addEventListener('click', generateButtonHandler);
    clearListBtnEl.addEventListener('click', clearList); 
    clearSavesEl.addEventListener('click', showClearSavesConfirmation);
    searchSelectionEl.addEventListener('change', () => generateBtnEl.focus());
    closeModalEl.addEventListener('click', closeModal);
    secondCloseButtonEl.addEventListener('click', closeModal);
    document.addEventListener('DOMContentLoaded', showInitialModal);
};