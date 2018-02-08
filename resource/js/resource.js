$(function () {
    $('.resourceNav').on('click','li',function(){
        $('.resourceNav li').removeClass('liActive');
        $(this).addClass('liActive');
    })
    addClickEvent('all1','others1');
    addClickEvent('all2','others2');

    function addClickEvent(all,others){
        $('.'+all+' span').click(function(){
            $('.'+others+' span').css('color','#666');
            $(this).addClass('orange').css('color','#fff');
        });
        $('.'+others).on('click','span',function(){
            $('.'+all+' span').removeClass('orange').css('color','#333');
            $('.'+others+' span').css('color','#666');
            $(this).css('color','#00e4ff');
        })
    }
    
    $(".book").click(function () {
		// txt是插入到弹窗的内容
		var txt = "场&nbsp;地&nbsp;名&nbsp;称：<input id='name'><br>预&nbsp;定&nbsp;日&nbsp;期：<input id='date' onclick=\"SetDate(this,'yyyy-MM-dd hh:mm:ss')\"><br>预定时间点：<input id='time'><br>&nbsp;联&nbsp;&nbsp;系&nbsp;&nbsp;人&nbsp;：<input id='userName'><br>联&nbsp;系&nbsp;电&nbsp;话：<input id='userPhone'>";
		var option = {
			// title是弹窗的标题
			title: "关于xxx课程的通知",
			btn: parseInt("0011", 2),
			// 点击提交之后执行的方法
			onOk: function () {
				
			}
		}
		window.wxc.xcConfirm(txt, "custom", option);
	});
})