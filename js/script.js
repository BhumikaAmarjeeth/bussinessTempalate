/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* Author : Bhumika
* Company : Fulgid Software Solutions Pvt Ltd
* ==========================================
*
*/

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
// Hamburgur menu
function myFunction(x) {
  x.classList.toggle("change");
}

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.navbar .navbar-brand img').attr('src','./images/logo-dark.png');
    }
    if ($(this).scrollTop() < 10) {
      $('.navbar .navbar-brand img').attr('src','./images/logo.png');
    }
  })
});


//clients
$('.owl-carousel').owlCarousel({
  loop:true,
  items:5,
  margin:50,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

//animation fade
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


//Go to top button
var btn = $('#myBtn');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


//smooth scroll for menu link
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".a1").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//script for slider

$(document).ready(function(){
  for (var i=1; i <= $('.slider__slide').length; i++){
    $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
  }
  setTimeout(function(){
    $('.slider__wrap').addClass('slider__wrap--hacked');
  }, 1000);
})

function goToSlide(number){
  $('.slider__slide').removeClass('slider__slide--active');
  $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
}

$('.slider__next, .go-to-next').on('click', function(){
  var currentSlide = Number($('.slider__slide--active').data('slide'));
  var totalSlides = $('.slider__slide').length;
  currentSlide++
  if (currentSlide > totalSlides){
    currentSlide = 1;
  }
  goToSlide(currentSlide);
});



//model video play
// $('#myModal').on('hidden.bs.modal', function () {
//   callPlayer('yt-player', 'stopVideo');
// });
$('#myModalPrev').on('show.bs.modal', function (e) {
  var idVideo = $(e.relatedTarget).data('id');
  $('#myModalPrev .modal-body').html('<iframe width="100%" height="400px" src="https://www.youtube.com/embed/' + idVideo + '?autoplay=true" frameborder="0" allowfullscreen></iframe>');
});
//on close remove
$('#myModalPrev').on('hidden.bs.modal', function () {
  $('#myModalPrev .modal-body').empty();
});

//lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

//off canva menu
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("all").style.marginRight = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("all").style.marginRight= "0";
}