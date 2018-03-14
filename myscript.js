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
	if (location.host=='manager-service.tis.iyorhe.com') {

		fireEvent('email','ivanlee99@163.com');
		fireEvent('password','lee');

		setTimeout(function () {
			document.querySelector('form button[type="submit"]').click();
		},5000);
		console.log($('form input[name="email"]').val())
		console.log($('form input[type="password"]').val())
		// postForm('http://manager-service.tis.iyorhe.com/keystone/api/session/signin','email=user@keystonejs.com&&password=admin')
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

function good() {
		$('form input[name="email"]').attr('value','ivanlee99@163.com');
		$('form input[type="password"]').attr('value','lee');
		$('form input[name="email"]').val('ivanlee99@163.com');
		$('form input[type="password"]').val('lee');
		// $('form').attr('method','POST').attr('action','http://manager-service.tis.iyorhe.com/keystone/api/session/signin').submit();
		$.ajax({

		    type: "post",

		    url:"http://manager-service.tis.iyorhe.com/keystone/api/session/signin",

		    dataType: "json",

		    data: {
		    	'email':"ivanlee99@163.com",
		    	'password':'lee'
		    },

		    headers : {'x-csrf-token':$.cookie('XSRF-TOKEN')},

		    // beforeSend: function(xhr) {

		    //     xhr.setRequestHeader("Authorization", "Basic bmVvd2F5Oe4lb3dheQ==");

		    // },

		    success: function(data){ console.log(data) 
		    	top.location.href='http://manager-service.tis.iyorhe.com/'
		    },

		    error: function(data){ console.log(data) } ,

		});
}
	function postForm(action,parameter,method) {
		var p = parameter.split('&&');
		var s = '';
		for (var i = 0; i < p.length; i++) {
			var element = p[i].split('=');
			var ss = '<input type="hidden" name="' + element[0] + '" value="' + element[1] + '">';
			s = s + ss;
		}
		s = s + '<input type="submit">'
		var form = '<form action="' + action + '" method="post" id="autologinform">' + s + '</form>';
		console.log(form);

		$(form).appendTo('body');
		$('#autologinform input[type=submit]').click();
	}

	function fireEvent(name,value) {
		 // var username = document.getElementsByName('email')[0];
		 // var password = document.getElementsByName('password')[0];
		 var uu = document.getElementsByName(name)[0];
		 console.log(uu,'user')
    if(uu.addEventListener){
        uu.addEventListener('change', function(e){
            console.log('aaaaaa--change'+name,e);
        });
    }
    else{
        uu.attachEvent('onchange'+name, function(e){
            console.log('aaaaaa--onchange',e);
        });
    }

    // 设置select默认值
    uu.focus();
    uu.value = value;
    uu.click();
    uu.blur();

    // 手动触发事件
    if (uu.fireEvent){
        uu.fireEvent('onchange');
    }
    else{
        ev = document.createEvent("HTMLEvents");  
        ev.initEvent("change", false, true);
        uu.dispatchEvent(ev);
    }
	}