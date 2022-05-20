$(document).ready(function () {


    // if (window.screen.width > 560) {
    $('.news-sidebar__list').customScroll({
        horizontal: false,
    })
    // } 
    // else if (window.screen.width < 560) {
    //     console.log(11);
    //     let inner = $('.news-sidebar__list ul').html()
    //     inner = `<div class="cust-scroll__horizontal-wrap">${inner}</div>`
    //     $('.news-sidebar__list ul').html(inner)
    //     $('.news-sidebar__list ul').customScroll({
    //         vertical: false,
    //         horizontal: true
    //     })


    // }


    // if (window.screen.width > 560) {
    $('.news-sidebar__feed').customScroll({
        horizontal: false,
    })
    // }
    // else if (window.screen.width < 560) {
    //     console.log(11);
    //     let inner = $('.news-sidebar__feed ul').html()
    //     inner = `<div class="cust-scroll__horizontal-wrap">${inner}</div>`
    //     $('.news-sidebar__feed ul').html(inner)
    //     $('.news-sidebar__feed ul').customScroll({
    //         vertical: false,
    //         horizontal: true
    //     })




    // }

    // SEARCH

    $('.menu__search-btn').click(function () {
        $('.search-input').toggleClass('active');
    })

    window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.menu__search-btn') && !target.closest('.search-input')) {
            $('.search-input').removeClass('active');
        }
    });


    /**
     * Бургер меню
     */
    $('.burger-btn').click(function () {
        console.log(2)
        if ($(this).hasClass('active')) {
            $('.burger-menu').removeClass('active')
            $('.burger-submenu').removeClass('active')
            $('.burger-menu-bg').fadeOut()
        } else {
            $('.burger-menu').addClass('active')
            $('.burger-menu-bg').fadeIn()
        }
        $('.burger-btn').toggleClass('active')
    })

    $('.burger-menu__slide-menu').click(function () {
        let listItems = $(this).find('ul').html()
        let listName = $(this).attr('data-text')

        $('.burger-menu').removeClass('active')
        setTimeout(() => {
            $('.burger-submenu__list').html(listItems)
            $('.burger-submenu__item-name').text(listName)
            $('.burger-submenu').addClass('active')
        }, 300)
    })
    $('.burger-submenu__back').click(function () {
        $('.burger-submenu').removeClass('active')
        setTimeout(() => {
            $('.burger-menu').addClass('active')
        }, 300)
    })

    // фиксированная шапка
    // FIXED MENU
    setInterval(() => {


        if ($(document).scrollTop() > 50 && $(".header").hasClass('fixed') == false) {
            $(".header").toggleClass("fixed");

        } else if ($(document).scrollTop() < 50 && $(".header").hasClass('fixed') == true) {
            $(".header").toggleClass("fixed");

        }

    }, 100)


    // ACCORDION
    $(".accordion__expand-btn").on("click", function () {
        let speed = 400;
        let parentElem = $(this).parent().parent()
        if (!$(this).hasClass("active")) {
            $(".accordion__content").slideUp(speed);
            $(".accordion__expand-btn").removeClass("active");
            $(".accordion__item").removeClass("active");

            $(this).parent().next().slideDown(speed);
            $(this).addClass("active");
            parentElem.addClass("active");
        } else if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            parentElem.removeClass("active");
            $(this).parent().next().slideUp(speed);
        }
    })

    // TABS

    $('.faq__tabs-wrap .tabs__tab:nth-child(2)').addClass('active');

    $('.faq__tabs-wrap .tabs__tab').click(function () {
        $('.faq__tabs-wrap .tabs__tab').removeClass('active');
        $(this).addClass('active');
        $('.accordion').fadeOut(400)

        setTimeout(() => {
            $('.accordion').fadeIn(400)
        }, 400);
    })

    if (window.screen.width < 800) {
        $('.tabs').each(function () {
            let inner = $(this).html()
            inner = `<div class="cust-scroll__horizontal-wrap">${inner}</div>`
            $(this).html(inner)
            $(this).customScroll({
                vertical: false,
                horizontal: true
            })
        })
    }



    $('.all-news__tabs-wrap .tabs__tab:nth-child(2)').addClass('active');

    $('.all-news__tabs-wrap .tabs__tab').click(function () {
        $('.all-news__tabs-wrap .tabs__tab').removeClass('active');
        $(this).addClass('active');
        $('.all-news__preview').fadeOut(400)
        $('.all-news__large-preview').fadeOut(400)

        setTimeout(() => {
            $('.all-news__preview').fadeIn(400)
            $('.all-news__large-preview').fadeIn(400)
        }, 400);
    })


});