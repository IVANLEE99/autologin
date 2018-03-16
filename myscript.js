function autologin() {
        var input =  document.getElementsByTagName("input")
        console.log(input)
        // let event = new Event('input', { bubbles: true });
        var event = new Event('input', { bubbles: true });
        // event.simulated = true;
        input.email.value = "user@keystonejs.com"
        input.email.dispatchEvent(event);
        input.password.value = "admin"
        input.password.dispatchEvent(event);
        document.querySelector("button").click()
  }
// autologin();

// $(function () {
//   // alert('$');
//   console.log(location)
//   var websites = [
//     {
//       user_name:'email',
//       user_value:'user@keystonejs.com',
//       password_name:'password',
//       password_value:'admin',
//       loginUrl:'http://manager-service.tis.iyorhe.com/keystone/signin'
//     },
//     {
//       user_name:'username',
//       user_value:'871246995@qq.com',
//       password_name:'password',
//       password_value:'654321',
//       loginUrl:'http://kns.cnki.net/kns/logindigital.aspx?ParentLocation=http://www.cnki.net'
//     }
//   ]
//   for (let i = 0; i < websites.length; i++) {
//     if (websites[i].loginUrl.indexOf(location.host)>-1) {
//       if (location.href!=websites[i].loginUrl) {
//         return location.href = websites[i].loginUrl;
//       }
//       autologinWebsite(websites[i]);
//       break;
//     }
//   }
// });

function goToLogin(web) {
  var websites = [
    {
      user_name:'email',
      user_value:'user@keystonejs.com',
      password_name:'password',
      password_value:'admin',
      loginUrl:'http://manager-service.tis.iyorhe.com/keystone/signin',
      name:'manager-service',
    },
    {
      user_name:'username',
      user_value:'infinitus020',
      // user_value:'xurumiao',
      password_name:'password',
      password_value:'020infinitus',
      // password_value:'123456',
      loginUrl:'http://my.wanfangdata.com.cn/auth/user/alllogin.do?login_mode=ALL&service=http%3A%2F%2Fwww.wanfangdata.com.cn%2Findex.html',
      name:'wanfangdata',
    },
    {
      user_name:'username',
      user_value:'871246995@qq.com',
      password_name:'password',
      password_value:'654321',
      loginUrl:'http://kns.cnki.net/kns/logindigital.aspx?ParentLocation=http://www.cnki.net',
      name:'cnki'
    },
    {
      user_name:'username',
      user_value:'infinitusPD05',
      password_name:'password',
      password_value:'infinitus2017',
      loginUrl:'http://www.incopat.com/newLogin',
      name:'incopat'
    },
    {
      user_name:'Username',
      user_value:'871246995@qq.com',
      password_name:'Password',
      password_value:'654321',
      loginUrl:'http://www.cqvip.com/user/',
      name:'cqvip'
    }
  ]
  for (let i = 0; i < websites.length; i++) {
    if (websites[i].loginUrl == location.href) {
      autologinWebsite(websites[i]);
      break;
    }
  }
  for (let i = 0; i < websites.length; i++) {
    // if (websites[i].loginUrl.indexOf(location.host)>-1) {
    // 根据要自动登录站点的名称找出相应的站点，如果当前站点的登录路径是站点的登录路径就自动登录
    if (websites[i].name==web) {

      if (location.href!=websites[i].loginUrl) {
        return location.href = websites[i].loginUrl;
      }
      autologinWebsite(websites[i]);
      break;
    }
    if (websites[i].loginUrl == location.href) {

    }
  }
}
function autologinWebsite(web) {
  var web = web || {
    user_name:'email',
    user_value:'user@keystonejs.com',
    password_name:'password',
    password_value:'admin',
    loginUrl:'http://manager-service.tis.iyorhe.com/keystone/'
  }

  try{
    var input =  document.getElementsByTagName("input")
    console.log(input)
    // let event = new Event('input', { bubbles: true });
    var event = new Event('input', { bubbles: true });
    // event.simulated = true;
    input[web.user_name].value = web.user_value;
    input[web.user_name].dispatchEvent(event);
    input[web.password_name].value = web.password_value;
    input[web.password_name].dispatchEvent(event);
    console.log($('.btn.bsign'));
    if ($('.btn.bsign').length) {
      return $('.btn.bsign').click();
    }
    var btn = $('input[type="button"],button[type="submit"],input[type="submit"]');
    if (btn.length) {
      for (var i = 0; i < btn.length; i++) {
        var text = $(btn[i]).text()+$(btn[i]).val();
        var html = $(btn[i]).html();
        console.log(html,'--html')
        if(text.indexOf('登')>-1 && text.indexOf('录')){
          $(btn[i]).click();
          break;
        }
        if(text.toLocaleLowerCase().indexOf('sign')>-1 && text.toLocaleLowerCase().indexOf('in')>-1){
          $(btn[i]).click();
          break;
        }

        if (html.toLocaleLowerCase().indexOf('login')>-1) {
          $(btn[i]).click();
        }
        if (!text) {
          $(btn[i]).click();
          break;
        }

      }
    }
    // if (document.querySelector("td input[type='submit']")) {
    //   document.querySelector("td input[type='submit']").click();
    // }
    // if (document.querySelector("form button")) {
    //   document.querySelector("form button").click();
    // }
    // //合想新创
    // if ( document.querySelector("input[type='submit']")) {
    //   document.querySelector("input[type='submit']").click()
    // }
    // if ( document.querySelector("input[type='button']")) {
    //   document.querySelector("input[type='button']").click()
    // }
  }catch(e){
    console.log(e);
  };
}

chrome.runtime.onConnect.addListener(function(port) {
   console.assert(port.name == "haa");
   port.onMessage.addListener(function(msg) {
      console.log(msg)
      var website = msg.website;
      goToLogin(website);
   });
});
goToLogin();