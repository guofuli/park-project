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
    };
    $("#requireServe").click(function () {
        // txt是插入到弹窗的内容
        var txt = "姓名：<input id='name'><br>手机：<input id='phone'><br>备注：<input id='remark'><br>";
        var option = {
            // title是弹窗的标题
            title: "申请xxx机构服务",
            btn: parseInt("0011", 2),
            // 点击提交之后执行的方法
            onOk: function () {
                console.log($('#name').val(), $('#phone').val(), $('#remark').val());
            }
        }
        window.wxc.xcConfirm(txt, "custom", option);
    });
})