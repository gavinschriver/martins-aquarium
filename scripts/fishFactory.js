/* define a function that: accepts a fish object as an argument, then passes each of its properties to corresponding HTML <div> tags
and then 'prints' (returns) all of those within one parent element (<section> tag) */

export const makeAnHTMLFish = (fishObj) => {
    return `
    <section class="fish card">
        <div><img class="fish_image image--card" src="${fishObj.image}"></div>
        <div class="fish_name">${fishObj.name}</div>
        <div class="fish_diet">${fishObj.food}</div>
        <div class="fish_species">${fishObj.species}</div>
        <div class="fish_location">${fishObj.location}</div>
        <div class="fish_length">${fishObj.length}</div>
    </section>
    `
}

/* SOLE purpose of this file/function is JUST to accept one object
at a time (that will be passed in to it somewhere else) and divvy up its data (as stored in key:value pairs) into HTML slots */