/* Part 2 & 3: JS Functions & CSS Integration */

/* ------------------- Select Elements ------------------- */
const button = document.querySelector('.animated-button');
const boxes = document.querySelectorAll('.animated-box');
const cards = document.querySelectorAll('.card');
const popupButton = document.querySelector('.popup-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

/* ------------------- Button Animation Function ------------------- */
/**
 * Animate a button by scaling it
 * @param {HTMLElement} element - the button element
 * @param {number} scale - scaling factor
 * @param {number} duration - transition duration in seconds
 * @returns {string} - message confirming animation
 */
function animateButton(element, scale = 1.5, duration = 0.3) {
    element.style.transition = `transform ${duration}s ease`;
    element.style.transform = `scale(${scale})`;

    element.addEventListener('transitionend', function handler() {
        element.style.transform = 'scale(1)';
        element.removeEventListener('transitionend', handler);
    });

    return `Button animation triggered with scale ${scale}`;
}

// Trigger button animation on click
button.addEventListener('click', () => {
    console.log(animateButton(button, 1.5, 0.3));
});

/* ------------------- Box Bounce Function ------------------- */
/**
 * Trigger bounce animation on an element
 * @param {HTMLElement} element
 * @returns {string} - animation status
 */
function triggerBounce(element) {
    element.classList.add('bounce-animation');

    element.addEventListener('animationend', function handler() {
        element.classList.remove('bounce-animation');
        element.removeEventListener('animationend', handler);
    });

    return "Bounce animation triggered";
}

// Attach bounce to all boxes
boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log(triggerBounce(box));
    });
});

/* ------------------- Card Flip Function ------------------- */
/**
 * Flip a card element
 * @param {HTMLElement} cardElement
 * @returns {boolean} - true if flipped, false if returned
 */
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
    return cardElement.classList.contains('flipped');
}

// Attach flip to all cards
cards.forEach(card => {
    card.addEventListener('click', () => {
        console.log("Card flipped?", flipCard(card));
    });
});

/* ------------------- Popup Modal Functions ------------------- */
/**
 * Show a popup modal
 * @param {HTMLElement} popupElement
 * @returns {boolean} - true when shown
 */
function showPopup(popupElement) {
    popupElement.classList.add('show');
    return true;
}

/**
 * Hide a popup modal
 * @param {HTMLElement} popupElement
 * @returns {boolean} - true when hidden
 */
function hidePopup(popupElement) {
    popupElement.classList.remove('show');
    return true;
}

// Event listeners for popup
popupButton.addEventListener('click', () => showPopup(popup));
closePopup.addEventListener('click', () => hidePopup(popup));
