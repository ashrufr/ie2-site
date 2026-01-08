document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Message sent to info@ie2.io');
});

