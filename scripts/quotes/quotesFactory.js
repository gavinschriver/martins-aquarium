export const quoteBuilder = (quoteObj) =>
{   return `
    <section class="quote_card">
        <div class="quote_text">${quoteObj.quoteText}</div>
        <div class="quote_author">${quoteObj.quoteAuthor}</div>
    </section>
`    
}