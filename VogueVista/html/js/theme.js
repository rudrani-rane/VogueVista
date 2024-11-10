/*
Theme Name: Souq
Theme URI: 
Author: JufailiTech
Author URI: 
Description: Souq - Ecommerce Responsive HTML5 Template
Version: 1.0
License:
License URI:
*/

(function () {
    'use strict';

    /*==================================
    [Table of contents]
    ===================================
        01. Variables
        02. Nice Selects
        03. Button Hover
        04. Masonry Grid
        05. Product Carousel
        06. Category Carousel
        07. Testimonial Carousel
        08. Back To Top
        09. Brand Slider
        10. Revolution Slider
        11. Price Slider
        12. Shop Sidebar Toggle
        13. Payment Method Toggle
        14. Product Gallery
        15. Product Gallery
        16. Popup Search
        17. Preloader
        18. Contact Form Submission
        19. Sticky Header
        20. Mobile Menu
        21. Google Maps
    */
   
   /*------------------------------------------------------
    /  01. Variables
    /------------------------------------------------------*/
    var $dropDownDivSelect = $('.dropDownDiv select'),
        $soqJSHover = $('.soqJSHover'),
        $masonryGrid = $('#masonryGrid'),
        $productCarousle = $('.productCarousle'),
        $productCarousle2 = $('.productCarousle2'),
        $categoriesSlider = $('.categoriesSlider'),
        $testimonialSlider = $('.testimonialSlider'),
        $brandSLider = $('.brandSLider'),
        $productFiltering = $('.productFiltering select'),
        $sliderRange = $('#sliderRange'),
        $productGallerySlider = $('.productGallerySlider'),
        $productGallerySliderThumb = $('.productGallerySliderThumb'),
        $pi01AQView = $('.pi01AQView'),
        $contact_form = $('#contact_form'),
        $menuToggler = $('.menuToggler');

    /*------------------------------------------------------
    /  02. Nice Selects
    /------------------------------------------------------*/
    if($dropDownDivSelect.length > 0){
        $dropDownDivSelect.niceSelect();
    };
    if($productFiltering.length > 0){
        $productFiltering.niceSelect();
    };
    
    /*------------------------------------------------------
    /  03. Button Hover
    /------------------------------------------------------*/
    $soqJSHover.on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
        $(this).find('span.mbShape').css({top: relY, left: relX})
    })
    .on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
        $(this).find('span.mbShape').css({top: relY, left: relX})
    });
    
    /*--------------------------------------------------------
    / 04. Masonry Grid
    /---------------------------------------------------------*/
    if ($masonryGrid.length > 0) {
        var $masonryGrid = $('#masonryGrid');

        var Shuffle = window.Shuffle;
        var element = document.querySelector('#masonryGrid');
        var sizer = element.querySelector('.shafSizer');

        var shaff_inst = new Shuffle(element, {
            itemSelector: '.shafItem',
            sizer: sizer
        });
    }
    
    /*--------------------------------------------------------
    / 05. Product Carousel
    /---------------------------------------------------------*/
    if ($productCarousle.length > 0) {
        var $productCarousle_obj = $productCarousle.owlCarousel({
            autoplay: false,
            margin: 24,
            loop: true,
            nav: false,
            dots: true,
            items: 4,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    if ($productCarousle2.length > 0) {
        var $productCarousle2_obj = $productCarousle2.owlCarousel({
            autoplay: false,
            margin: 24,
            loop: true,
            nav: false,
            dots: true,
            items: 4,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    
    /*--------------------------------------------------------
    / 06. Category Carousel
    /---------------------------------------------------------*/
    if ($categoriesSlider.length > 0) {
        var $categoriesSlider_obj = $categoriesSlider.owlCarousel({
            autoplay: false,
            margin: 24,
            loop: true,
            nav: true,
            navText: ['<i class="souq-right-arrow-svgrepo-com">', '<i class="souq-right-arrow-svgrepo-com"></i>'],
            dots: false,
            items: 4,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    
    /*--------------------------------------------------------
    / 07. Testimonial Carousel
    /---------------------------------------------------------*/
    if ($testimonialSlider.length > 0) {
        var $testimonialSlider_obj = $testimonialSlider.owlCarousel({
            autoplay: false,
            margin: 24,
            loop: true,
            nav: false,
            navText: '',
            dots: true,
            items: 2,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }
    
    /*--------------------------------------------------------
    / 08. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({ bottom: '30px', opacity: '1', visibility: 'visible' });
        } else {
            back.css({ bottom: '-30px', opacity: '0', visibility: 'hidden' });
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({ scrollTop: 0 }, 800);
        return false;
    });
    
    /*--------------------------------------------------------
    / 09. Brand Slider
    /---------------------------------------------------------*/
    if ($brandSLider.length > 0) {
        var $brandSLider_obj = $brandSLider.owlCarousel({
            autoplay: false,
            margin: 40,
            loop: false,
            nav: false,
            navText: '',
            dots: false,
            items: 4,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    
    /*--------------------------------------------------------
    / 10. Revolution Slider
    /---------------------------------------------------------*/
    if ($('.slider01').length > 0) {
        var revapi2 = jQuery('#rev_slider_1').show().revolution({
            delay: 9000,
            responsiveLevels: [1200, 1140, 778, 480],
            gridwidth: [1170, 920, 700, 380],
            jsFileLocation: "js/",
            sliderLayout: "auto",
            minHeight: '765',
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                arrows: {
                    style: "custom",
                    enable: false,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    style: 'custom',
                    tmp: '<span></span>',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'layergrid',
                    h_align: 'left',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: -96,
                    space: 2,

                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 1000,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200
                }
            },
            parallax: {
                type: 'mouse+scroll',
                origo: 'slidercenter',
                speed: 900,
                levels: [5, 10, 15, 20, 25, 30, 35, 40,
                    45, 46, 47, 48, 49, 50, 51, 55],
                disable_onmobile: 'on'
            }
        });
    }
    if ($('.slider02').length > 0) {
        var revapi2 = jQuery('#rev_slider_2').show().revolution({
            delay: 9000,
            responsiveLevels: [1200, 1140, 778, 480],
            gridwidth: [1170, 920, 700, 380],
            jsFileLocation: "js/",
            sliderLayout: "auto",
            minHeight: '765',
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                arrows: {
                    style: "custom",
                    enable: false,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    style: 'custom',
                    tmp: '<span></span>',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'layergrid',
                    h_align: 'right',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: -96,
                    space: 2,

                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 1000,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200
                }
            },
            parallax: {
                type: 'mouse+scroll',
                origo: 'slidercenter',
                speed: 900,
                levels: [5, 10, 15, 20, 25, 30, 35, 40,
                    45, 46, 47, 48, 49, 50, 51, 55],
                disable_onmobile: 'on'
            }
        });
    }
    
    /*--------------------------------------------------------
    / 11. Price Slider
    /----------------------------------------------------------*/
    if ($sliderRange.length > 0) {
        $sliderRange.slider({
            range: true,
            min: 1,
            max: 811,
            values: [0, 811],
            slide: function (event, ui) {
                $("#amount").html("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
                
                $('.ui-slider-handle:first-of-type', $sliderRange).html('<span>$'+ui.values[ 0 ]+'</span>');
                $('.ui-slider-handle:last-of-type', $sliderRange).html('<span>$'+ui.values[ 1 ]+'</span>');
            }
        });
        $("#amount").html("$" + $sliderRange.slider("values", 0) + " - $" + $sliderRange.slider("values", 1));
        $('.ui-slider-handle:first-of-type', $sliderRange).html('<span>$'+$sliderRange.slider("values", 0)+'</span>');
        $('.ui-slider-handle:last-of-type', $sliderRange).html('<span>$'+$sliderRange.slider("values", 1)+'</span>');
    }
    
    
    /*--------------------------------------------------------
    / 12. Shop Sidebar Toggle
    /----------------------------------------------------------*/
    $('.shopSidebar .widget .widgetTitle').on('click', function(){
       $(this).siblings('.shopWidgetWraper').slideToggle();
    });
    
    /*--------------------------------------------------------
    / 13. Payment Method Toggle
    /----------------------------------------------------------*/
    $('.wc_payment_methods li > label').on('click', function(){
       if(!$(this).parent('li').hasClass('active')){
           $('.wc_payment_methods li').removeClass('active');
           $('.wc_payment_methods li .paymentDesc').slideUp();
           $(this).parent('li').addClass('active');
           $(this).siblings('.paymentDesc').slideDown();
       }
    });
    
    /*--------------------------------------------------------
    / 14. Product Gallery
    /----------------------------------------------------------*/
    if ($productGallerySlider.length > 0) {
        $productGallerySlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.productGallerySliderThumb'
        });
        $productGallerySliderThumb.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.productGallerySlider',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true
        });
    }
    
    /*--------------------------------------------------------
    / 15. Product Gallery
    /----------------------------------------------------------*/
    $('.pi01AQView').on('click', function(e){
        e.preventDefault();
        const myModal = new bootstrap.Modal('#productQuickView', {
            keyboard: false
        })
        const productQuickView = document.getElementById('productQuickView'); 
        myModal.show(productQuickView);
        productQuickView.addEventListener('shown.bs.modal', event => {
            $('.productQuickViewGallery').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                fade: true,
                asNavFor: '.productQuickViewThumb'
            });
            $('.productQuickViewThumb').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.productQuickViewGallery',
                dots: false,
                arrows: false,
                centerMode: false,
                focusOnSelect: true
            });
        })
    })
    
    /*--------------------------------------------------------
    / 16. Popup Search
    /----------------------------------------------------------*/
    $('.halSearch').on('click', function (e) {
        e.preventDefault();
        $('.popup_search_sec').toggleClass('active');
    });
    $('.popup_search_overlay, #search_Closer').on('click', function () {
        $('.popup_search_sec').removeClass('active');
    });
    
    /*--------------------------------------------------------
    / 17. Preloader
    /----------------------------------------------------------*/
    $(window).load(function () {
        if ($(".preloader").length > 0){
            $(".preloader").delay(500).fadeOut("slow");
        }
    });
    
    /*----------------------------------------------------------
    / 18. Contact Form Submission
    /----------------------------------------------------------*/
    $contact_form.on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('button[type="submit"]', this).attr('disabled', 'disabled');
        $('button[type="submit"] .mbText', this).html('Processing...');
        var form_data = $this.serialize();
        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === ''){
                $(this).addClass('reqError');
                required += 1;
            } else{
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'mail/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled');
                    $('button[type="submit"] .mbText', $this).html('Done!');

                    $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your query successfully sent to site admin.').removeClass('alert-warning').addClass('alert-success');
                    setTimeout(function () {
                        $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                        $('button[type="submit"] .mbText', $this).html('Send Message');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled');
            $('button[type="submit"] .mbText', $this).html('Error!');
            $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Errpr found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
            setTimeout(function () {
                $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                $('button[type="submit"] .mbText', $this).html('Send Message');
            }, 5000);
        }
    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });


    /*--------------------------------------------------------
    / 19. Sticky Header
    /---------------------------------------------------------*/
    $(window).on('scroll', function () {
        var heights = $(window).height();
        if ($(window).scrollTop() > heights) {
            $(".isSticky").addClass('fixedHeader animated slideInDown');
        } else {
            $(".isSticky").removeClass('fixedHeader animated slideInDown');
        }
    });
    
    /*--------------------------------------------------------
    / 20. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
        $(this).siblings('.megaMenu').slideToggle();
        $(this).parents('li').toggleClass('active')
    });
    $menuToggler.on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });
    
    /*--------------------------------------------------------
    / 21. Google Maps
    /----------------------------------------------------------*/
    if ($("#googleMap").length > 0){
        var map;
        map = new GMaps({
            el: "#googleMap",
            lat: -37.815340,
            lng: 144.963230,
            zoom: 10,
        });
        var image = "";
        map.addMarker({
            lat: -37.815340,
            lng: 144.963230,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#a2a2a2"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#e1e1e1"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#e1e1e1"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#686868"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#a2a2a2"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#686868"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }
    
})(jQuery)