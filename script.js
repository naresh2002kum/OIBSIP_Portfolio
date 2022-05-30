// $(document).ready(function(){

//     $('#menu').click(function(){
//         $(this).toggleclass('fa-times');
//         $('header').toggleclass('toggle')
//     });

//     $(window).on('scroll load',function(){

//         $('this').removeclass( 'fa-times');
//         $('header').removeclass('toggle');

//     });

// });

$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });