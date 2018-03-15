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
      loginUrl:'http://www.cqvip.com/User/',
      name:'cqvip'
    }
  ]
  for (let i = 0; i < websites.length; i++) {
    // if (websites[i].loginUrl.indexOf(location.host)>-1) {
    if (websites[i].name==web || websites[i].loginUrl == location.href) {
      if (location.href!=websites[i].loginUrl) {
        return location.href = websites[i].loginUrl;
      }
      autologinWebsite(websites[i]);
      break;
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
  var input =  document.getElementsByTagName("input")
  console.log(input)
  // let event = new Event('input', { bubbles: true });
  var event = new Event('input', { bubbles: true });
  // event.simulated = true;
  input[web.user_name].value = web.user_value;
  input[web.user_name].dispatchEvent(event);
  input[web.password_name].value = web.password_value;
  input[web.password_name].dispatchEvent(event);
  if (document.querySelector("td input[type='submit']")) {
    document.querySelector("td input[type='submit']").click();
  }
  if (document.querySelector("form button")) {
    document.querySelector("form button").click();
  }
  //合想新创
  if ( document.querySelector("input[type='submit']")) {
    document.querySelector("input[type='submit']").click()
  }
  if ( document.querySelector("input[type='button']")) {
    document.querySelector("input[type='button']").click()
  }
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