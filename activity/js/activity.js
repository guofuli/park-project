$(function(){
    // 点击全部的事件
    $('.all span').click(function(){
        $('.singleActivity').show();
        $('.others span').css('color','#666');
        $(this).addClass('orange').css('color','#fff');
        allPageShow(1,6);
    });
    // 点击其他分类的事件
    $('.others').on('click','span',function(){
        $('.all span').removeClass('orange').css('color','#333');
        $('.others span').css('color','#666');
        $(this).css('color','#00e4ff');
        // 根据不同的类型分页展示不同的数据
        var type = $(this).data('type');
        console.log('type'+type)
        $('.singleActivity').hide().each(function(){
            if($(this).data('type') == type){
                $(this).show();
            }
        })
        pageShow(1,type,6);
    })
    // 初始化全部类型显示
    allPageShow(1,6);

    
    /**
     * 分类显示数据时分页
     * @param {*} start number 显示的页码
     * @param {*} type str 显示的数据类型
     * @param {*} count number 每页显示数据的数量
     */
    function pageShow(start,type,count){
        var allData = $('.singleActivity[data-type='+type+']').length;
        console.log(allData)
        $('.singleActivity[data-type='+type+']').each(function(index){
            if( index < start*count && index >= start*count-count ){
                console.log('show')
                $(this).show();
            }
            else{
                $(this).hide();
            }
        })
        //初始化分页；参数：总数据条数 默认显示的页码 回调函数
        $("#page").initPage(allData, 1, tpage);
        // 分页的回调函数 参数：page 当前页码
        function tpage(page) {
            pageShow(page,type,count);
            $('body').scrollTop(0);
        }
    }
    /**
     * 全部显示数据时分页
     * @param {*} start number 显示的页码
     * @param {*} count number 每页显示的数据数量
     */
    function allPageShow(start,count){
        var allData = $('.singleActivity').length;
        console.log(allData)
        $('.singleActivity').each(function(index){
            if( index < start*count && index >= start*count-count ){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        })
        //初始化分页；参数：总数据条数 默认显示的页码 回调函数
        $("#page").initPage(allData, 1, alltpage);
        function alltpage(page) {
            allPageShow(page,count);
            $('body').scrollTop(0);
        }
    } 
})