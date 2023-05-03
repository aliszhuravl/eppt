$(document).ready(function() {
    let indicator = $('.form__checkbox'),
        input = indicator.find('input'),
        inputtext = indicator.find('.form__checkbox_indicator');

    $('.submit_test').on( "click", function(evt){
        evt.preventDefault();

        $('.form__checkbox').each(function(){
            if ($(this).find('input:nth-child(1)').is(':checked')) {
                $(this).addClass('right_answer');

            } else if ($(this).find('input:nth-child(2)').is(':checked')) {
                $(this).addClass('wrong_answer');
            }
        });
        $('.submit_test').addClass('hidden');
        $('.next_test').addClass('showed');

        $('.q_hint').addClass('hidden');
        $('.law_hint').addClass('showed');
    });
});

