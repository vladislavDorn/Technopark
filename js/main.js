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