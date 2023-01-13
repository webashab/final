(function($){
    'use strict';

//code start

$('.bar-menu i').on('click', function(){
    $('.our-menu').slideToggle();
})

$(window).resize(function(){

    var screenSize = $(window).width();

    if ( screenSize > 991 ) {
        $('.our-menu').removeAttr('style');
    }

})







}) (jQuery);