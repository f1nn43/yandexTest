const section5Carousel = document.querySelector('.section5__carousel');

const corousel5Func = () => {
  const width = document.body.clientWidth;
  if(width < 1000){
    section5Carousel.classList.add('swiper5')
    section5Carousel.classList.add('swiper')
    const swiper = new Swiper('.swiper5', {
      // Optional parameters
      direction: 'horizontal',
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  } else {
    section5Carousel.classList.remove('swiper5')
  }
}

window.onload = corousel5Func()
window.addEventListener('resize',(e) => {
  corousel5Func()
})