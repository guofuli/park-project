$(function(){
    yzm();
    $('.yzm').click(function(){
        yzm();
    })
    function yzm(){
        var r1 = Math.floor(Math.random()*255);
        var r2 = Math.floor(Math.random()*255);
        var r3 = Math.floor(Math.random()*255);
        var r4 = Math.floor(Math.random()*255);
        var r5 = Math.floor(Math.random()*255);
        var r6 = Math.floor(Math.random()*255);
        $('.yzm').css('background-color','rgb('+r1+','+r2+','+r3+')');
        $('.yzm span:eq(0)').css('color','rgb('+r2+','+r3+','+r4+')');
        $('.yzm span:eq(1)').css('color','rgb('+r3+','+r5+','+r4+')');
        $('.yzm span:eq(2)').css('color','rgb('+r1+','+r6+','+r2+')');
        $('.yzm span:eq(3)').css('color','rgb('+r1+','+r3+','+r5+')');
    }
})