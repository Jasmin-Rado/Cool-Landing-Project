let menuToggle = document.querySelector('.toggle')
let container = document.querySelector('.container')

menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('active')
    container.classList.toggle('active')
})