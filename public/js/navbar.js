const navSlide = () => {
    const burger = document.querySelector('.burger'),
          nav = document.querySelector('.nav-links'),
          navLinks = document.querySelectorAll('.nav-links li'),
          modalBg = document.querySelector('.modal-bg');

    // Toggle navs 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        modalBg.classList.toggle('modalbg-toggle');

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } 
        });

        // Burger animation
        burger.classList.toggle('toggle-burger')
    });

}

navSlide();