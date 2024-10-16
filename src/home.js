import chef from './assets/ChefPhoto.jpg';

export default function home() {
    const body = document.querySelector('body');
    body.style.minHeight = '100vh';
    body.style.marginBottom = '0px';

    const main = document.getElementById('content');



    const div = document.createElement('div');
    div.className = 'home';

    const hello = document.createElement('h3');
    hello.textContent = 'Welcome to Sushi City';
    div.appendChild(hello);

    const h2 = document.createElement('h2');
    h2.textContent = 'Meet our Chef';
    div.appendChild(h2);

    const h4 = document.createElement('h4');
    h4.textContent = 'Akiko Saito';
    div.appendChild(h4);

    const img = document.createElement('img');
    img.id = 'chef-photo';
    img.src = chef;
    img.alt = 'Chef Photo';
    div.appendChild(img);

    const h5 = document.createElement('h5');
    h5.textContent = 'Orders in the link below';
    div.appendChild(h5);

    main.appendChild(div);
}