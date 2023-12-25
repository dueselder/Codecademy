const quests = [
    'Rescue the lost princess from the clutches of evil.',
    'Retrieve the mystical artifact that holds unimaginable power.',
    'Prevent the impending calamity that threatens the land.',

];

const locations = [
    'in the ominous Shadow Mountains',
    'in the labyrinthine Caves of Desolation',
    'within the haunting Ruins of the Forgotten',

];

const enemies = [
    'a fierce dragon who breathes scorching flames',
    'a colossal golem with the strength of a thousand warriors',
    'a sinister sorcerer wielding dark magics',

];

function generateAdventure() {
    const quest = quests[Math.floor(Math.random() * quests.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];

    const adventureMessage = `${quest} Venture forth ${location} and vanquish ${enemy}!`;
    return adventureMessage;
}

// Usage
console.log(generateAdventure());
