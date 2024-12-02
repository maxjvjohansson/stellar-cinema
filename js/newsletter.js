let currentOfferIndex = 0;
const totalOffers = 3; 

const offers = document.querySelectorAll('.offer');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const indicators = document.querySelectorAll('.indicator');

function showOffer(index) {
    offers.forEach((offer, i) => {
        offer.style.display = (i === index) ? 'block' : 'none';
    });
    updateIndicators(index);
}

// Function for circle fill
function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Previous offer
rightArrow.addEventListener('click', () => {
    currentOfferIndex = (currentOfferIndex + 1) % totalOffers;
    showOffer(currentOfferIndex);
    resetAutoSwitch();
});

// Next offer
leftArrow.addEventListener('click', () => {
    currentOfferIndex = (currentOfferIndex - 1 + totalOffers) % totalOffers;
    showOffer(currentOfferIndex);
    resetAutoSwitch();
});

// Clickable circles
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentOfferIndex = index;
        showOffer(currentOfferIndex);
        resetAutoSwitch();
    });
});

// Automatic slideshow every 5 seconds
let autoSwitch = setInterval(() => {
    currentOfferIndex = (currentOfferIndex + 1) % totalOffers;
    showOffer(currentOfferIndex);
}, 5000);

// Reset automatic slideshow if clicked
function resetAutoSwitch() {
    clearInterval(autoSwitch);
    autoSwitch = setInterval(() => {
        currentOfferIndex = (currentOfferIndex + 1) % totalOffers;
        showOffer(currentOfferIndex);
    }, 5000);
}

showOffer(currentOfferIndex);



