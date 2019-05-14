$('document').ready(function(){

    console.log('ready');

    $(window).scroll(function(){
        if($(window).scrollTop()<20){
            $('.text-scroll').stop(true,true).fadeIn('slow');
      } else {
            $('.text-scroll').stop(true,true).fadeOut('slow');
      }
   });

    $('.about').on('click', function(){
        $('html').animate({
            scrollTop: $('#about').offset().top -100
        }, 1000);
    })

    $('#cv-b').on('click', function(){
        $('html').animate({
            scrollTop: $('#about').offset().top -100
        }, 1000);
    });

    $('#button-cv').on('click', function() {
        $('#cv').show('cv-open');

    });

    $('#cv-b').on('click', function() {
        $('#cv').show('cv-open');

    });


    $('#button-about').on('click', function() {
        $('#cv').hide('cv-open');
    });

    $('.about').on('click', function() {
        $('#cv').hide('cv-open');
    });