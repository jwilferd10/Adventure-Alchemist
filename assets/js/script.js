const generateBtnEl = document.getElementById('generateBtn');
const searchSelectionEl = document.getElementById('searchSelection');
const textAreaEl = document.getElementById('textArea');

// Dungeon Parameters
const dungeonThemes = ['Ancient ruins', 'Battlefield', 'Caverns', 'Catacombs', 'Crypts', 'Dark forest', 'Desert tomb', 'Drow City', 'Dwarf mine', 'Elemental plane', 'Ghost town', 'Goblin stronghold', 'Haunted mansion', 'Ice cave', 'Jungle temple', 'Labyrinth', 'Necropolis', 'Oceanic abyss', 'Orc stronghold', 'Palace dungeon', 'Sewer system', 'Underwater city', 'Vampire crypt', 'Wizard\'s tower', 'Zombie infested lab'];
const monsterTypes = ['Undead', 'Abberations', 'Dragons', 'Constructs', 'Fiends', 'Giants', 'Fey', 'Elementals', 'Beasts', 'Humanoids'];
const trapTypes = ["Pit", "Arrow", "Poison dart", "Swinging blade", "Net"];
const lootType = ["Gold coins", "Magic ring", "Potion of healing", "Scroll of fireball", "Jeweled sword"];
const ambiance = [
    'The mist creeps in, cloaking everything in a ghostly haze.',
    'Shadows twist and writhe on the walls like living things.',
    'The air hums with a strange energy, making the hairs on the back of your neck stand up.',
    'A thick silence hangs heavy in the air, broken only by the sound of your own footsteps.',
    'A pervasive sense of unease settles over you like a heavy blanket.',
    'The world is quiet and the silence is loud.',
    'The air is thick and humid, like walking through a swamp.',
    'The darkness is oppressive and seems to swallow sound.',
    'The ground is spongy and moist, like walking on a soaked sponge.',
    'The air is cool and crisp, with a hint of woodsmoke in the distance.',
    'The fog is thick and clings to everything like a damp veil.',
    'The ground is littered with small rocks and pebbles, crunching beneath your feet.',
    'The air is heavy with the scent of damp earth and decaying leaves.',
    'The sky is a deep shade of blue, dotted with white fluffy clouds.'
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
    dungeonThemes,
    monsterTypes,
    trapTypes,
    lootType,
    ambiance,
    areaDifficulty
];

// Array for generated elements on the list
const generatedElements = [];

// Build form select functionality
const generateButtonHandler = (event) => {
    event.preventDefault();

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
    }
};

// Function to create and append generated text
const generateAndAppendText = (text) => {
    // Apply unique ID to each generated content
    const id = Date.now().toString();
    const generatedText = createParagraphElement(text, id);
    const elementObject = { id, generatedText };
    generatedElements.push(elementObject);
    
    // When the generatedList overexceeds ten generated listItems 
    if (generatedElements.length > 10) {
        // Use shift() to remove the first element from the array
        const oldestElement = generatedElements.shift();
        // Remove the oldestElement's text from the HTML
        textAreaEl.removeChild(oldestElement.generatedText);
    }

    // Add red flashing effects to the earliest generated listItem
    textAreaEl.append(generatedText);
};

// Display generated content to HTML
const createParagraphElement = (generatedText, id) => {
    // create a p element using generatedText
    const generatedEl = document.createElement('li');
    generatedEl.textContent = generatedText;
    generatedEl.classList.add('text-center', 'listStyle', 'border');
    generatedEl.id = id

    // Append to textAreaEl
    return generatedEl;
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
    generateAndAppendText(`You have entered a ${theme} with ${numberOfRooms} rooms. ${ambiance} Be cautious of the ${monsterStr} that may lurk about. ${trap ? ` You're bound to run into a ${trap} trap somewhere.` : ''} ${difficulty} You might find ${lootItem} if you're lucky!`);
};

// generate theme
const generateDungeonTheme = () => {
    const theme = setTheme();
    const ambiance = setAmbiance();
    generateAndAppendText(`You have entered a ${theme} dungeon. ${ambiance}`);

};

// generate room amount
const generateRoomAmount = () => {
    const numberOfRooms = setRoomAmount();
    generateAndAppendText(`You have entered an area with ${numberOfRooms} unique locations`);
};

// select difficulty at random 
const generateDifficulty = () => {
    const difficulty = setDifficulty();
    generateAndAppendText(`${difficulty}`)
}

// generate monster type 
const generateMonsterType = () => {
    const monstersArr = setMonsterType();
    const monsterStr = formatMonsterStr(monstersArr);
    generateAndAppendText(`You have entered an area infested with ${monsterStr}`);
};

// generate and determine if traps are present
const generateTrap = () => {
    const trap = setTrap();

    if (trap === null || trap === undefined) {
        generateAndAppendText(`You have entered a dungeon with no traps`);
    } else if (trap) {
        generateAndAppendText(`You have entered a dungeon with a ${trap} trap somewhere`);
    }
};

// generate loot
const generateLoot = () => {
    const lootItem = setLoot();
    generateAndAppendText(`Somewhere in the dungeon you can find a ${lootItem}!`);
};

// consolidate 'set' code into one function. 
// getRandomItem will round off and select a random number within an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Randomly select room amount 
const setRoomAmount = () =>  Math.floor(Math.random() * 10) + 1;

// Randomly select theme
const setTheme = () => getRandomItem(dungeonInfo[0]);

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
        }

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
        }
    }

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
    // trapBoolean will be true/false roughly 50% of the time, indicating whether traps will be present in the dungeon or not.
    // For newer programmers, the 0.5 can tweaked to change the probability of true/false 
    let trapBoolean = Math.random() < 0.5;

    if (trapBoolean) {
        return getRandomItem(dungeonInfo[2]);
    } else {
        return null;
    }
};

// Randomly select loot type
const setLoot = () => getRandomItem(dungeonInfo[3]);

// setAmbiance
const setAmbiance = () =>  getRandomItem(dungeonInfo[4]);

// set difficulty
const setDifficulty = () => getRandomItem(dungeonInfo[5]);

// format monsterStr
const formatMonsterStr = (monstersArr) => {
    let monsterStr = '';
    
    if (monstersArr.length > 1) {
        // create new string with second to last element of monstersArr removed, joined with commas
        // then add 'and' before the last element of monstersArr
        monsterStr = `${monstersArr.slice(0, -1).join(', ')} and ${monstersArr.slice(-1)}`;
    } else {
        monsterStr = monstersArr[0];
    }
    return monsterStr;
};

// Save generated content
// When the save button is 'clicked'
    // save the generated content as an object and push it into an array
    // save that into localStorage
    // collect the value of the parameter used and use previouslyGenerated() to save onto HTML list

// Create 'previouslyGenerated' section that uses savedContent to generate HTML list items for future calls

// Create a function that clears the entire list

// Create a function to delete one savedItem

// Event Listeners
generateBtnEl.addEventListener('click', generateButtonHandler);