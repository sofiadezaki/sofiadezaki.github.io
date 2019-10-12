//Función propia del navegador
// alert('Texto de ejemplo');

// // Analizar el código para ver donde falla
// console.log ('Texto de ejemplo');

// Variable - Nombre para guardar cosas (textos, números, variables, funciones..)
// var name = 'Sofia';

// console.log(name);

// Funciones - 
// console.log(20 * 2)
// var multiplier = 2:

// console.log(20 * multiplier);
// console.log(50 * multiplier);

// var multiplier = 3;

// function multiplyBy2(num){
//     return num * 2;
// }
// console.log (multiplyBy2(20));

// console.log(50 * multiplier);


// Desplegar-Plegar menu
// $('.menu').on('click', function() {
//     $('.navigation').toggle();
// })
AOS.init({
    duration: 1200,
  })

  
$('document').ready(function(){

    console.log('ready');

    $(window).scroll(function(){
        if($(window).scrollTop()<20){
            $('.text-scroll').stop(true,true).fadeIn('slow');
      } else {
            $('.text-scroll').stop(true,true).fadeOut('slow');
      }
    });



    $('#services-b').on('click', function(){
        $('html').animate({
            scrollTop: $('.services').offset().top 
        }, 1000);
    });


    $('#cv-b').on('click', function(){
        $('html').animate({
            scrollTop: $('.cv-container').offset().top -300
        }, 1000);
    });


    $('#about-b').on('click', function(){
        $('html').animate({
            scrollTop: $('.slider-about').offset().top -260
        }, 1000);
    });

    $('#about-b').on('click', function() {
        $('#cv').hide('cv-hide');
    });



    $('#button-cv').on('click', function() {
        $('#cv').show('cv-open');
    });


    $('#cv-b').on('click', function() {
        $('#cv').show('cv-open');

    });


    $('#button-about').on('click', function() {
        $('#cv').hide('cv-hide');
    });


    $('#open-menu').on('click', function(){
        $('.navigation').toggleClass('expand');
        return false;
      });




    $('#menu-b').on('click', function() {
        $('.navigation').show('nav-open');
        $('#menu-b').hide('nav-hide');
        $('#close-b').show('close-show');
    });
    

})


