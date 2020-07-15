export const makeAnHTMLLocation = (locationObj) => {
  return `
    <section class="location card">
      <div>
        <img class="location_image image--card" src="${locationObj.image}" />
      </div>
      <div class="location_name">${locationObj.name}</div>
      <div class="location_url"><a href="${locationObj.url}">${locationObj.urlText}</a></div>
      <div class="location_description">${locationObj.description}</div>
    </section>
    ` 
}
 