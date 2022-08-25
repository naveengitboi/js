
const readBtn = document.querySelector('.readMore');
const increamentBtn = document.querySelector('.increament');
const decBtn = document.querySelector('.decreament');

const countValue = document.querySelector('#count-el')

let count = 0;
function revealBtns(){
    if(increamentBtn.classList.contains('readMore') && decBtn.classList.contains('readMore'))
    {
        increamentBtn.classList.remove('readMore')
        decBtn.classList.remove('readMore')
    }
    else{
        increamentBtn.classList.add('readMore')
        decBtn.classList.add('readMore')
    }
   
}

readBtn.addEventListener('click', revealBtns)

count = 0


increamentBtn.addEventListener('click', () =>
{
    count = count + 1
    countValue.innerText = count

})

decBtn.addEventListener('click', () =>{
    count--
    
    countValue.innerText = count
})
