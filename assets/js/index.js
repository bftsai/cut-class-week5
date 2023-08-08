$(document).ready(function () {
    $('.reply').click(function (e) { 
        e.preventDefault();
        $('.bottom').toggleClass('.hidden');
    });
});