


// 目录
const dir = 'dirName';

// 版本号
const version = 20190904;

let configs = {
    routeConfig: {
        js: `${dir}/${version}/js/`,
        img: `${dir}/${version}/img/`,
        css: {
            path: `${dir}/${version}/css`
        },
        html: {
            needInject: false,
            template: 'src/index.html',
            outName: 'index.html'
        }
    },
    rem: {
        need: true, //是否需要REM转换
        psdWidth: 750
    },
    cdn: {
        online: '//plus-static.jd.com',
        beta: '//beta-plus-static.jd.com'
    },
    git: {
        url: 'http://git.jd.com/plus-h5-static/plus-h5-static.git',
        branch: 'dev',
        sourseDir:dir,
        gitDirName:'plus-h5-static'
    }
};

module.exports = configs
