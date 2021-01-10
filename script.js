const button = document.querySelector('button')
const toast = document.querySelector('#toast')

const randomMessage = [
    'Message One', 'Message Two', 'Message Three', 'Message Four'
]

button.addEventListener('click', getNotification)

function getNotification(){
    const newToast = document.createElement('div')
    newToast.classList.add('toast')

    newToast.innerText = getRandom()

    toasts.appendChild(newToast)

    setTimeout(()=>{
        newToast.remove()
    }, 3000)
}

// function remove(){
//     newToast.classList.remove('toast')
// }
function getRandom(){
    return randomMessage[Math.floor(Math.random()*randomMessage.length)]
}
