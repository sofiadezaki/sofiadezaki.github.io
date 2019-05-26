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



})


