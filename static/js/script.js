var lightBtn = document.querySelector("#light")
var darkBtn = document.querySelector("#dark")

var body = document.querySelector("body")

lightBtn.addEventListener('click', (e) =>{
    body.style.background = 'white'
    body.style.color = 'black'
    body.style.transition = '1s ease'
})

darkBtn.addEventListener('click', (e) =>{
    body.style.background = 'black'
    body.style.color = 'white'
    body.style.transition = '1s ease'
})