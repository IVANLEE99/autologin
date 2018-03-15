// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
//     console.log('收到来自content-script的消息：');
//     console.log(request, sender, sendResponse);
//     // console.log(chrome.cookies.get('this.sid'))
//     // chrome.cookies.get({url:"http://45.32.65.214:4100/keystone/signin",name:"this.sid"},function(cookies){
//     //     sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(cookies));

//     // })
//     chrome.cookies.get({url: "http://45.32.65.214:4100/", name: "XSRF-TOKEN"},function(cookies){
//         sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(cookies));
//         // sendResponse('我是后台，我已收到你的消息：' + cookies.value);

//     })
//     // chrome.cookies.set({
//     //     "name": "Sample1",
//     //     "url": "http://45.32.65.214:4100/keystone/signin",
//     //     "value": "Dummy Data"
//     // }, function (cookie) {
//     //     console.log(JSON.stringify(cookie));
//     //     console.log(chrome.extension.lastError);
//     //     console.log(chrome.runtime.lastError);
//     // });
//     return true
// });