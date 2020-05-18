/*jshint esversion: 6 */

const navSlide = () => {
   const hamburger = document.querySelector('.hamburger');
   const nav = document.querySelector('.NavMobile');
   const body = document.querySelector('body');

   hamburger.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      body.classList.toggle('no-scroll');

      hamburger.classList.toggle('toggle');
   });

};

navSlide();