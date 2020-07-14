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

export const useFish = () => {
    return fishCollection.slice()
}