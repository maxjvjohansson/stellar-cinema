let currentOfferIndex = 1; 
const totalOffers = 3; 

const offers = document.querySelectorAll('.offer');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function showOffer(index) {
    offers.forEach((offer, i) => {
        offer.style.display = (i === index) ? 'block' : 'none'; 
    });
}

rightArrow.addEventListener('click', () => {
    currentOfferIndex = (currentOfferIndex + 1) % totalOffers;
    showOffer(currentOfferIndex);
});

leftArrow.addEventListener('click', () => {
    currentOfferIndex = (currentOfferIndex - 1 + totalOffers) % totalOffers;
    showOffer(currentOfferIndex);
});

let autoSwitch = setInterval(() => {
    currentOfferIndex = (currentOfferIndex + 1) % totalOffers;
    showOffer(currentOfferIndex);
}, 5000);

leftArrow.addEventListener('click', () => {
    clearInterval(autoSwitch); 
});

rightArrow.addEventListener('click', () => {
    clearInterval(autoSwitch); 
});
