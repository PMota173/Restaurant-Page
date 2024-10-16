import chef from './assets/ChefPhoto.jpg';

export default function home() {
    const body = document.querySelector('body');
    body.style.minHeight = 'calc(100vh + 50px)';
    body.style.marginBottom = '0px';

    const main = document.getElementById('content');


    const homePage = document.querySelector('#main-page');
    homePage.classList.forEach(className => {
        homePage.classList.remove(className);
    });
    homePage.classList.add('home');

    const welcome = document.createElement('h3');
    welcome.textContent = 'Welcome to Sushi City';
    homePage.appendChild(welcome);

    const h2 = document.createElement('h2');
    h2.textContent = 'Meet our Chef';
    homePage.appendChild(h2);

    const h4 = document.createElement('h4');
    h4.textContent = 'Akiko Saito';
    homePage.appendChild(h4);

    const img = document.createElement('img');
    img.id = 'chef-photo';
    img.src = chef;
    img.alt = 'Chef Photo';
    homePage.appendChild(img);

    const h5 = document.createElement('h5');
    h5.textContent = 'Orders in the link below';
    homePage.appendChild(h5);

    main.appendChild(homePage);
}