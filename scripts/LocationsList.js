import {makeCopyOfLocationCollection} from "./LocationsDataProvider.js"
import {makeAnHTMLLocation} from "./locationsFactory.js"

import (makeCopyOfLocationCollection)

export const listOfLocations = () => {
    const whereToPutLocationsinHTML = document.querySelector(".content--left")

    const locationArrayCopy = makeCopyOfLocationCollection()

    let allLocationsAsHTML = ""
    for (const currentLocationObj of locationArrayCopy) {
        allLocationsAsHTML += makeAnHTMLLocation(currentLocationObj)
    }

    whereToPutLocationsinHTML.innerHTML += `
        <article class="locations"> 
        ${allLocationsAsHTML}
    ` 
}