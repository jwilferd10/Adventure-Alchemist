const generateBtnEl = document.getElementById('generateBtn');
const searchSelectionEl = document.getElementById('searchSelection');
const textAreaEl = document.getElementById('textArea');

// Dungeon Parameters
const dungeonThemes = ['Ancient ruins', 'Battlefield', 'Caverns', 'Catacombs', 'Crypts', 'Dark forest', 'Desert tomb', 'Drow City', 'Dwarf mine', 'Elemental plane', 'Ghost town', 'Goblin stronghold', 'Haunted mansion', 'Ice cave', 'Jungle temple', 'Labyrinth', 'Necropolis', 'Oceanic abyss', 'Orc stronghold', 'Palace dungeon', 'Sewer system', 'Underwater city', 'Vampire crypt', 'Wizard\'s tower', 'Zombie infested lab'];
const monsterTypes = ['Undead', 'Abberations', 'Dragons', 'Constructs', 'Fiends', 'Giants', 'Fey', 'Elementals', 'Beasts', 'Humanoids'];
const trapTypes = ["Pit", "Arrow", "Poison dart", "Swinging blade", "Net"];
const lootType = ["Gold coins", "Magic ring", "Potion of healing", "Scroll of fireball", "Jeweled sword"];

// Array that collects all existing Dungeon Parameters 
const dungeonInfo = [
    dungeonThemes,
    monsterTypes,
    trapTypes,
    lootType
];

// Build form select functionality
const generateButtonHandler = (event) => {
    event.preventDefault();

    // Collect the value from HTML formSelect and clear searchSelectionEl afterwards 
    let generateParam = searchSelectionEl.value;
    searchSelectionEl.value = '';

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

// generate every topic all at once 
const generateDungeon = () => {
    const numberOfRooms = setRoomAmount();
    const theme = setTheme();
    const monstersArr = setMonsterType();
    const monsterStr = formatMonsterStr(monstersArr);
    const trap = setTrap();
    const lootItem = setLoot();

    // ternary operator is checking whether traps are in or not
    const generatedText = createParagraphElement(`You have entered a ${theme} with ${numberOfRooms} rooms. Be cautious of the ${monsterStr} that may lurk about. ${trap ? ` You're bound to run into a ${trap} trap somewhere.` : ''} You might find ${lootItem} if you're lucky!`);

    textAreaEl.append(generatedText);

};

// generate theme
const generateDungeonTheme = () => {
    const theme = setTheme();
    const generatedText = createParagraphElement(`You have entered a ${theme} dungeon`);

    textAreaEl.append(generatedText);
};

// generate room amount
const generateRoomAmount = () => {
    const numberOfRooms = setRoomAmount();
    const generatedText = createParagraphElement(`You have entered an area with ${numberOfRooms} unique locations`);

    textAreaEl.append(generatedText);
};

// generate monster type 
const generateMonsterType = () => {
    const monstersArr = setMonsterType();
    const monsterStr = formatMonsterStr(monstersArr);
    const generatedText = createParagraphElement(`You have entered an area infested with ${monsterStr}`);

    textAreaEl.append(generatedText);
};

// generate and determine if traps are present
const generateTrap = () => {
    const trap = setTrap();

    if (trap === null || trap === undefined) {
        const generatedText = createParagraphElement(`You have entered a dungeon with no traps`);
        textAreaEl.append(generatedText);
    } else if (trap) {
        const generatedText = createParagraphElement(`You have entered a dungeon with a ${trap} trap somewhere`);
        textAreaEl.append(generatedText);
    }
};

// generate loot
const generateLoot = () => {
    const lootItem = setLoot();
    const generatedText = createParagraphElement(`Somewhere in the dungeon you can find a ${lootItem}!`);

    textAreaEl.append(generatedText);
};

// Randomly select room amount 
const setRoomAmount = () => {
    return Math.floor(Math.random() * 10) + 1;
};

// Randomly select theme
const setTheme = () => {
    return dungeonInfo[0][Math.floor(Math.random() * dungeonInfo[0].length)];
};

// Randomly select monster type
const setMonsterType = () => {
    // Randomly select a number between 1 and 3, determines how many monsters are around
    const randomAmount = Math.floor(Math.random() * 3) + 1;
    const monsterArr = [];

    for (let i = 0; i < randomAmount; i++) {
        const randomMonsterType = dungeonInfo[1][Math.floor(Math.random() * dungeonInfo[1].length)];  
        monsterArr.push(randomMonsterType);       
    }

    return monsterArr; 
};

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

// Randomly determine if traps are active in dungeon, then generate trap type
const setTrap = () => {
    // trapBoolean will be true/false roughly 50% of the time, indicating whether traps will be present in the dungeon or not.
    // For newer programmers, the 0.5 can tweaked to change the probability of true/false 
    let trapBoolean = Math.random() < 0.5;

    if (trapBoolean) {
        return dungeonInfo[2][Math.floor(Math.random() * dungeonInfo[2].length)];
    } else {
        return null;
    }
};

// Randomly select loot type
const setLoot = () => {
    return dungeonInfo[3][Math.floor(Math.random() * dungeonInfo[3].length)];
};

// Display generated content to HTML
const createParagraphElement = (generatedText) => {
    // create a p element using generatedText
    const generatedEl = document.createElement('p');
    generatedEl.textContent = generatedText;
    generatedEl.classList.add('text-center');

    // Append to textAreaEl
    return generatedEl;
};

// Create a 'previous searches' section that collects the generated code

generateBtnEl.addEventListener('click', generateButtonHandler);