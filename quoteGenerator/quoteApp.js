// variables

let btn = document.querySelector("#newQuote")
let quote = document.querySelector('.quote')
let personName = document.querySelector('.person')


const quotes = [{quote: "If names are not correct, language will not be in accordance with the truth of things." , personName: "Confucius"},{quote:"How vain, without the merit, is the name.", personName:"Homer" },
{
    quote:"Action without a name, a who attached to it, is meaningless."
    , personName: "Hanna Arendt"
}, 
{
    quote:"The glory of my name increases my shame. Less known by mortals, I could better escape their eyes."
    , personName: "Jean Racine"
}, 
{
    quote:"Forgive your enemies, but never forget their names."
    , personName: " John F. Kennedy"
}, 
{
    quote:"O peace! how many wars were waged in thy name."
    , personName: "Alexander Pope"
}, 
{
    quote:"Leadership is not a popularity contest; it's about leaving your ego at the door. The name of the game is to lead without a title."
    , personName: "Robin"
},  
{
    quote: "Do you not know that a man is not dead while his name is still spoken?"
    , personName: "Terry Pratchett"
}, 
{
    quote:"Proper names are poetry in the raw. Like all poetry they are untranslatable."
    , personName: "Auden"
}, 
{
    quote:"My name is more important than myself."
    , personName: "Pierre Cardin"
}, 
{
    quote:"There is a devil, and he knows my name."
    , personName: "Daniel Johnston"
}, 
{
    quote:"Names have power."
    , personName: "Rick Riordan"
}, 
{
    quote:"Words have meaning and names have power."
    , personName: "Unknown"
}, 
{
    quote: "The purpose of our lives is to be happy."
    , personName: "Dalai Lama"
},
{
    quote:"Life is what happens when you're busy making other plans."
    , personName: "John Lennon"
},
{
    quote:"Get busy living or get busy dying." 
    , personName: "Stephen King"
},
{
    quote: "You only live once, but if you do it right, once is enough."
    , personName: " Mae West"
},
{
    quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up."
    , personName: "Thomas A. Edison"
},
{
    quote:"Never let the fear of striking out keep you from playing the game."
    , personName: "Babe Ruth"
},
{
    quote:"Money and success don’t change people; they merely amplify what is already there." 
    , personName: "Will Smith"
},
{
    quote: "Not how long, but how well you have lived is the main thing."
    , personName: "Seneca"
},
{
    quote: "The unexamined life is not worth living."
    , personName: "Socrates"
},
{
    quote:"Turn your wounds into wisdom."
    , personName: "Oprah Winfrey"
}]











btn.addEventListener("click", () => {

    let random = Math.ceil(Math.random()*quotes.length)

    quote.innerText = quotes[random].quote;

    personName.innerText = quotes[random].personName;

})