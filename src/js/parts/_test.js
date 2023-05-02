$(document).ready(function() {
    var $indicator = $('.form__checkbox'),
        $input = $indicator.find('input'),
        $inputtext = $indicator.find('.form__checkbox_indicator');

    $('.submit_test').on( "click", function(){
            if ($input.is(':checked')) {
                console.log('ты лох');
                $('.form__checkbox').addClass('right_answer');
            }
    });
});

