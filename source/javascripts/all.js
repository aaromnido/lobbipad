
$(document).ready(function(){
  // var closeButton = '<img src="/images/icon-close.svg" alt="Icon Close" id="close-button">';

  // $( '#main-nav-mobile' ).click(function() {
  //   event.preventDefault();
  //   $('#main-nav-desktop').append( closeButton );
  //   $('#main-nav-desktop').slideToggle( "slow", "linear" );

  // });

  var responsiveMenuContainer = '<div class="responsive-menu-container hidden"></div>';
  var closeButton = '<div class="close-button"><span><img src="/images/icon-close.svg"></span></div>';
  var menu = $('#main-nav-desktop');


  $("body").prepend(responsiveMenuContainer);
  $(".responsive-menu-container").append(closeButton);
  $(".responsive-menu-container").append(menu);


  $( '#responsive-button' ).click(function() {
    console.log("clicked");
    $('.responsive-menu-container').toggleClass('hidden');
  });
  $( '.close-button' ).click(function() {
    $('.responsive-menu-container').toggleClass('hidden');
  });

});
console.log("cargado");
