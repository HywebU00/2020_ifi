// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider ul').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // $('.hotTopic ul').slick({
    //     dots: false,
    //     arrow: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 1500,
    //     pauseOnHover: true,
    //     pauseOnFocus: true,
    //     focusOnSelect: true,
    //     accessibility: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease',
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             infinite: true
    //         }
    //     }, {
    //         breakpoint: 545,
    //         settings: {
    //             arrows: true,
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     }, {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: true,
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }]
    // });
    $('.event ul').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
     // cp_photo
     $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
     $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
     $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

 });

$(window).on("load resize scroll", function(e) {
    var window_H = $(window).innerHeight();
    var windowTop = $(window).scrollTop();
    $('.featured ul li.topic,.news ul li .news__pic,.hotTopic ul li.topic a,.infographic ul li.topic').each(function(index, el) {
          // 可以+130 讓圖進入多點再跑動畫
          var imgTop = Math.floor($(this).offset().top - windowTop + 50);
          //imgTop < window_H 是指進入到最底部
          //imgTop>0 是指還沒滾到最上方
          //同時條件成立 代表物件在看得到的地方才會trigger動畫
          if (imgTop < window_H && imgTop > 0) {
            $(this).addClass('effect');
        }
    });
});
$(".wrapper_en .header .menu .menu_open").click(function(event) {
    $(this).next("ul").toggleClass('open');
});
$(".wrapper_en .header .menu li a").focus(function(event) {
    $(".wrapper_en .header .menu ul").addClass('open');
});
$(".wrapper_en .header .menu li:last-child a").focusout(function(event) {
    $(".wrapper_en .header .menu ul").removeClass('open');
});
$(function(){
    $(".advanced_search_block .advanced_search").hide();
    $(".advanced_search_block .search_btn").click(function(e) {
        $(".advanced_search_block .advanced_search").slideToggle();
        e.preventDefault();
    });
});

