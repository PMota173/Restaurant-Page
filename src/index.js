import './styles.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import footer from './footer.js';

const homePage = document.querySelector('a');


const loadHome = document.querySelector('#home');
const loadMenu = document.querySelector('#menu');
const loadAbout = document.querySelector('#about');
const main = document.querySelector('#content');
const maindiv = document.querySelector('#main-page');

homePage.addEventListener('click', () => {
    maindiv.innerHTML = '';
    loadHome.classList.add('active');
    loadMenu.classList.remove('active');
    loadAbout.classList.remove('active');
    home();
});

loadHome.addEventListener('click', () => {
    maindiv.innerHTML = '';
    loadHome.classList.add('active');
    loadMenu.classList.remove('active');
    loadAbout.classList.remove('active');
    home();
});

loadMenu.addEventListener('click', () => {
    maindiv.innerHTML = '';
    loadMenu.classList.add('active');
    loadAbout.classList.remove('active');
    loadHome.classList.remove('active');
    menu();
});

loadAbout.addEventListener('click', () => {
    maindiv.innerHTML = '';
    loadAbout.classList.add('active');
    loadMenu.classList.remove('active');
    loadHome.classList.remove('active');
    about();
});



loadHome.classList.add('active');
loadMenu.classList.remove('active');
loadAbout.classList.remove('active');
home();

footer();
