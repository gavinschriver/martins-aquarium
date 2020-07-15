const quotes = [
    {
    quoteText: "I have a lil somethin for ya and it goes like FISH",  
    quoteAuthor: "Neil DeGrasse Tyson Chicken"      
    },
    {
    quoteText: "Summin TRES FEESHY goin on here",
    quoteAuthor: "Inspector CLUESOO" 
    },
    {
    quoteText: "OKAY ANOTHER FRESH FISH QUOTE FOR YA",       
    quoteAuthor: "George Bernard Shaw 'Nuf"
    },
    {
    quoteText:"One last fish quote so filhty ugh",
    quoteAuthor:"Some guy"      
    }
]

export const newQuotesArray = () => {
    return quotes.slice()
}