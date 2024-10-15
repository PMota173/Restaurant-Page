import './styles.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';

const content = document.querySelector('#content');

const loadHome = document.querySelector('#home');
const loadMenu = document.querySelector('#menu');
const loadAbout = document.querySelector('#about');

loadHome.addEventListener('click', () => {
    home();
});

loadMenu.addEventListener('click', () => {
    menu();
});

loadAbout.addEventListener('click', () => {
    about();
});
