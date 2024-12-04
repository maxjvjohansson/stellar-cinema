const scrollArrow = document.querySelector('.enter-button');

scrollArrow.addEventListener('click', () => {
    const nextSection = document.querySelector('header'); 
    nextSection.scrollIntoView({ behavior: 'smooth' });
});