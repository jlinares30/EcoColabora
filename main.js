document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const leftButton = carousel.querySelector('.carousel-button.left');
        const rightButton = carousel.querySelector('.carousel-button.right');
        const itemsContainer = carousel.querySelector('.carousel-items');

        leftButton.addEventListener('click', () => {
            itemsContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
            console.log(1)
        });

        rightButton.addEventListener('click', () => {
            itemsContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
            console.log(2)
        });
    });
});
