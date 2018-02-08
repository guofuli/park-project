$(function () {
    $('.officehallNav').on('click','li',function(){
        var index = $(this).data('index');
        $('.officehallNav li').removeClass('liActive');
        $(this).addClass('liActive');
        $('.officehallContent').hide();
        $('#'+index).show();
    })
})