$(function(){
    $('.resourceNav').on('click','li',function(){
        $('.resourceNav li').removeClass('liActive');
        $(this).addClass('liActive');
    })
})