import { dungeonInfo } from "./main.js";
import { monsterTypes } from './dungeon-parameters.js';
import { appendGeneratedText } from './utilities.js';

// generate every topic all at once 
export const generateDungeon = () => {
    const numberOfRooms = setRoomAmount();
    const themeAndAmbiance = setTheme();
    const monstersArr = setMonsterType();
    const monsterStr = formatMonsterStr(monstersArr);
    const trap = setTrap();
    const lootItem = setLoot();
    const difficulty = setDifficulty();

    // ternary operator is checking whether traps are in or not
    appendGeneratedText(`You have entered a ${themeAndAmbiance.theme} with ${numberOfRooms} ${numberOfRooms === 1 ? 'noteworthy area.' : 'noteworthy areas.'} ${themeAndAmbiance.ambiance} Be cautious of the ${monsterStr} that may lurk about. ${trap ? ` You're bound to run into a ${trap} Trap somewhere.` : ''} ${difficulty} Perhaps you shall find ${lootItem} amidst the shadows.`);
};

// generate theme
export const generateDungeonTheme = () => {
    const themeAndAmbiance = setTheme();
    appendGeneratedText(`You have entered a ${themeAndAmbiance.theme}. ${themeAndAmbiance.ambiance}`);
};

// generate room amount
export const generateRoomAmount = () => {
    const numberOfRooms = setRoomAmount();
    appendGeneratedText(`You have entered an area with ${numberOfRooms} unique locations`);
};

// select difficulty at random 
export const generateDifficulty = () => {
    const difficulty = setDifficulty();
    appendGeneratedText(`${difficulty}`);
};

// generate monster type 
export const generateMonsterType = () => {
    const monstersArr = setMonsterType();
    const monsterStr = formatMonsterStr(monstersArr);
    appendGeneratedText(`You have entered an area infested with ${monsterStr}`);
};

// generate and determine if traps are present
export const generateTrap = () => {
    const trap = setTrap();

    if (trap === null || trap === undefined) {
        appendGeneratedText(`You have entered a dungeon with no traps`);
    } else if (trap) {
        appendGeneratedText(`You have entered a dungeon with a ${trap} Trap somewhere`);
    };
};

// generate loot
export const generateLoot = () => {
    const lootItem = setLoot();
    appendGeneratedText(`You can find a ${lootItem} somewhere here!`);
};

// getRandomItem rounds off and selects a random number within an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Randomly select room amount 
const setRoomAmount = () =>  Math.floor(Math.random() * 30) + 1;

// Randomly select theme
const setTheme = () => {
    // Decide if dungeonLocation is true or false 
    const dungeonLocation = randomChance();

    // Based on the results, theme and ambiance will either be exterior or interior settings
    const theme = dungeonLocation ? getRandomItem(dungeonInfo[0]) : getRandomItem(dungeonInfo[1]);
    const ambianceArray = dungeonLocation ? dungeonInfo[6] : dungeonInfo[5];
    const ambiance = getRandomItem(ambianceArray);

    return { theme, ambiance };
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