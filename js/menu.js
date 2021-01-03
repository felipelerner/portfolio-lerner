
    posicionarMenu();
     
    $(window).scroll(function() {    
        posicionarMenu();
    });
     
    function posicionarMenu() {
        var altura_del_home = $('.home').outerHeight(true);
        var altura_del_menu = $('.menu').outerHeight(true);
        var mq = window.matchMedia( "(max-width: 570px)" );

        if (mq.matches) {
            $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
            $('.nav_menu').addClass('d-none');
        }
        else {
            if ($(window).scrollTop() >= altura_del_home - 80){
                $('.menu').addClass('fixed');
                $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
                
                $('.menu').addClass('d-flex');
            }
            else {
                $('.menu').removeClass('fixed');
                $('.wrapper').css('margin-top', '0');
                $('.nav_menu').removeClass('d-none');
                $('.menu').removeClass('d-flex');
            }   
        }
        if ($(window).scrollTop() >= altura_del_home - 100){
            $('.nav_menu').addClass('d-none');
        }

        

    }



      

