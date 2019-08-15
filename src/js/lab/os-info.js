//导入OS库
import os from './pan-os.min.js';


//获取cookie
var getCookie = function(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return decodeURI(arr[2]);
  else
    return '';
};

// 设置cookie值
// setCookie('remberkeypassword',password,1,'/','www.study.com');
var setCookie = function(nameee, value, expires, path, domain) {
  var date = new Date();
  // date.setDate(date.getDate()+7); //设置cookie的存活时间为一星期
  expires = date.setTime(date.getTime() + expires * 60 * 1000); //毫秒
  // document.cookie = "username="+username+expires=" + expires : ";
  document.cookie = nameee + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "");
};

// 删除coolkie
var deleteCookie = function deleteCookie(name, value, expires, path, domain) {
  var exp = new Date();
  exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
  var cval = getCookie(name);
  document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();

};

function parse(url) {
  //如果URL为空或不带参数则直接返回null
  //if (null == url || url.split("?").length < 2)
  if (null == url || url.indexOf("?") == -1) {
    return null;
  }

  var argsUrl = url.split("?")[1];

  //if (argsUrl.split("=").length < 2)
  if (argsUrl.indexOf("=") == -1) {
    return null;
  }

  var properties = argsUrl.replace(/&/g, "',").replace(/=/g, ":'") + "'";
  var obj = null;
  var template = "obj = {p}";
  eval(template.replace(/p/g, properties));
  return obj;
}

var plusFrom = getCookie('plusFrom');


var urlParse = parse(window.location.href);


window.isJdApp = os.jdapp ? os.jdapp : false;
window.isJdJr = os.jdjrapp ? os.jdjrapp : false;
window.isWeixin = os.weixin ? os.weixin : false;
window.isIpad = os.iPad ? os.iPad : false;
window.isQQBrowser = os.qqbrowser ? os.qqbrowser : false;
window.isQQEmbedded = os.qqembedded ? os.qqembedded : false;
window.appVersion = os.appVersion ? os.appVersion : '0.0.0';

// 判断是否在plus微信小程序
window.isMiniprogram = plusFrom == 'xcxplus' ? true : false;

// 判断是否是从微信公众号入口过来的
window.isTencent = plusFrom == 'plusOfficialAccount' ? true : false;

// 判断是否是领取逻辑进来的
window.isOperate = (urlParse && urlParse.operateType) == 1 ? true : false;

window.tencentNoSign=(urlParse && urlParse.tencentSign) == 2 ? true : false;

// 判断在 微信和微信小程序  手机QQ内嵌浏览器 传参为wq  别的为m
window.environment = 'm';

if ((window.isWeixin || window.isQQEmbedded) && !window.isMiniprogram) {
  window.environment = 'wq';
}


var osInfo = function() {

};



export default osInfo;
