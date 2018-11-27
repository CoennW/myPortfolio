$(document).ready(function () {


    $('img').each(function () {



        $(this).wrap($('<a/>', {
            href: $(this).attr('src'),
            'data-fancybox': 'gallery',
            class: "fancybox",
            rel: "artikel"
        }));
    });




    $('[data-fancybox="gallery"]').fancybox({
        arrows: false,
        toolbar: true,
        infobar: false,
        buttons:["close"]
    });


    $('.js-tilt').tilt({
    reset: false
    });
    

});
