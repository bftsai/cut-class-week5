$(document).ready(function () {
    $('.nav-link3').addClass('focus');
    $('.reply').click(function (e) { 
        e.preventDefault();
        $('.bottom').toggleClass('hidden');
        $('.own').toggleClass('hidden');
        $('.replyForm').toggleClass('show');
    });
    $('.suggestCancel').click(function (e) { 
        e.preventDefault();
        $('.bottom').toggleClass('hidden');
        $('.own').toggleClass('hidden');
        $('.replyForm').toggleClass('show');
    });
});