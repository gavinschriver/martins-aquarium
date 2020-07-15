import {makeCopyOfLocationCollection} from "./LocationsDataProvider.js"

import (makeCopyOfLocationCollection)

export const listOfLocations = () => {
    const whereToPutLocationsinHTML = document.querySelector(".content--left")

    const locationArrayCopy = makeCopyOfLocationCollection()

    whereToPutLocationsinHTML.innerHTML += `
        <article class="locations"> 
        All locations will show up here?
    ` 
}