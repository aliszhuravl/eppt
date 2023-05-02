$(document).ready(function() {
    $('.more_btn').on( "click", function(){
        $(this).fadeOut(200);
        $('.not-visible').removeClass('hidden').addClass('opened');
    });
});