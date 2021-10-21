/**
 * Page Init Plugin @VERSION
 *
 * 
 * Copyright (c) 2002 - 2013 Mr Tùng
 *
 */


(function ($) {
    
    $(window).resize(function () {
        var width = $(window).width();
        $('.header').css('width', width + 'px');
        $('.footer').css('width', width + 'px');
        $('#container').css('width', "100%");

        $('.container').css('width', width + 'px');
    });

    $(window).load(function () {
        var width = $(window).width() - 40;
            $('.header').css('width', width+'px');
            $('.footer').css('width', width + 'px');
            $('#container').css('width', "100%");

            $('.container').css('width', width + 'px');
    });

})(jQuery);

