$(document).ready(function(){

    // Main-menu toggle -------------------
   $('.main-menu_btn').click(function(){
       var activeBtn = $(this).attr('data-toggle');
       $(this).attr('data-toggle', 'inactive');
       if(activeBtn === 'inactive') {
           $('ul.nav-hidden').removeClass('nav-hidden');
           $(this).attr('data-toggle', 'active');
       } else {
           $('ul.main-menu_nav').addClass('nav-hidden');
        }
   });

   // Smooth transition to sections ----------------------------------------------
    $("a.scrollto").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });

});