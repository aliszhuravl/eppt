function countDown() {
    var seconds = 86400;
    var timer = setInterval(function() {
        if (seconds > 0) {
            seconds --;
            var h = seconds/3600 ^ 0,
                m = (seconds-h*3600)/60 ^ 0,
                s = seconds-h*3600-m*60,
                time = (h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
            $(".countdown").text(time);
        } else {
            clearInterval(timer);
        }
    }, 1000);
}
$(function() {
    countDown()
});