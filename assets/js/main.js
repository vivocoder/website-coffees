const  menuOPenBtn = document.querySelector('#menu-open-button')
const  menucloseBtn = document.querySelector('#menu-close-button')

menuOPenBtn.addEventListener('click', (e)=>{
    e.stopPropagation()
    
    document.body.classList.toggle("show-mobile-menu")
})

menucloseBtn.addEventListener('click', ()=>{
        document.body.classList.remove('show-mobile-menu')

})


document.addEventListener('click' , ()=>{
    document.body.classList.remove('show-mobile-menu')
})

let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});