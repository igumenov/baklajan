$(document).ready(function() {

    //demo
    $('.translation_item_page .right_col .add').hide();
    $('.translation_item_page .right_col .unlogin').show();
    $(".translation_item_page .right_col .unlogin a").click(function(event) {
        event.preventDefault();
        $('.translation_item_page .right_col .unlogin').hide();
        $('.translation_item_page .right_col .add').show();
    });
    //demo





    $("header .ico_search").click(function(event) {
        event.preventDefault();
        $('header ul').addClass('search'); 
        $('header ul.menu.search li form input[type=text]').focus();
    });

    $("#mobile_menu .ico_search").click(function(event) {
        event.preventDefault();
        $('#mobile_menu ul').addClass('search'); 
        $('#mobile_menu ul.search li form input[type=text]').focus();
    });



    $("header .m_menu").click(function(event) {
        event.preventDefault();
        $('#mobile_menu').toggle()
        $('#mobile_menu ul').slideToggle();
        if($('#mobile_menu').is(':hidden')){
            $('html, body').css('overflow', 'auto');
            $('html, body').css('overflow-x', 'hidden');
        }else{
            $('html, body').css('overflow', 'hidden');
        }
    });

    //функция одинаковой высоты элементов
    $('.content_list .item .title').matchHeight();
    $('.content_list .item .text').matchHeight();
    $('.news_page .items .item .title').matchHeight();
    $('.news_page .items .item .text').matchHeight();
    $('.translation_item .col').matchHeight();

    //слайдер
    $('.block_latest .slide_items').slick({
        infinite: true,
        dots: true,
        dotsClass: 'dots',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
    });


    //слайдер insta story (только на мобильном)
    $('.insta_story .slide_items').slick({
        infinite: false,
        dots: true,
        dotsClass: 'dots',
        autoplay: true,
        autoplaySpeed: 4000, 
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]       
    });

    //слайдер insta story (только на мобильном)
    $('.best_today .slide_items').slick({
        infinite: false,
        dots: true,
        dotsClass: 'dots',
        autoplay: true,
        autoplaySpeed: 4000, 
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]       
    });

    $( ".add textarea" ).focus(function() {
        $('.translation_item_page .right_col .add a.send').show()
    });
    $( ".add textarea" ).focusout(function() {
        $('.translation_item_page .right_col .add a.send').hide()
    });
    
    // тесты шаги  https://github.com/rstaib/jquery-steps/wiki/Settings
    stepsWizard = $("#steps").steps({
        headerTag: ".step_title",
        bodyTag: ".step",
        titleTemplate: "<span class='number'>#index#</span>",
        transitionEffect: "fade",
        enablePagination: false,
        enableKeyNavigation: false,
        forceMoveForward: false,
        autoFocus: true,
        labels: {
            cancel: "Cancel",
            current: "",
            pagination: "Pagination",
            finish: "Finish",
            next: "Next",
            previous: "Previous",
            loading: "Loading ..."
        }
    });
    //переход на следующий шаг при выборе
    $("#steps .step .input label").click(function(event) {
        stepsWizard.steps("next");
    });

});

//прижимаем шапку к верху
$(window).scroll(function(){ 
    if ($(this).scrollTop() > 10){      
        $('header').addClass("sticky_ok");
    } 
    else{
        $('header').removeClass("sticky_ok");
    }
});
//при клике в пустоту скрываем форму поиска
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("header"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $("header ul.menu").removeClass("search");
    }
});