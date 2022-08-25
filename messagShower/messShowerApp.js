
    const messageBox = document.querySelector('#message')
    const submitButton = document.querySelector('#submitBtn')
    const errorText = document.querySelector('.errorText')
    const messagePassed = document.querySelector('.messagePassed')
    
    
    
    
    
    submitButton.addEventListener('click', (e) =>{

        e.preventDefault()

        if(messageBox.value === '')
        {
            errorText.style.display = 'block'
            
            setTimeout(() =>
            {
                errorText.style.display = 'none'
            }, 4000)
        }
        else
        {
            messagePassed.textContent = messageBox.value
            
            messageBox.value = ''
        }
    })



