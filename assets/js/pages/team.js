$(document).ready(function () {



    // TABS

    $('.team__tabs-wrap .tabs__tab:nth-child(1)').addClass('active');

    $('.team__tabs-wrap .tabs__tab').click(function () {
        $('.team__tabs-wrap .tabs__tab').removeClass('active');
        $(this).addClass('active');
        $('.team__members').fadeOut(400)

        setTimeout(() => {
            $('.team__members').fadeIn(400)
        }, 400);
    })


});