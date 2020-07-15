import { newQuotesArray } from "./QuotesDataProvider.js" // import function that will produce an array of fish objects to work with when called
import { quoteBuilder } from "./quotesFactory.js" // import the function that will accept one object at a time from an array and return an HTML string of that object

export const listOfQuotes = () => { //define function that will print the full string of HTML of all the quotes
    const quoteArea = document.querySelector(".content--left") // define the area in the DOM where the HTML content will be injected
    
    const quoteObjects = newQuotesArray() //create a copy of the array of quote objects and assign to new variable

    let quotesAsHTML = "" // create an empty string to hold all the quotes as HTML

    for (const quoteObj of quoteObjects) { //take each object in the quoteObjects array
        quotesAsHTML += quoteBuilder(quoteObj) //add the resulting HTML created by invoking quoteBuilder for each of those objects to the quotesAsHTML string
    }

    // access the inner HTML of the quoteArea and add an HTML article that contains the quotesAsHTML string (a string within a string if you will, please)
    quoteArea.innerHTML += ` 
        <article class="quotes">
        ${quotesAsHTML}
        </article>
    `
}