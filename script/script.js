const hambLines = document.querySelectorAll('.hamb-lines')
const firstHambLine = document.getElementById('firstHambLine')
const lastHambLine = document.getElementById('lastHambLine')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.nav')
const logo = document.querySelector('.logo')
const logo_ = document.querySelector('.logo_')

function showMenu(){
    hambLines[0].classList.toggle('first-hamb-line')
    hambLines[1].classList.toggle('medium-hamb-line')
    hambLines[2].classList.toggle('last-hamb-line')
    firstHambLine.classList.toggle('hamb-lines-white')
    lastHambLine.classList.toggle('hamb-lines-white')
    menu.classList.toggle('showMenu')
    logo.classList.toggle('logo-color')
    logo_.classList.toggle('logo_color')

}

hamburger.addEventListener('click', showMenu)