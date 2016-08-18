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
});