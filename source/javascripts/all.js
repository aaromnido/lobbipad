
$(document).ready(function(){

  var responsiveMenuContainer = '<div class="responsive-menu-container hidden"></div>';
  var closeButton = '<div class="close-button"><span><img src="/images/icon-close.svg"></span></div>';
  var menu = $('.main-nav-desktop');


  $("body").prepend(responsiveMenuContainer);
  $(".responsive-menu-container").append(closeButton);
  $( menu ).clone().appendTo( ".responsive-menu-container" );
  //$(".responsive-menu-container").clone().append(menu);


  $( '#responsive-button' ).click(function() {
    console.log("clicked");
    $('.responsive-menu-container').toggleClass('hidden');
  });
  $( '.close-button' ).click(function() {
    $('.responsive-menu-container').toggleClass('hidden');
  });
});

