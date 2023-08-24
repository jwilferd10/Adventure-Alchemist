// Basic Application Use 
import { generateBtnEl, clearListBtnEl, clearSavesEl, searchSelectionEl, mobileGenBtnEl, limitNotifyEl, placeholderTextEl, closeModalEl, secondCloseButtonEl } from './dom-elements.js';

// localStorage 
import { loadFromLocalStorage } from './localstorage.js';

// Dungeon Parameters
import { interiorDungeonThemes, exteriorDungeonThemes, monsterTypes, trapTypes, lootType, interiorAmbiance, exteriorAmbiance, areaDifficulty } from './dungeon-parameters.js';

// Modal-Handler
import { closeModal, showClearSavesConfirmation, emptyForm, showInitialModal } from './modal-handler.js';

// Scenario-Generation
import { generateDungeon, generateDungeonTheme, generateRoomAmount, generateDifficulty, generateMonsterType, generateTrap, generateLoot } from './scenario-generation.js';

// Utility Import
import { clearList } from './utilities.js';

import { setupEventListeners } from './event-handlers.js';

// Array that collects all existing Dungeon Parameters 
export const dungeonInfo = [
    interiorDungeonThemes,
    exteriorDungeonThemes,
    monsterTypes,
    trapTypes,
    lootType,
    exteriorAmbiance,
    interiorAmbiance,
    areaDifficulty
];

// Build form select functionality
export const generateButtonHandler = () => {
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

setupEventListeners();
loadFromLocalStorage();