// Import the images
import sashimiImg from './assets/sachimi.jpg';
import nigiriSushiImg from './assets/NigiriSushi.jpg';
import makiImg from './assets/Maki.jpg';
import uramakiImg from './assets/Uramaki.jpg';
import temakiImg from './assets/Temaki.jpg';
import chirashiImg from './assets/Chirashi.jpg';

export default function menu() {
    const body = document.querySelector('body');
    body.style.maxHeight = 'fitContent';
    const main = document.getElementById('content');


    // Menu items array with imported images
    const menuItems = [
        {
            name: "Sashimi",
            image: sashimiImg,
            description: "Fresh slices of raw fish, served with soy sauce and wasabi for a pure taste experience."
        },
        {
            name: "Nigiri Sushi",
            image: nigiriSushiImg,
            description: "Hand-pressed sushi rice topped with fresh seafood, often served with a dab of wasabi."
        },
        {
            name: "Maki",
            image: makiImg,
            description: "Rice and fillings rolled in seaweed, cut into bite-sized pieces for a perfect balance of flavor."
        },
        {
            name: "Uramaki",
            image: uramakiImg,
            description: "Inside-out roll with rice on the outside, filled with various ingredients and rolled with nori."
        },
        {
            name: "Temaki",
            image: temakiImg,
            description: "A cone-shaped hand roll filled with rice, seafood, and vegetables, wrapped in crisp seaweed."
        },
        {
            name: "Chirashi",
            image: chirashiImg,
            description: "A bowl of sushi rice topped with a colorful assortment of sashimi and garnishes."
        }
    ];

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    const options = document.createElement('div');
    options.classList.add('options');

    
    main.appendChild(menuContainer);
    menuContainer.appendChild(options);

    menuItems.forEach(item => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('food-card');

        const foodImage = document.createElement('img');
        foodImage.src = item.image;
        foodImage.alt = item.name;

        const foodText = document.createElement('div');
        foodText.classList.add('food-text');

        const foodName = document.createElement('h4');
        foodName.textContent = item.name;

        const foodDescription = document.createElement('p');
        foodDescription.textContent = item.description;

        foodText.appendChild(foodName);
        foodText.appendChild(foodDescription);
        foodCard.appendChild(foodImage);
        foodCard.appendChild(foodText);
        options.appendChild(foodCard);
    });
}