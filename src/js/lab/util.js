
import {
  sendMsg
} from '../config.js';


/**
 * rem计算
 * @return {[type]} [description]
 */
export var calcRem = function() {
  function resetFontSize() {
    var maxSize = 640;
    var screenSize = document.documentElement.clientWidth;
    screenSize = (screenSize > maxSize) ? maxSize : screenSize;
    var basicFontSize = screenSize / 320 * 16;
    document.getElementsByTagName('html')[0].style.fontSize = basicFontSize.toFixed(2) + 'px';
  }
  resetFontSize();
  window.addEventListener('resize', resetFontSize, false);
  window.addEventListener('orientationchange', resetFontSize, false);
};

export var sendPin = function(json) {
  try {
    var eventId = json.eventId || ''; // 必选参数，事件id
    var click = new MPing.inputs.Click(eventId); // 构造click请求
    click.event_param = json.param || ''; // 设置click的参数
    click.event_level = json.level || ''; // 设置事件等级
    click.updateEventSeries(); // 更新事件串
    var mping = new MPing(); // 构造上报实例
    mping.send(click); // 上报click
  } catch (e) {}
};


export var sendErr = function(json) {

  if (sendMsg) {
    try {
      window.informant()
        .sendError({
          l: json.l || '', // level 错误等级
          d: json.d || '', //description 错误描述
          f: json.f || '', //functionName 错误函数名
          e: json.e.toString() || '', //error 错误内容
        })
    } catch (e) {
      console.log(e);
    }
  }


}
