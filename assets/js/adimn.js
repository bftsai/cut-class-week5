$(document).ready(function () {
    $('.nav-link5').addClass('focus');
    $('.verified1').click(function (e) { 
        e.preventDefault();
        $('.item1Deg0').toggleClass('deg180');
    });
});