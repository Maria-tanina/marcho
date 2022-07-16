$(function(){
  $('.footer-top__title').on('click', function(){
    $(this).next().slideToggle();
  });

 $('.menu__btn, .menu__list-link').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');
 });
 $('.shop__filter-btn').on('click', function(){
  $('.shop__filters').slideToggle();
 });

  $('.standard__content-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/angle-left-slider.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/angle-right-slider.svg"></button>'
  });
$('.product-tabs__top-item').on('click', function(e){
  e.preventDefault();
  $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
  $(this).addClass('product-tabs__top-item--active');
  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  $($(this).attr('href')).addClass('product-tabs__content-item--active');
});
$('.product-slide__thumb').slick({
  asNavFor: '.product-slide__big',
  arrows: false,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  vertical:true,
  draggable: false
});
$('.product-slide__big').slick({
  asNavFor: '.product-slide__thumb',
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 1051,
      settings: {
        draggable: true,
      }
    },
  ]
});

$('.shop-content__filter-btn').on('click', function(){
  $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
  $(this).addClass('shop-content__filter-btn--active');
});
$('.button-list').on('click',function (){
  $('.product-item').addClass('product-item--list');
  $('.shop-content__inner').addClass('shop-content__nogrid');
});
$('.button-grid').on('click',function (){
  $('.product-item').removeClass('product-item--list');
  $('.shop-content__inner').removeClass('shop-content__nogrid');
});

  $('.select-style, .product-one__num').styler();
  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
  });
    $('.slider-top__inner').slick({
       dots:true,
       arrows:false,
       fade:true,
       autoplay:true,
       autoplaySpeed: 2000
      });
      $(".stars").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly:true
      });
      function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
      
      function initializeClock(id, endtime) {
        const clock = document.querySelector('.promo__clock');
        const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.promo__hours');
        const minutesSpan = clock.querySelector('.promo__minutes');
        const secondsSpan = clock.querySelector('.promo__seconds');
      
        function updateClock() {
          const t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      }
      
      const deadline = $('.promo__clock').attr('data-time');
      initializeClock('promo__clock', deadline);
});