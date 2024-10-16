import locationImg from './assets/Location.png';

export default function about() {
    const body = document.querySelector('body');
    body.style.minHeight = 'calc(100vh)';

    const main = document.getElementById('content');

    const about = document.querySelector('#main-page');
    about.classList.forEach(className => {
        about.classList.remove(className);
    });
    about.classList.add('about');

    const location = document.createElement('div');

    const locationTitle = document.createElement('h3');
    locationTitle.textContent = 'Location:';

    const locationText = document.createElement('p');
    locationText.textContent = 'Visit us at our location in the heart of Sushi City, where you can enjoy the freshest sushi in a modern and elegant setting.';
    
    const locationImage = document.createElement('img');
    locationImage.src = locationImg;
    locationImage.alt = 'Location Image';

    const locationAddress = document.createElement('h4');
    locationAddress.textContent = '1234 Sushi Way, Sushi City, CA 12345';

    location.appendChild(locationTitle);
    location.appendChild(locationText);
    location.appendChild(locationImage);
    location.appendChild(locationAddress);

    
    const hours = document.createElement('div');
    
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours:';

    const hoursText = document.createElement('p');
    hoursText.textContent = 'Monday - Friday: 11:30 AM - 10:00 PM';
    const hoursText2 = document.createElement('p');
    hoursText2.textContent = 'Saturday - Sunday: 12:00 PM - 11:00 PM';
    
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursText);
    hours.appendChild(hoursText2);
    
    
    about.appendChild(hours);
    about.appendChild(location);

    main.appendChild(about);

}