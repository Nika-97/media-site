
$(document).ready(function () {
 
$('.docs__accordion-btn').click(function() {

    if (  $(this).hasClass('active') ) {
        $(this).removeClass('active')
        $(this).next().slideUp(300)
    } else {
        $(this).addClass('active')
        $(this).next().slideDown(300)
    }

})


})
