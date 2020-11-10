document.addEventListener('DOMContentLoaded', function () {

    function initMenu() {
        const $menuBtn = document.querySelector('.header__menu-btn');
        const $menuWrapper = document.querySelector('.header__navigation');

        document.body.addEventListener('click', event => {
            if (event.target.closest('.header__navigation')) {
                $menuWrapper.classList.add('active');
                $menuBtn.classList.add('active');
            } else if (event.target.closest('.header__menu-btn')) {
                $menuWrapper.classList.toggle('active');
                $menuBtn.classList.toggle('active');
            } else {
                $menuWrapper.classList.remove('active');
                $menuBtn.classList.remove('active');
            }
        });
    }

    function initMenuAccordion() {
        const $submenu = document.querySelector('.header__submenu');

        $submenu.addEventListener('click', event => {
            if (event.target.closest('.header__submenu')) {
                event.target.closest('.header__submenu').classList.toggle('active');
            }
        });
    }

    function initMainSlider() {
        const mainSlider = new Swiper('.main-slider__wrapper', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // Функции работающие только на мобильных устройствах
    if (window.innerWidth <= 940) {
        
    }

    initMenu();
    initMenuAccordion();
    initMainSlider();

});