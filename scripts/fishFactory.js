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