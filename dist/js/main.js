"use strict";

document.addEventListener('DOMContentLoaded', function () {
  function initMenu() {
    var $menuBtn = document.querySelector('.header__menu-btn');
    var $menuWrapper = document.querySelector('.header__navigation');
    var $header = document.querySelector('.header');
    var $html = document.querySelector('html');
    document.body.addEventListener('click', function (event) {
      if (event.target.closest('.header__navigation')) {
        $menuWrapper.classList.add('active');
        $menuBtn.classList.add('active');
        $html.classList.add('overflow-off');
        $header.classList.add('opened');
        console.log('click');
      } else if (event.target.closest('.header__menu-btn')) {
        $menuWrapper.classList.toggle('active');
        $menuBtn.classList.toggle('active');
        $html.classList.toggle('overflow-off');
        $header.classList.toggle('opened');
      } else if (event.target.closest('.modal')) {} else if (document.querySelector('.is-open')) {} else {
        $menuWrapper.classList.remove('active');
        $menuBtn.classList.remove('active');
        $header.classList.remove('opened');
        $html.classList.remove('overflow-off');
      }
    });
  }

  function initMenuAccordion() {
    var $submenu = document.querySelector('.header__submenu');
    $submenu.addEventListener('click', function (event) {
      if (event.target.closest('.header__submenu')) {
        event.target.closest('.header__submenu').classList.toggle('active');
      }
    });
  }

  function initMainSlider() {
    var mainSlider = new Swiper('.main-slider__wrapper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination.main-slider__pagination',
        clickable: true
      }
    });
  }

  function initReviewsSlider() {
    if (document.querySelector('.reviews__slider')) {
      var reviewsSlider = new Swiper('.reviews__slider', {
        pagination: {
          el: '.swiper-pagination.reviews__pagination',
          clickable: true
        }
      });
    }
  }

  function initImportantSlider() {
    if (document.querySelector('.important__slider')) {
      var importantSlider = new Swiper('.important__slider', {
        pagination: {
          el: '.swiper-pagination.important__pagination',
          clickable: true
        }
      });
    }
  }

  function initModalWindows() {
    var $html = document.querySelector('html');

    function addOverflow() {
      $html.classList.add('overflow-off');
    }

    function removeOverflow() {
      $html.classList.remove('overflow-off');
    }

    MicroModal.init({
      debugMode: true,
      onShow: addOverflow,
      onClose: removeOverflow,
      awaitCloseAnimation: true,
      awaitOpenAnimation: true
    });
  } // Функции работающие только на мобильных устройствах


  if (window.innerWidth <= 940) {
    initMenu();
    initMenuAccordion();
  }

  if (window.innerWidth <= 1024) {
    initReviewsSlider();
    initImportantSlider();
  }

  initMainSlider();
  initModalWindows();
});