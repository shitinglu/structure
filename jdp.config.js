


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
        online: '',
        beta: ''
    },
    git: {
        url: '',
        branch: '',
        sourseDir:dir,
        gitDirName:''
    }
};

module.exports = configs
