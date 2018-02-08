$(function(){
    $("#enter").click(function () {
		// txt是插入到弹窗的内容
		var txt = "姓名：<input id='name'><br>手机：<input id='phone'><br>备注：<input id='remark'><br>";
		var option = {
			// title是弹窗的标题
			title: "xxx活动报名",
			btn: parseInt("0011", 2),
			// 点击提交之后执行的方法
			onOk: function () {
				console.log($('#name').val(), $('#phone').val(), $('#remark').val());
			}
		}
		window.wxc.xcConfirm(txt, "custom", option);
	});
})