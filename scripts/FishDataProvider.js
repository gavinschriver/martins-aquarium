/* this file actually HOLDS the data for each fish; each one is an object, with key:value pairs, that live in an array 2getha 4eva
It also DEFINES (but doesn't CALL) a function that will duplicate that array so all that info can be used elsewhere... maybe.. DOWN AT THE FISH FACTORY?!!*/

const fishCollection = [
    {
        name: "Angry Joe",
        food: "Raw bayou sewage",
        species: "Red Snapper",
        length: "5 feet",
        location: "Gult coast",
        image: "./images/red_snapper.jpg"
    },
    {
        name: "Long Tall Sally",
        food: "Little children's toes",
        species: "Big mouth bass",
        length: "3 feet",
        location: "Finger lakes",
        image: "./images/largemouth_bassman.jpeg"
    },
    {
        name: "ONE MORE GUY",
        food: "Filth at the bottom",
        species: "Angler fish",
        length: "5 inches",
        location: "Bottom of the ocean",
        image: "./images/angler.jpg"
    }
]

/* Funciton that, when invoked, will spit out (return, fine okay) a copy of the fishCollection array*/

export const makeCopyOfFishCollection = () => {
    return fishCollection.slice()
}

/*export and correspdong function are needed HERE cause, wherever we have data that lives alone in a file, it needs a way to jump into other files to actually be used */