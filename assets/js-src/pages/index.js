
$(document).ready(function () {
    $("#slider-breaking-news").owlCarousel({
        nav: false,
        items: 4,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        autoWidth: true,
        slideSpeed: 3000,
        autoplay: true,
        margin: 20,
        autoplayHoverPause: true,
        // navText: ['<div class="prev"></div>'
        // ],
    });
    $("#slider-breaking-news").on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY < 0) {
            $("#slider-breaking-news").trigger('next.owl');
        } else {
            $("#slider-breaking-news").trigger('prev.owl');
        }
        e.preventDefault();
    });


// Слайдер культура
    $("#slider-culture").owlCarousel({
        nav: true,
        items: 3,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        autoWidth: true,
        slideSpeed: 5000,
        autoplay: true,
        margin: 20,
        autoplayHoverPause: true,
        // responsive: {
        //     0: {items: 1},
        //     800: {items: 3}
        //
        // },
        // navText: ['<div class="prev"></div>'
        // ],
    });


// Слайдер Инциденты
    setTimeout(() => {
        $("#slider-incidents").owlCarousel({
            nav: true,
            items: 3,
            smartSpeed: 1000,
            loop: true,
            dots: false,
            autoWidth: true,
            slideSpeed: 5000,
            autoplay: true,
            margin: 20,
            // responsive: {
            //     0: {items: 1},
            //     800: {items: 3}
            // },
            autoplayHoverPause: true,
            // navText: ['<div class="prev"></div>'
            // ],
        });
    }, 2000)

    



    /**
     * Грид фото видео города
     */
    let grid = $('.media-block__grid')
    let blockInd = 1
    let blocks = {
        block1: `<div class="block">
            <div class="col">
                <div class="grid-item grid-item1"></div>
                <div class="grid-item grid-item1"></div>
                <div class="grid-item grid-item3"></div>
            </div>
            <div class="col">
                <div class="grid-item grid-item2">

                </div>
            </div>
        </div>`,
        block2: `<div class="block">
            
            <div class="col">
                <div class="grid-item grid-item2">

                </div>
            </div>
            <div class="col">
                <div class="grid-item grid-item1"></div>
                <div class="grid-item grid-item1"></div>
                <div class="grid-item grid-item3"></div>
            </div>
        </div>`,
        block3: `<div class="block">
            
            <div class="col">
                <div class="grid-item grid-item1"></div>
                <div class="grid-item grid-item1"></div>
            </div>
            <div class="col">
                <div class="grid-item grid-item1"></div>
                <div class="grid-item grid-item1"></div>
               
            </div>
        </div>`
    }


    $('#load-more__photo-video').click(function () {
        console.log(blockInd);
        $(grid).append(blocks["block" + blockInd])

        let scroll = 500
        if (blockInd == 3) scroll = 200
        document.body.parentNode.scrollTo({
            top: $(document).scrollTop() + scroll,
            left: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            $(grid).find('.block').addClass("animate")

        }, 300)
        if (blockInd == 1) {
            blockInd = 2
        } else if (blockInd == 2) {
            blockInd = 3
        } else if (blockInd == 3) {
            blockInd = 1
        }


    })

    // video play hover
    // video play hover
    function gridVideoPlay() {
        

        let video = $('.grid-item.video').find('video')
        $(video)[0].muted = true
        $(video)[0].loop = true
        $(video)[0].play()

        $('.grid-item.video').mouseenter(function () {
            // $(this).click()
            let video = $(this).find('video')
            $(video)[0].pause();
        })
        $('.grid-item.video').mouseleave(function () {
            // $(this).play()


            let video = $(this).find('video')
            $(video)[0].muted = true
            $(video)[0].loop = true
            $(video)[0].play()
            // $(this)[0].currentTime=0
        })
    }

    gridVideoPlay()

    

    
})
