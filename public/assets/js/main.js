/**
 * Fixed version of Medilab main.js for React
 * Works safely without DOM errors
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    /**
     * Helper to select elements
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    const toggleScrolled = () => {
      const selectBody = select("body");
      const selectHeader = select("#header");
      if (!selectHeader) return;
      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;

      if (window.scrollY > 100) selectBody.classList.add("scrolled");
      else selectBody.classList.remove("scrolled");
    };

    window.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = select(".mobile-nav-toggle");
    if (mobileNavToggleBtn) {
      const mobileNavToggle = () => {
        document.body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      };
      mobileNavToggleBtn.addEventListener("click", mobileNavToggle);

      /**
       * Hide mobile nav on same-page/hash links
       */
      select("#navmenu a", true).forEach((navmenu) => {
        navmenu.addEventListener("click", () => {
          if (document.body.classList.contains("mobile-nav-active")) {
            mobileNavToggle();
          }
        });
      });

      /**
       * Toggle mobile nav dropdowns
       */
      select(".navmenu .toggle-dropdown", true).forEach((navmenu) => {
        navmenu.addEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle("active");
          this.parentNode.nextElementSibling.classList.toggle(
            "dropdown-active"
          );
          e.stopImmediatePropagation();
        });
      });
    }

    /**
     * Preloader
     */
    const preloader = select("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /**
     * Scroll top button
     */
    const scrollTop = select(".scroll-top");
    if (scrollTop) {
      const toggleScrollTop = () => {
        if (window.scrollY > 100)
          scrollTop.classList.add("active");
        else scrollTop.classList.remove("active");
      };

      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      window.addEventListener("load", toggleScrollTop);
      document.addEventListener("scroll", toggleScrollTop);
    }

    /**
     * Initialize AOS safely
     */
    if (window.AOS) {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }

    // Optional: remove unused lightbox/swiper/faq logic if not used
  });
})();
