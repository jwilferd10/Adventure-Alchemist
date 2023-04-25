const generateBtnEl = document.getElementById('generateBtn');
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

// generate 
const generateDungeon = () => {
    // const roomAmount = Math.floor(Math.random() * 10) + 1;
    const numberOfRooms = roomAmount();
    const theme = generateTheme();
    const monsters = generateMonsters();
    const trap = setTrap();
    const lootItem = setLoot();

    console.log(`You have entered a ${theme} dungeon with ${numberOfRooms} rooms. Be careful of the ${monsters} and the ${trap} trap. You might find ${lootItem} if you're lucky!`);
}

// Randomly select room amount 
const roomAmount = () => {
    return Math.floor(Math.random() * 10) + 1;
}

// Randomly select theme
const generateTheme = () => {
    return dungeonInfo[0][Math.floor(Math.random() * dungeonInfo[0].length)];
}

// Randomly select monster type
const generateMonsters = () => {
    return dungeonInfo[1][Math.floor(Math.random() * dungeonInfo[1].length)];
}

// Randomly determine if traps are active in dungeon, then generate trap type
const setTrap = () => {
    return dungeonInfo[2][Math.floor(Math.random() * dungeonInfo[2].length)];
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

generateBtnEl.addEventListener('click', generateDungeon);