
/**
 * MOCKIP 来自webpack打包配置的开发环境和mockIP
 * DEPLOY
 */

var online,domainName;

const httpIP = MOCKIP||'';

const httpURL = `http://${httpIP}:3000`;

// 是否报警的开关
var sendMsg=false;

if (DEPLOY) {

  switch (DEPLOY) {
    case 'production':  //生产环境
      domainName = '//plus-static.jd.com';
      online = true;
      sendMsg=true;
      break;
    case 'beta':    //预发环境
      domainName = '//beta-plus-static.jd.com';
      online = true;
      sendMsg=false;
      break;
    case 'dev':   //本地环境
      domainName = '';
      online = false;
      sendMsg=false
      break;
    default:    //默认本地环境
      domainName = '';
      online = false;
      sendMsg=false;
  }

}

export {
  online,
  httpURL,
  domainName,
  sendMsg
};
