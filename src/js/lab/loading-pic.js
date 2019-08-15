/*jshint esversion: 2015 */
/*jslint evil: true */
/*jshint expr:true */
/* jshint proto: true */
/*jshint loopfunc: true */


// 判断开发环境
import {
  domainName
} from '../config.js';

var IMGJSON={}; //图片信息


function loadImage(arr,root,fnSucc,fnLoading){
	var len=arr.length;
	var count=0;
	for(var i=0; i<len; i++){
		var oImg=new Image();

		(function(index){
			oImg.onload=function(){
				var name=arr[index].split('.')[0];
				IMGJSON[name]=this;

				count++;

				if(count==len){
					fnSucc && fnSucc();
				}

				fnLoading && fnLoading(count,len);
			};
		})(i);

		oImg.src=root+arr[i];
	}
}

  var iconImgArr=['wrap-bg.jpg','bottom-bg.png','man-bg.png','turntable-bg.png'];

	var iconImgArr2=['alert-bg.png'];

var preLoad=function(fn,fnLoading){

  loadImage(iconImgArr,`${domainName}/jt-lottery-draw/20190808/img/`,function(){
      fn&&fn();
  },function(count,len){
    fnLoading && fnLoading(count,len);
  });

	setTimeout(function(){
		loadImage(iconImgArr2,`${domainName}/jt-lottery-draw/20190808/img/`,function(){});
	},2000);

};


  export default preLoad;
