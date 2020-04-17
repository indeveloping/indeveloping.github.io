jQuery(document).ready(function($) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      //$('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      //$('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the AOS animation library
  AOS.init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery - uses the magnific popup jQuery plugin
  $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // custom code
  
  // cards
  $("document").ready(function(){
      $(".card").mouseover (function(){
        var i = $(this).index();                   
        $(".border-effect").eq(i).animate({ width: "100%" }, 200 );
        $(this).find("img").css({
            '-moz-transform':'scale(1.1)',
            '-webkit-transform':'scale(1.1)',
            'transform':'scale(1.1)'
        })
      })

      $(".card").mouseleave(function(){
        var i = $(this).index();       
        $(".border-effect").eq(i).animate({ width: "20%" }, 200 );
        $(this).find("img").css({
            '-moz-transform':'scale(1.0)',
            '-webkit-transform':'scale(1.0)',
            'transform':'scale(1.0)'
        })        
      })
})
  
});


  //lang dropdown   
    function myFunction() {
      document.getElementById("langDropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
      if (!event.target.matches('.lang-dropbtn')) {
        var dropdowns = document.getElementsByClassName("lang-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    
    /*Dropdown Lang Menu*/
    $('.lang-dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.lang-dropdown-menu').slideToggle(300);
        });
        $('.lang-dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.lang-dropdown-menu').slideUp(300);
        });
        $('.lang-dropdown .lang-dropdown-menu li').click(function () {
            $(this).parents('.lang-dropdown').find('span').text($(this).text());
            $(this).parents('.lang-dropdown').find('input').attr('value', $(this).attr('id'));
        });
    /*End Dropdown Menu*/


    /*$('.lang-dropdown-menu li').click(function () {
      var input = '<strong>' + $(this).parents('.lang-dropdown').find('input').val() + '</strong>',
          msg = '<span class="msg">Hidden input value: ';
      $('.msg').html(msg + input + '</span>');
    }); */
    
    
    /*Carousel Logo col-6*/
    $('#likkCarousel').carousel({
      interval: 6000
    })

    $('#likkCarousel .carousel .carousel-item').each(function(){
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
          $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
    
    
    /*-- navbar header --*/
    function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
