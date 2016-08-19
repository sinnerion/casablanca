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
    $('a.scrollto').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });

    // Portfolio preview's hover
    $('.hover-hidden').hover(function() {
        $(this).removeClass('hover-hidden');
        }, function() {
            $('.portfolio_preview-hover').addClass('hover-hidden');
        }
    );

    // Portfolio filter
    $('#filter').on('click', 'button', function () {
        $('.active-button').removeClass('active-button');
        $(this).addClass('active-button');
        var buttonAttr = $(this).attr('data-filter');
        $('.portfolio_preview').each(function(){
            var blockAttr = $(this).attr('data-filter');
            if( blockAttr !== buttonAttr && buttonAttr !== 'all' ) {
                $(this).addClass('preview-hidden');
            } else if( blockAttr === buttonAttr) {
                $(this).removeClass('preview-hidden');
            } else {
                $('.portfolio_preview').removeClass('preview-hidden');
            }
        });
    });
});