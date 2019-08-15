

// 版本号
const version = 20190808;

const root='jt-lottery-draw';

module.exports = {
  routeConfig: {
    js: `${root}/${version}/js/`,
    img: `${root}/${version}/img/`,
    css: {
      path: `${root}/${version}/css`
    },
    html: {
      needInject: false,
      template: 'src/index.html',
      outName: 'jt-lottery-draw.html'
    }
  },
  rem: {
    need: true, //是否需要REM转换
    psdWidth: 750
  },
  cdn:{
    online:'//plus-static.jd.com',
    beta:'//beta-plus-static.jd.com'
  },
  git:{

  }
};
