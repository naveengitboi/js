const prevBtn = document.querySelector('.btnLeft')
const nextBtn = document.querySelector('.btnRight')


const body = document.querySelector('body')



let images = [
    'url(https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80) center/cover no-repeat',
     'url(https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1641058910494-b441de2d5bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1658847133295-1693456b858c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1631641551473-fbe46919289d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1624207371246-ed2f11b70e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1658730335794-c5edd544ccbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1658778176925-e0027cd4259a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1657905041924-ffa7ab898773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1658851874316-0c6666b7bf08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1658847338849-fd76cee49bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1658841641300-74d68a03d56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80) center/cover no-repeat',
    'url(https://images.unsplash.com/photo-1658784566751-95382f065d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center/cover no-repeat',
    

]

let count = 0

let size = images.length


nextBtn.addEventListener('click', () =>{
    
    if (count >= size)
    {
        count = 0
    }
    let item = images[count]
    if (count < size){
        body.style.background = item
    }
    count++
    
})

prevBtn.addEventListener('click', () =>{
    count--
    if(count <0)
    {

        let item = images[count*(-1)]
        if (count < size){
            body.style.background = item
        }
    }
    
    if(count <= size*(-1))
    {
        count = 0
    }
    
})
