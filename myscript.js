$(function () {
	// alert('$');
	console.log(location)
	if (location.host=='www.cqvip.com') {
		$('form input[name="Username"]').focus().val('871246995@qq.com');
		$('form input[name="Password"]').focus().val('654321');
		$('form input[type="submit"]').click();
		console.log($('form input[name="Username"]').val())
		console.log($('form input[name="Password"]').val())
	}
	if (location.host=='manager-service.its.iyorhe.com') {
		$('form input[name="email"]').focus().val('ivanlee99@163.com');
		$('form input[type="password"]').focus().click().val('lee').blur();
		$('body').click();
		$('form button[type="submit"]').click();
		// $('form button[type="submit"]').click(function (e) {
		// 	if (!$('form input[type="password"]')) {
		// 		e.preventDefault();
		// 		$('form input[type="password"]').focus().click().val('lee').blur();
		// 	}
		// });
		console.log($('form input[name="email"]').val())
		console.log($('form input[type="password"]').val())
	}
	if (location.host=='www.incopat.com') {
		$('form input[name="username"]').focus().val('infinitusPD05');
		$('form input[type="password"]').focus().val('infinitus2017');
		$('form input#loginBtn').click();
		console.log($('form input[name="username"]').val())
		console.log($('form input[type="password"]').val())
		// username=infinitusPD05&&password=infinitus2017
	}
	// http://www.incopat.com/dologin
});
// <form name="frmLogin" method="post">
// 			<span class="waring"></span>
// 			<table>
// 			<tbody><tr>
// 				<th class="f14 black">会员名：</th>
// 				<td><span class="fillbox" style="border: 1px solid rgb(119, 119, 119);"><input name="Username" type="text" class="w250" style="font-size: 12px; color: black; border-left: 1px solid rgb(205, 205, 205); border-top: 1px solid rgb(205, 205, 205); background: rgb(249, 249, 249); border-bottom: 1px solid rgb(255, 255, 255);"></span></td>
// 			</tr>
// 			<tr>
// 				<th></th>
// 				<td><i>注册时填写的 E-mail 地址</i></td>
// 			</tr>
// 			<tr>
// 				<th class="f14 black">密 码：</th>
// 				<td><span class="fillbox"><input name="Password" type="password" class="w250" style="font-size: 12px; color: rgb(102, 102, 102);"></span></td>
// 			</tr>
// 			<tr>
// 				<th></th>
// 				<td><a href="ForgetPassword.aspx">忘记密码</a> | <a id="iploginlink" href="javascript:;">IP登录</a></td>
// 			</tr>
// 			<tr>
// 				<th></th>
// 				<td><input type="submit" value="登 录" class="btn bsign"> <input type="button" value="免费注册" class="btn bregi" onclick="window.open('http://www.cqvip.com/User/Register.aspx');"></td>
// 				</tr>
// 			</tbody></table>
// 			<input name="r" type="hidden" value="http://www.cqvip.com/">
// 			</form>