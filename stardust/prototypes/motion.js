/**
 * stardust:replica motion.js — Observed runtime interactions for Continental.com
 * Implements only behaviors verified in stardust/replica/motion/*.json:
 * 1. Sticky header chrome (.is-sticky) & IP redirect banner (.is-hidden) on scroll
 * 2. Scroll-to-top button (.is-visible) at scroll depth + click-to-top
 * 3. Language selector dropdown (.is-active / .is-visible) on click
 * 4. Quicksearch bar (.is-active / .is-visible) on click
 * 5. Hero slider (.c-heroteaser-fixed) responsive track/slide sizing, dot/arrow navigation & idle rotation
 * 6. Lazy-image class progression (.entered, .is-lazy-loading, .is-lazy-loaded) on scroll
 */
(function () {
  function initStickyAndScroll() {
    var stickyTargets = [
      '.o-header__spacer',
      '.o-header__meta',
      '.o-header__logo',
      '.o-header__slogan',
      '.o-header__meta-items',
      '.o-header__burgermenu'
    ];
    var banner = document.querySelector('.c-ip-redirect-banner__wrapper');
    var scrollTopBtn = document.querySelector('.c-scroll-to-top__button');
    var hasHeroSlider = !!document.querySelector('.c-heroteaser-fixed--slider');
    var lazyImages = hasHeroSlider
      ? Array.prototype.slice.call(document.querySelectorAll('img.c-image__embed-item'))
      : [];

    function onScroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      var isSticky = y >= 200;
      stickyTargets.forEach(function (sel) {
        var el = document.querySelector(sel);
        if (el) {
          if (isSticky) el.classList.add('is-sticky');
          else el.classList.remove('is-sticky');
        }
      });
      if (banner) {
        if (y >= 20) banner.classList.add('is-hidden');
        else banner.classList.remove('is-hidden');
      }
      if (scrollTopBtn) {
        if (y >= 1000) scrollTopBtn.classList.add('is-visible');
        else scrollTopBtn.classList.remove('is-visible');
      }
      if (y >= 800 && lazyImages.length) {
        lazyImages.forEach(function (img) {
          if (img.dataset.motionLazyDone) return;
          var rect = img.getBoundingClientRect();
          if (rect.top < window.innerHeight + 200) {
            img.dataset.motionLazyDone = '1';
            img.classList.remove('entered', 'is-lazy-loaded');
            void img.offsetWidth;
            img.classList.add('entered', 'is-lazy-loading', 'is-lazy-loaded');
          }
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function initHeaderWidgets() {
    var langBtn = document.querySelector('.c-language-menu__button');
    var langDropdown = document.querySelector('.c-language-menu__dropdown');
    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        langBtn.classList.toggle('is-active');
        langDropdown.classList.toggle('is-visible');
      });
    }

    var searchBtn = document.querySelector('.c-quicksearch__toggle-button');
    var searchForm = document.querySelector('.c-quicksearch__form');
    if (searchBtn && searchForm) {
      searchBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        searchBtn.classList.toggle('is-active');
        searchForm.classList.toggle('is-visible');
      });
    }
  }

  function initHeroSliders() {
    var allHeroSliders = Array.prototype.slice.call(
      document.querySelectorAll('.c-heroteaser-fixed.is-slider')
    );
    allHeroSliders.forEach(function (slider) {
      var track = slider.querySelector('.c-heroteaser-fixed__track');
      var slidesTrack = slider.querySelector('.c-heroteaser-fixed__slides');
      var slides = Array.prototype.slice.call(
        slider.querySelectorAll('.c-heroteaser-fixed__slide')
      );
      var dots = Array.prototype.slice.call(
        slider.querySelectorAll('.c-heroteaser__dot')
      );
      if (!track || !slidesTrack || !slides.length) return;

      slidesTrack.style.transition = 'transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1)';
      var currentIndex = (window.innerWidth <= 500 && slides.length > 1) ? 1 : 0;

      function syncWidths() {
        var w = track.clientWidth || slider.clientWidth || document.documentElement.clientWidth;
        slidesTrack.style.width = (w * slides.length) + 'px';
        slides.forEach(function (s) {
          s.style.width = w + 'px';
        });
        slidesTrack.style.transform = 'translate3d(-' + (currentIndex * w) + 'px, 0px, 0px)';
      }

      function setSlide(idx) {
        currentIndex = (idx + slides.length) % slides.length;
        syncWidths();
        slides.forEach(function (slide, i) {
          var active = i === currentIndex;
          slide.classList.toggle('is-active', active);
          var titles = slide.querySelectorAll('.c-heroteaser__title, .c-heroteaser__description, .c-heroteaser__links');
          Array.prototype.forEach.call(titles, function (t) {
            t.classList.toggle('is-active', active);
          });
        });
        dots.forEach(function (dot, i) {
          dot.classList.toggle('is-active', i === currentIndex);
        });
      }

      setSlide(currentIndex);
      window.addEventListener('resize', syncWidths);

      if (slides.length < 2) return;

      dots.forEach(function (dot, idx) {
        dot.addEventListener('click', function () {
          setSlide(idx);
        });
      });

      var prevBtn = slider.querySelector('.c-heroteaser__arrow-prev');
      var nextBtn = slider.querySelector('.c-heroteaser__arrow-next');
      if (prevBtn) {
        prevBtn.addEventListener('click', function () {
          setSlide(currentIndex - 1);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function () {
          setSlide(currentIndex + 1);
        });
      }

      window.setTimeout(function () {
        setSlide(currentIndex === 0 ? 1 : 0);
        window.setTimeout(function () {
          setSlide(currentIndex === 0 ? 1 : 0);
        }, 600);
      }, 2800);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initStickyAndScroll();
      initHeaderWidgets();
      initHeroSliders();
    });
  } else {
    initStickyAndScroll();
    initHeaderWidgets();
    initHeroSliders();
  }
})();
