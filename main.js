$(function() {
    
  $('#stop-watch #start-button').click(function() {
    $('#stop-watch .time').html('0:0:0:0');
    timer = setInterval("countUp()", 100);
    $(this).attr('disabled', 'disabled');
    $('#stop-watch #stop-button').removeAttr('disabled');
  });
  
  $('#stop-watch #stop-button').click(function() {
    clearInterval(timer);
    $(this).attr('disabled', 'disabled');
    $('#stop-watch #reset-button').removeAttr('disabled');
    $('#stop-watch #start-button').removeAttr('disabled');
  });
  
  $('#stop-watch #reset-button').click(function() {
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    
    $('#stop-watch .time').html('0:0:0:0');
    clearInterval(timer);
    $(this).attr('disabled', 'disabled');
    $('#stop-watch #stop-button').attr('disabled', 'disabled');
    $('#stop-watch #start-button').removeAttr('disabled');
  });
  
});

 msec = 0;
 sec = 0;
 min = 0;
 hour = 0;

function countUp () {
    msec += 1;
    
    if(mesc > 9) {
        mesc = 0;
        sec += 1;
    }
    
    if(sec > 59) {
        sec = 0;
        min += 1;
    }
    
    if(min > 59) {
        min = 0;
        hour += 1;
    }
    
    msecNumber = mesc;
    secNumber = sec;
    minNumber = min;
    hourNumber = hour;
    
    $('#stop-watch .time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}










msec = 0;
sec  = 0;
min  = 0;
hour = 0;
 
function countUp ()
{
    msec += 1;
 
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
 
    if (min > 59) {
        min = 0;
        hour += 1;
    }
 
    // ミリ秒
    msecNumber = msec;
    secNumber = sec;
    minNumber = min;
    hourNumber = hour;
 
    $('#stop-watch .time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}