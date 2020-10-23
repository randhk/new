
jQuery(document).ready(function () {
var elementPosition = $('.header_nav').offset();
var elementP = $('.bn').offset();

$(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
        $('.header_nav').css('position', 'fixed').css('top', '0').css('margin-top','0');
    } else {
        $('.header_nav').css('position', 'static').css('margin-top','10px');
    }
});

     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');



 AOS.init({
        easing: 'ease-in-out-sine'
      });
  });
