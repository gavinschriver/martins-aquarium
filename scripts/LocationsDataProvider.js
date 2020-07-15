const locationCollection = [
    {
        image: "./images/nassau.jpg", 
        name: "Nassau Bay",
        url: "https://en.wikipedia.org/wiki/Nassau,_Bahamas",
        urlText: "Wikipedia article on Nassauasss in da BAhamasass",
        description: "Nassau is Beautiful this time of year. And every time of year. Lol."
    },
    {
        image: "./images/gulfcoast.jpg",
        name: "Gulf Coast",
        url: "https://en.wikipedia.org/wiki/Gulf_Coast_of_the_United_States",
        urlText: "Wikipedia entry on Gulf Coast", 
        description: "This beach is straight up STANKY let's bounce. I think i got the 'rona."
    },
    {
        image: "./images/fingerlakes.jpg",
        name: "Finger Lakes",
        url: "https://www.fingerlakes.org/",
        urlText:"Click here for probably some crappy tourist site!!",
        description: "They're finger-lickin good dontchyaknow"
    }
]

export const makeCopyOfLocationCollection = () => {
    return locationCollection.slice()
} 

