$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('#slide-gototop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });


