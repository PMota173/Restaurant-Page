export default function footer() {
    // Create footer element

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    // Create footer text
    const footerText = document.createElement('a');
    footerText.textContent = '© 2024 Pedro Mota';

    // Append footer text to footer
    footer.appendChild(footerText);
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.padding = '1rem 0';
    footer.style.backgroundColor = '#000000b9';
    footer.style.color = 'white';
    footer.style.textAlign = 'center';

    // Append footer to body
    document.body.appendChild(footer);
}