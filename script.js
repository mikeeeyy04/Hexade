let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let sea_behind = document.getElementById('sea');
let text = document.getElementById('text');
let mountain = document.getElementById('mountain');
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.7 + 'px';
    sea_behind.style.top = value * 0.3 + 'px';
    mountain.style.top = value * 0 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1.1 + 'px';
})




//navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

//navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);





