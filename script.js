
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');

function updateCartCount() {
    cartCount.textContent = cart.length;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        const name = item.dataset.name;
        const price = parseFloat(item.dataset.price);
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${name} added to cart!`);
    });
});


document.getElementById('cart-link').addEventListener('click', function(e) {
    e.preventDefault();
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        alert(`Cart: ${cart.map(item => `${item.name} - $${item.price}`).join(', ')}\nTotal: $${total}`);
    }
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove)}