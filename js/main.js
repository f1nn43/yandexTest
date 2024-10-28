const section5Carousel = document.querySelector('.section5__carousel');
let device;
const corousel5Func = () => {
  const width = document.body.clientWidth;
  if(width < 1000 && device !== 'mob'){
    device = 'mob'
    section5Carousel.classList.add('swiper5')
    section5Carousel.classList.add('swiper')
    const swiper5 = new Swiper('.swiper5', {
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
  } else if(width > 1000 && device !== 'desk') {
    device = 'desk'
    section5Carousel.classList.remove('swiper5')
    section5Carousel.classList.remove('swiper')
    section5Carousel.classList.remove('swiper-initialized')
    section5Carousel.classList.remove('swiper-horizontal')
    section5Carousel.classList.remove('swiper-backface-hidden')
    section5Carousel.innerHTML = `
    <div class="swiper-wrapper section5__items">
                    <div class="swiper-slide section5__pair">
                        <div class="section5__item">
                            <div class="section5__number">
                                <span>1</span>
                                <img src="./img/circle.png" alt="circle">
                            </div>
                            <p class="section5__info">Строительство железнодорожной магистрали Москва-Васюки</p>
                        </div>
                        <div class="section5__item">
                            <div class="section5__number">
                                <span>2</span>
                                <img src="./img/circle.png" alt="circle">
                            </div>
                            <p class="section5__info">Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</p>
                        </div>
                    </div>
                    <div class="swiper-slide section5__item">
                        <div class="section5__number">
                            <span>3</span>
                            <img src="./img/circle.png" alt="circle">
                        </div>
                        <p class="section5__info">Поднятие сельского хозяйства в радиусе на&nbsp;тысячу километров: производство
                            овощей,
                            фруктов, икры, шоколадных конфет</p>
                    </div>
                    <div class="swiper-slide section5__pair">
                        <div class="section5__item">
                            <div class="section5__number">
                                <span>4</span>
                                <img src="./img/circle.png" alt="circle">
                            </div>
                            <p class="section5__info">Строительство дворца для&nbsp;турнира</p>
                        </div>
                        <div class="section5__item">
                            <div class="section5__number">
                                <span>5</span>
                                <img src="./img/circle.png" alt="circle">
                            </div>
                            <p class="section5__info">Размещение гаражей для&nbsp;гостевого автотранспорта</p>
                        </div>
                    </div>
                    <div class="swiper-slide section5__item">
                        <div class="section5__number">
                            <span>6</span>
                            <img src="./img/circle.png" alt="circle">
                        </div>
                        <p class="section5__info">Постройка сверхмощной радиостанции для передачи всему миру сенсационных
                            результатов
                        </p>
                    </div>
                    <div class="swiper-slide section5__item ">
                        <img class="section5__img" src="./img/background5__plane.png" alt="background5__plane" />
                        <div class="section5__number">
                            <span>7</span>
                            <img src="./img/circle.png" alt="circle">
                        </div>
                        <p class="section5__info">Создание аэропорта «Большие Васюки» с&nbsp;регулярным отправлением почтовых
                            самолётов
                            и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн</p>
                    </div>
                </div>
                <div class="swiper-settings">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                </div>`
  }
}

const swiper6 = new Swiper('.swiper6', {
  // Optional parameters
  direction: 'horizontal',
  centeredSlides: true,
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
  loop: true,
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

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    document.querySelector('.section6__settings').children[1].children[0].innerHTML = document.querySelector('.section6__item.swiper-slide-active').ariaLabel.split(' / ')[0]
    document.querySelector('.section6__settings').children[1].children[1].innerHTML = document.querySelector('.section6__item.swiper-slide-active').ariaLabel.split(' / ')[1]
  });
});

const section6Carousel = document.querySelector('.swiper6')
mutationObserver.observe(section6Carousel.children[1], {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

window.onload = corousel5Func()
window.addEventListener('resize',(e) => {
  corousel5Func()
})