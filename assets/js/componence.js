$(document).ready(function () {
    $('.nav-link1').click(function (e) { 
        e.preventDefault();
        $('.nav-link1').addClass('focus');
        $('.nav-link2').removeClass('focus');
        $('.nav-link3').removeClass('focus');
        $('.nav-link4').removeClass('focus');
        $('.nav-link5').removeClass('focus');
        $('.nav-link6').removeClass('focus');
    });
    $('.nav-link2').click(function (e) { 
        e.preventDefault();
        $('.nav-link2').addClass('focus');
        $('.nav-link1').removeClass('focus');
        $('.nav-link3').removeClass('focus');
        $('.nav-link4').removeClass('focus');
        $('.nav-link5').removeClass('focus');
        $('.nav-link6').removeClass('focus');
    });
    $('.nav-link3').click(function (e) { 
        e.preventDefault();
        $('.nav-link3').addClass('focus');
        $('.nav-link1').removeClass('focus');
        $('.nav-link2').removeClass('focus');
        $('.nav-link4').removeClass('focus');
        $('.nav-link5').removeClass('focus');
        $('.nav-link6').removeClass('focus');
    });
    $('.nav-link4').click(function (e) { 
        e.preventDefault();
        $('.nav-link4').addClass('focus');
        $('.nav-link1').removeClass('focus');
        $('.nav-link2').removeClass('focus');
        $('.nav-link3').removeClass('focus');
        $('.nav-link5').removeClass('focus');
        $('.nav-link6').removeClass('focus');
    });
    $('.nav-link5').click(function (e) { 
        e.preventDefault();
        $('.nav-link5').addClass('focus');
        $('.nav-link1').removeClass('focus');
        $('.nav-link2').removeClass('focus');
        $('.nav-link3').removeClass('focus');
        $('.nav-link4').removeClass('focus');
        $('.nav-link6').removeClass('focus');
    });
    $('.nav-link6').click(function (e) { 
        e.preventDefault();
        $('.nav-link6').addClass('focus');
        $('.nav-link1').removeClass('focus');
        $('.nav-link2').removeClass('focus');
        $('.nav-link3').removeClass('focus');
        $('.nav-link4').removeClass('focus');
        $('.nav-link5').removeClass('focus');
    });
    $('.nav-link5').click(function (e) { 
        e.preventDefault();
        $('.index').fadeOut(300);
        $('.admin').fadeIn(500);
    });
});