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

// Running a test to make sure the functionality works
// TO-DO: Modularize the code afterwards
const generateDungeon = () => {
    const roomAmount = Math.floor(Math.random() * 10) + 1;
    const theme = dungeonInfo[0][Math.floor(Math.random() * dungeonInfo[0].length)];
    const monsters = dungeonInfo[1][Math.floor(Math.random() * dungeonInfo[1].length)];
    const traps = dungeonInfo[2][Math.floor(Math.random() * dungeonInfo[2].length)];
    const loot = dungeonInfo[3][Math.floor(Math.random() * dungeonInfo[3].length)];

    console.log(`You have entered a ${theme} dungeon with ${roomAmount} rooms. Be careful of the ${monsters} and the ${traps} trap. You might find ${loot} if you're lucky!`);
}



// Create a function that picks a number between 0-100 standardly

    // Based on user input allow a user to customize the nubmer cap

// Randomly select the theme of the dungeon 

// const genContent = () => {
//     let textTest = document.createElement('p');
//     textTest.innerHTML = 'Hello world';

//     textAreaEl.append(textTest);
// }


generateBtnEl.addEventListener('click', generateDungeon);