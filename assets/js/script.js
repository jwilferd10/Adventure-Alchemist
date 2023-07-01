// DOM Elements for basic application use 
const generateBtnEl = document.getElementById('generateBtn');
const clearListBtnEl = document.getElementById('clearListBtn');
const clearSavesEl = document.getElementById('clearSaves');
const searchSelectionEl = document.getElementById('searchSelection');
const savedContentEl = document.getElementById('savedContent');
const savedCardEl = document.getElementById('savedCard');
const textAreaEl = document.getElementById('textArea');

// DOM Elements for Notifications
const limitNotifyEl = document.getElementById('limitNotify');
const placeholderTextEl = document.getElementById('placeholderText');
const modalNotifyEl = document.getElementById('modalNotify');
const modalHeaderEl = document.getElementById('modalHeader');
const modalTextEl = document.getElementById('modalText');
const modalActionBtnEl = document.getElementById('modalActionBtn');
const closeModalEl = document.querySelector('#modalNotify .modal-footer .btn-secondary');
const secondCloseButtonEl = document.querySelector('#modalNotify .modal-header .close');

// Dungeon Parameters
const interiorDungeonThemes = ['Abandoned Manor', 'Abyssal Fortress', 'Ancient ruins', 'Bandit Hideout', 'Besieged Fortress', 'Castle Ruins', 'Catacombs', 'Crypts', 'Drow City', 'Desert Tomb', 'Dwarf mine', 'Forsakened Cathedral', 'Goblin stronghold', 'Haunted mansion', 'Ice Cave', 'Jungle Temple', 'Labyrinth', 'Necropolis', 'Orc stronghold', 'Palace dungeon', 'Prison Riot', 'Sewer system', 'Set of Caverns', 'Sinister Asylum', 'Underwater city', 'Vampire crypt', 'Wizard\'s tower', 'Witch\'s Coven', 'Zombie infested lab'];
const exteriorDungeonThemes = ['Active Battlefield', 'Distant Battlefield', 'Elemental Plane', 'Forgotten Graveyard', 'Forest', 'Frozen Wasteland', 'Ghost Town', 'Graveyard', 'Jungle', 'Majestic Castle Grounds', 'Misty Mountains', 'Mysterious Island', 'Oceanic Abyss', 'Part of Hell', 'Part of the Abyss', 'Part of the Shadowplane', 'Part of the Underdark', 'Ruined Cityscape', 'Snowy Tundra', 'Volcanic Island', 'Windswept Desert'];
const monsterTypes = ['Undead', 'Abberations', 'Dragons', 'Constructs', 'Fiends', 'Giants', 'Fey', 'Elementals', 'Beasts', 'Humanoids'];
const trapTypes = ["Pit", "Arrow", "Poison Dart", "Swinging Blade", "Net", 'Frost', 'Fire', 'Acid', 'Electric', 'Explosive'];
const lootType = [
    "a plethora of gold coins", 
    "a single coin", 
    "magical equipment", 
    "a crate filled with potions of healing", 
    "a book of offensive magic", 
    "a book of defensive magic", 
    "an ancient scroll", 
    "a variety of gems", 
    "an enchanted weapon", 
    "a strange key",
    "an ornate box containing unknown contents",
    "a shimmering crystal orb",
    "a small glowing statue",
    "a strange deck of cards with unknown effects",
    "an ancient tome with forbidden knowledge",
    "an unusual wand with unknown properties",
    "an otherworldly artifact"
];

const interiorAmbiance = [
    "Shadows twist and writhe on the walls like living things.",
    "The air hums with a strange energy, making the hairs on the back of your neck stand up.",
    "A thick silence hangs heavy in the air, broken only by the sound of your own footsteps.",
    "A pervasive sense of unease settles over you like a heavy blanket.",
    "The darkness is oppressive and seems to swallow sound.",
    "The ground is spongy and moist, like walking on a soaked sponge.",
    "The air is cool and crisp, with a hint of woodsmoke in the distance.",
    "The ground is littered with small rocks and pebbles, crunching beneath your feet.",
    "The air is heavy with the scent of damp earth and decaying leaves.",
    "The sound of dripping water echoes through the chamber, adding to the sense of isolation.",
    "The musty scent of age and decay fills your nostrils, making you want to cover your nose and mouth.",
    "The area is suffused with a dim, flickering light that seems to come from nowhere.",
    "The air feels thick and heavy, like you're wading through water.",
    "The walls are covered in strange, arcane symbols that seem to pulse with a life of their own.",
    "The silence is broken by a sudden creaking sound.",
    "The only sound you can hear is the faint, steady beating of your own heart.",
    "The area is filled with a low, buzzing hum that seems to vibrate through your bones.",
    "The shadows seem to move and shift, playing tricks on your eyes and your mind.",
    "The air is stale and stagnant, as if it hasn't been disturbed in years.",
    "You feel as though you're being watched, even though there's no one there.",
    "The area is so quiet you can hear the rustle of your clothes as you move.",
    "The walls are made of a rough-hewn stone that seems to absorb the light.",
    "The air is thick with the scent of incense and old, worn books.",
    "The area is small and cramped, making you feel trapped and claustrophobic.",
    "The space is filled with the sound of creaking floorboards, as if the area is alive.",
    "The air is filled with the soft rustle of paper, as if someone is reading a book nearby.",
    "The area is bathed in a sickly green light, casting everything in an eerie glow.",
    "The ceiling is so high you feel as though you're standing in a cathedral.",
];

const exteriorAmbiance = [
    'The mist creeps in, cloaking everything in a ghostly haze.',
    'The world is quiet and the silence is loud.',
    'The air is thick and humid, like walking through a swamp.',
    'The fog is thick and clings to everything like a damp veil.',
    'The sky is a deep shade of blue, dotted with white fluffy clouds.',
    'The air is still, heavy with a sense of anticipation.',
    'The sky is a murky gray, casting a somber tone over everything.',
    'An eerie silence hangs over the landscape, broken only by the rustle of leaves.',
    'The ground is slick with dew, making each step treacherous.',
    'A thick mist rises from the ground, obscuring everything beyond a few feet.',
    'A sense of foreboding settles over you, like a weight on your chest.',
    'The wind is picking up, howling through the trees and stirring up leaves.',
    'The air is thick with the scent of earth and wet stone.',
    'The clouds hang low in the sky, casting everything in a dim, gray light.',
    'The sound of rushing water echoes through the landscape, soothing and ominous at the same time.',
    'The ground is soft and yielding, like walking on a sponge.',
    'A sense of unease settles over you, as if you are being watched.',
    'The landscape is barren and desolate, a testament to some long-forgotten disaster.',
    'The sounds of battle can be heard all around, with swords clashing and arrows whistling through the air.',
    'Corpses new and old litter the land, death is in every corner.',
    'Pervasive heat covers the land, engulfing everything in its scorching embrace.'
];

const areaDifficulty = [
    "This location looks like a cakewalk.",
    "This location appears to be relatively simple, but don't let your guard down.",
    "This location seems to have a moderate level of difficulty, so stay alert.",
    "This location looks like it will require some skill and strategy to overcome.",
    "This location appears to be a serious challenge that will test your abilities to the limit.",
    "This location seems to be deceptively easy, so don't get overconfident.",
    "This location appears to be filled with unexpected challenges, so be prepared for anything.",
    "This location looks like it will be a tough but fair test of your abilities.",
    "This location looks like it will require both strength and intelligence to overcome.",
    "This location seems to be a true trial of your skills, so be ready to give it your all."
];

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
let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

// Retrieve value from localStorage, default 1 if no value is found
let savedItemNum = parseInt(localStorage.getItem('savedItemNum')) || 1;

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

    // When generatedListEl is clicked, show the text content
    generatedListEl.addEventListener('click', () => {
        clearList();
        showSavedContent(savedObj);
    });

    // Add savedObj to the savedData array
    savedData.push(savedObj);
    savedItemNum++;

    // Save the array to localStorage
    saveToLocalStorage(savedData, savedItemNum);
};


// Append an HTML element to 'Saved Content'
const createSavedContentEl = (savedObj) => {
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

// Recreate the textContent from generatedEl when invoked
const showSavedContent = (savedObj) => {
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

// Function to save data to localStorage
const saveToLocalStorage = (savedData) => {
    // Use console.log to check content
    console.log('Saving to localStorage:', savedData);
    console.log('Saving savedItemNum to localStorage:', savedItemNum);

    localStorage.setItem('savedData', JSON.stringify(savedData));
    localStorage.setItem('savedItemNum', savedItemNum.toString());
};

// Function to load data from localStorage
const loadFromLocalStorage = () => {
    let savedContent = JSON.parse(localStorage.getItem('savedData'));

    // Check savedContent
    console.log('Retrieved savedContent;', savedContent);

    if (!savedContent) {
        console.log('No saved content has been found in localStorage');
        return;
    }

    // Run createSavedContentEl for each savedContent
    savedContent.forEach((item) => {
        const savedObjElement = createSavedContentEl(item);

        // Clear textArea and show content
        savedObjElement.addEventListener('click', () => {
            clearList();
            showSavedContent(item);
        });

        savedContentEl.append(savedObjElement);
    });

    // Update the savedData array and savedItemNum from localStorage
    savedData = savedContent;
    savedItemNum = parseInt(localStorage.getItem('savedItemNum')) || 1;

    console.log('Updated savedData:', savedData);
    console.log('Updated savedItemNum:', savedItemNum);
};

// Function to handle deletion of a single saved item
const handleDelete = (containerDiv, savedObj) => {
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
    }
};

// Check with users if they want to clear save list
const checkClearSaves = () => {
    modalHeaderEl.textContent = "Let's Double Check..."
    modalTextEl.textContent = "Clicking 'Confirm' will clear ALL saves, are you sure?"

    modalActionBtnEl.classList.add('btn-outline-danger');
    modalActionBtnEl.textContent = 'Clear Saves';

    modalActionBtnEl.addEventListener('click', () => {
        clearLocalStorage();
    });
}

// Modal Visibility 
const closeModal = () => {
    modalNotifyEl.classList.remove('show');
    modalNotifyEl.style.display = 'none';
}

// clearLocalStorage empties savedContent's list and clears up localStorage, then hide the clearSaves btn
const clearLocalStorage = () => {
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

// clearList empties the array and sets textAreaEl to an empty string
const clearList = () => {
    generatedElements.length = 0;
    textAreaEl.innerHTML = '';
    limitNotifyEl.classList.add('hidden');
    placeholderTextEl.classList.remove('hidden');
};

// Build form select functionality
const generateButtonHandler = (event) => {
    event.preventDefault();

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
    // searchSelectionEl.value = '';

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
        alert('Please select a topic!');
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
clearListBtnEl.addEventListener('click', clearList); 
clearSavesEl.addEventListener('click', checkClearSaves);
searchSelectionEl.addEventListener('change', () => {
    generateBtnEl.focus();
});
closeModalEl.addEventListener('click', closeModal);
secondCloseButtonEl.addEventListener('click', closeModal);

loadFromLocalStorage();