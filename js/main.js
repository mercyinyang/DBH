var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for ( var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for ( var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// $(function() {
			
//   var Page = (function() {

//     var $navArrows = $( '#nav-arrows' ),
//       $nav = $( '#nav-dots > span' ),
//       slitslider = $( '#slider' ).slitslider( {
//         onBeforeChange : function( slide, pos ) {

//           $nav.removeClass( 'nav-dot-current' );
//           $nav.eq( pos ).addClass( 'nav-dot-current' );

//         }
//       } ),

//       init = function() {

//         initEvents();
        
//       },
//       initEvents = function() {

//         // add navigation events
//         $navArrows.children( ':last' ).on( 'click', function() {

//           slitslider.next();
//           return false;

//         } );

//         $navArrows.children( ':first' ).on( 'click', function() {
          
//           slitslider.previous();
//           return false;

//         } );

//         $nav.each( function( i ) {
        
//           $( this ).on( 'click', function( event ) {
            
//             var $dot = $( this );
            
//             if( !slitslider.isActive() ) {

//               $nav.removeClass( 'nav-dot-current' );
//               $dot.addClass( 'nav-dot-current' );
            
//             }
            
//             slitslider.jump( i + 1 );
//             return false;
          
//           } );
          
//         } );

//       };

//       return { init : init };

//   })();

//   Page.init();
// });

$(document).ready(() => {
  $('.sidenav').sidenav();
});

let instance = M.Sidenav.getInstance('#mobile-links');

function initMap() {
  let location = {
    lat: 6.431130,
    lng: 3.427020
  };

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: location 
  });

  let marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
