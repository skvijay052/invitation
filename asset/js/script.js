 $(document).ready(function() {
    AOS.init({
        duration: 1200,
        startEvent: 'DOMContentLoaded',
        once: true,
    });
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
      });
       
     

 }); 

 
$(window).scroll(function(){
    if ($(window).scrollTop() >= 180) {
        $('.primary-header').addClass('fixed-header'); 
    }
    else {
        $('.primary-header').removeClass('fixed-header'); 
    }
});
 