const contentinput = document.querySelector('.content')
const hintBox = document.querySelector('.hintBox')

const resetBtn = document.querySelector('.resetBtn')






const wordList = [

    {
        word: 'python',
        hint: 'snake language'
    },
    {
        word: 'IIT',
        hint: 'tier1 college'
    },

    {
        word: 'difficult',
        hint: 'Not Easy :)'
    },

    {
        word: 'hello',
        hint: 'intro of any language'
    },

    {
        word: 'venus',
        hint: 'planet of our solar system'
    },

    {
        word: 'TrueLove',
        hint: 'word we get after Hearing Romeo and Juli:)'
    },

    {
        word: 'idiot',
        hint: 'commisioner kuthurlaki mogullu rara?'
    },

    {
        word: 'gold',
        hint: 'the biscult we dont eat'
    },

    {
        word: 'forget',
        hint: 'when you write GET 4 times'
    },

    {
        word: 'tenet',
        hint: 'reverse or not same(MovieName)'
    },

    {
        word: 'broken',
        hint: 'we say this, when we lost some one close'
    },

    {
        word: 'trp',
        hint: 'shows run,on tv, to get'
    },

    {
        word: 'Earth',
        hint: 'blue planet'
    },

    {
        word: 'sun',
        hint: 'Energy source'
    },

    {
        word: 'Answer',
        hint: 'The response or receipt to a phone call, question, or letter'
    },

    {
        word: 'Ban',
        hint: 'An act that is prohibited by social pressure or law. '
    },


    {
        word: 'Cease',
        hint: 'to eventually stop existing.'
    },


    {
        word: 'jug',
        hint: 'a utensil or container used to hold liquids'
    },


    {
        word: 'care',
        hint: 'extra responsibility and attention.'
    }

]


function randomWord()
{
    let ranObj = wordList[Math.floor(Math.random()*wordList.length)]
    let word = ranObj.word

    let html = ''
    for(let i =0;i< word.length ;i++){
        html += `<input type="text">`
    }
    console.log(word);

    contentinput.innerHTML = html

    let hint = ranObj.hint;

    console.log(hint);

    hintBox.innerText = hint


}


resetBtn.addEventListener('click', randomWord)