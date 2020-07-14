/* this is where the action happens; this file takes DATA from the array coming from FishDataProvider and smooshes it into the FUNCTION 
 defined in fishFactory, one fishy array object at a time; 
 
 THEN, she'll use a for/of spit out all of those newly minted HTML fish into a single container (an HTML parent element, the fish tank IF YOU WILL),
 then go find where in the page to dump that fish tank using a DOM query */
 
 import { makeCopyOfFishCollection} from "./FishDataProvider.js" //a) bring in the function defined in FishDataProvider but FOR THE LOVE OF GOD DONT INVOKE IT YET
 import { makeAnHTMLFish} from "./fishFactory" // b) bring in the function to smoosh out individual HTML fish from fish objects in the array above

 export const listOfFish = () => {  // create an exportable function called listOfFish that will...
    const fishTank = document.querySelector(".content--left") // ...find the first element with the class "content--left" and call that fishTank for our code here, and then..

    const fishArrayCopy = makeCopyOfFishCollection() // invoke the function that will copy your array o' fish objects, call that fresh fish array fishArrayCopy, and then...

    let allFishAsHTML = "" //create an empty string called allFishAsHTML...
    for (const currentFishObj of fishTank) { // take each fish object from that copied fish array...
        allFishAsHTML += makeAnHTMLFish(currentFishObj) // ...then smoosh it into the makeAnHTMFish factory function, and THEN AT THE SAME TIME, add that resulting HTML fish to the allFishAsHTML string AND THENNN 
    }

    fishTank.innerHTML += `
        <article class="fishes">
            ${allFishAsHTML}
        </article>
    `

 }