
$(document).ready(function () {

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


})
