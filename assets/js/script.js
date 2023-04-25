const generateBtnEl = document.getElementById('generateBtn');
const searchSelectionEl = document.getElementById('searchSelection');
const textAreaEl = document.getElementById('textArea');

// Dungeon Parameters
const dungeonThemes = ['Ancient ruins', 'Caverns', 'Catacombs', 'Crypts', 'Dark forest', 'Desert tomb', 'Dwarf mine', 'Elemental plane', 'Ghost town', 'Goblin stronghold', 'Haunted mansion', 'Ice cave', 'Jungle temple', 'Labyrinth', 'Necropolis', 'Oceanic abyss', 'Orc stronghold', 'Palace dungeon', 'Sewer system', 'Underwater city', 'Vampire crypt', 'Wizard\'s tower', 'Zombie infested lab'];
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
}

// generate 
const generateDungeon = () => {
    const numberOfRooms = setRoomAmount();
    const theme = setTheme();
    const monsters = setMonsterType();
    const trap = setTrap();
    const lootItem = setLoot();

    console.log(`You have entered a ${theme} dungeon with ${numberOfRooms} rooms. Be careful of the ${monsters} ${trap ? ` and the ${trap} trap` : ''}. You might find ${lootItem} if you're lucky!`);

}

const generateDungeonTheme = () => {
    const theme = setTheme();
    console.log(`You have entered a ${theme} dungeon`);
}

const generateRoomAmount = () => {
    const numberOfRooms = setRoomAmount();
    console.log(`You have entered a dungeon with ${numberOfRooms} many rooms`);
}

const generateMonsterType = () => {
    const monsters = setMonsterType();
    console.log(`You have entered a dungeon infested with ${monsters}`);
}

const generateTrap = () => {
    const trap = setTrap();

    if (trap === 'no trap') {
        console.log(`You have entered a dungeon with no traps`);
    } else {
        console.log(`You have entered a dungeon with a ${trap} trap somewhere`);
    }
}

const generateLoot = () => {
    const lootItem = setLoot();
    console.log(`Somewhere in the dungeon you can find a ${lootItem}!`);
}

// Randomly select room amount 
const setRoomAmount = () => {
    return Math.floor(Math.random() * 10) + 1;
}

// Randomly select theme
const setTheme = () => {
    return dungeonInfo[0][Math.floor(Math.random() * dungeonInfo[0].length)];
}

// Randomly select monster type
const setMonsterType = () => {
    return dungeonInfo[1][Math.floor(Math.random() * dungeonInfo[1].length)];
}

// Randomly determine if traps are active in dungeon, then generate trap type
const setTrap = () => {
    // trapBoolean will be true/false roughly 50% of the time, indicating whether traps will be present in the dungeon or not.
    // For newer programmers, the 0.5 can tweaked to change the probability of true/false 
    let trapBoolean = Math.random() < 0.5;

    if (trapBoolean) {
        return dungeonInfo[2][Math.floor(Math.random() * dungeonInfo[2].length)];
    } else {
        return 'no traps';
    }
}

// Randomly select loot type
const setLoot = () => {
    return dungeonInfo[3][Math.floor(Math.random() * dungeonInfo[3].length)];
}

// Create a 'previous searches' section that collects the generated code

// Use the {theme} of the title as the innerHTML name

    // const genContent = () => {
    //     let textTest = document.createElement('p');
    //     textTest.innerHTML = 'Hello world';

    //     textAreaEl.append(textTest);
    // }

generateBtnEl.addEventListener('click', generateButtonHandler);