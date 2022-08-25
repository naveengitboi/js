let openBtn = document.getElementById('openBtn')

let modalContent = document.getElementById('modelContainer')

let closeBtn = document.getElementById('closeBtn')


openBtn.addEventListener('click', () => {
    modalContent.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modalContent.style.display = 'none'
})


// window.addEventListener('click', function(e) {
//     if (e.target === modalContent){
//         modalContent.style.display = 'none'
//     }
// })