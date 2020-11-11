document.addEventListener('DOMContentLoaded', function () {

    function initMenu() {
        const $menuBtn = document.querySelector('.header__menu-btn');
        const $menuWrapper = document.querySelector('.header__navigation');
        const $header = document.querySelector('.header');
        const $html = document.querySelector('html');

        document.body.addEventListener('click', event => {
            if (event.target.closest('.header__navigation')) {
                $menuWrapper.classList.add('active');
                $menuBtn.classList.add('active');
                $html.classList.add('overflow-off');
                $header.classList.add('opened');
            } else if (event.target.closest('.header__menu-btn')) {
                $menuWrapper.classList.toggle('active');
                $menuBtn.classList.toggle('active');
                $html.classList.toggle('overflow-off');
                $header.classList.toggle('opened');
            } else {
                $menuWrapper.classList.remove('active');
                $menuBtn.classList.remove('active');
                $header.classList.remove('opened');
                $html.classList.remove('overflow-off');
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
                el: '.swiper-pagination.main-slider__pagination',
                clickable: true,
            },
        });
    }

    function initReviewsSlider() {
        if (document.querySelector('.reviews__slider')) {
            const reviewsSlider = new Swiper('.reviews__slider', {
                pagination: {
                    el: '.swiper-pagination.reviews__pagination',
                    clickable: true,
                },
            });
        }
    }

    function initImportantSlider() {
        if (document.querySelector('.important__slider')) {
            const importantSlider = new Swiper('.important__slider', {
                pagination: {
                    el: '.swiper-pagination.important__pagination',
                    clickable: true,
                },
            });
        }
    }

    function initModalWindows() {
        const headerBtn = document.querySelector('.header__btn');

        MicroModal.init();
        
    }

    // Функции работающие только на мобильных устройствах
    if (window.innerWidth <= 940) {
        
    }

    if (window.innerWidth <= 1024) {
        initReviewsSlider();
        initImportantSlider();
    }

    initMenu();
    initMenuAccordion();
    initMainSlider();
    initModalWindows();

});