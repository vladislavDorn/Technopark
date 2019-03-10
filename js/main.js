//Header navbar btn
const menuOne = document.querySelector('.menuOne');
function addClassFunOne() {
    this.classList.toggle("clickMenuOne");
}
menuOne.addEventListener('click', addClassFunOne);

//Mobile menu
$(function() {
	menu = $('.header__nav');

  $('.header__nav_bar').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('.header__nav').on('click', function(e) {                
    var w = $(window).width(); if(w < 960 ) {
      menu.slideToggle(); 
    }
  });
});

//slider partners
$('.partners__owlcarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["",""],
    dots: false,
    responsive:{ 
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items: 4
        },
        1300:{
            items:6
        }
    }
});

//slider gallery
$('.gallery__owlcarousel').owlCarousel({
    loop:true,
    nav:true,
    margin: 25,
    navText : ["",""],
    dots: false,
    responsive:{ 
      0:{
          items:1
      },
      500: {
        items: 2
      },
      1300:{
          items:3
      }
  }
});

//contact map
// // Функция ymaps.ready() будет вызвана, когда
//     // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
//     ymaps.ready(init);
//     function init(){ 
//         // Создание карты.    
//         var myMap = new ymaps.Map("map", {
//             // Координаты центра карты.
//             // Порядок по умолчанию: «широта, долгота».
//             // Чтобы не определять координаты центра карты вручную,
//             // воспользуйтесь инструментом Определение координат.
//             center: [42.85698638164069,74.63462535160292],
//             // Уровень масштабирования. Допустимые значения:
//             // от 0 (весь мир) до 19.
//             zoom: 17
//         });
//     }
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [42.85724148476384,74.63450191169608],
              zoom: 17
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'image/anchor.png',
              // Размеры метки.
              iconImageSize: [30, 42],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          }),
  
          myPlacemarkWithContent = new ymaps.Placemark([42.85724148476384,74.63450191169608], {
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'images/ball.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });
  
      myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
  });