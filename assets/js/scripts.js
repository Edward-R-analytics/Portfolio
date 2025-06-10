/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // Lightbox Customization
document.addEventListener('DOMContentLoaded', function() {
  // Inyecta el icono cuando el lightbox se abre
  document.querySelectorAll('[data-lightbox="portfolio"]').forEach(item => {
    item.addEventListener('click', function(e) {
      setTimeout(() => {
        const externalLink = this.getAttribute('data-external-link');
        const lbData = document.querySelector('.lb-data .lb-details .lb-caption');
        
        if (lbData && externalLink) {
          // Crea el icono de enlace
          const linkIcon = document.createElement('a');
          linkIcon.href = externalLink;
          linkIcon.target = '_blank';
          linkIcon.className = 'lb-external-link';
          linkIcon.innerHTML = '<i class="fas fa-external-link-alt"></i>';
          
          // Inserta después del título
          lbData.insertAdjacentElement('beforeend', linkIcon);
        }
      }, 300); // Delay para asegurar que Lightbox está listo
    });
  });
});

});
