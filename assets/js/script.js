const generateBtnEl = document.getElementById('generateBtn');
const textAreaEl = document.getElementById('textArea');

// Dungeon Parameters
const dungeonThemes = ['Ancient ruins', 'Caverns', 'Catacombs', 'Crypts', 'Dark forest', 'Desert tomb', 'Dwarf mine', 'Elemental plane', 'Ghost town', 'Goblin stronghold', 'Haunted mansion', 'Ice cave', 'Jungle temple', 'Labyrinth', 'Necropolis', 'Oceanic abyss', 'Orc stronghold', 'Palace dungeon', 'Sewer system', 'Underwater city', 'Vampire crypt', 'Wizard\'s tower', 'Zombie infested lab'];
const monsterTypes = ['Undead', 'Abberations', 'Dragons', 'Constructs', 'Fiends', 'Giants', 'Fey', 'Elementals', 'Beasts', 'Humanoids'];
const trapTypes = ["Pit trap", "Arrow trap", "Poison dart trap", "Swinging blade trap", "Net trap"];
const lootType = ["Gold coins", "Magic ring", "Potion of healing", "Scroll of fireball", "Jeweled sword"];

// Array that collects all existing Dungeon Parameters 
const dungeonInfo = [
    dungeonThemes,
    monsterTypes,
    trapTypes,
    lootType
];

console.log(dungeonInfo);

// const genContent = () => {
//     let textTest = document.createElement('p');
//     textTest.innerHTML = 'Hello world';

//     textAreaEl.append(textTest);
// }

// Create a function that picks a number between 0-100 standardly

    // Based on user input allow a user to customize the nubmer cap

// Create an array that contains multiple dungeon themes

// Create a function that randomly selects items in an array

// Create an array that contains multiple monster types

// Create a function that randomly selects at least 3 monster types

// Randomly determine if traps are true/false

// consider creating a basic loot system

// generateBtnEl.addEventListener('click', genContent);