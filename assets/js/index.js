$(document).ready(function () {
    $('.reply').click(function (e) { 
        e.preventDefault();
        $('.bottom').toggleClass('hidden');
        $('.own').toggleClass('hidden');
        $('.replyForm').toggleClass('show');
    });
    $('.suggestReply').click(function (e) { 
        e.preventDefault();
        $('.bottom').toggleClass('hidden');
        $('.own').toggleClass('hidden');
        $('.replyForm').toggleClass('show');
    });
});