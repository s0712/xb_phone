//页面初始化时执行
fnResize();
//窗口大小变化时执行
window.onresize = function() {
	window.reload();
};
function fnResize() {
	console.log(123);
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
	var scale = 1 / devicePixelRatio;
	document
		.querySelector('meta[name="viewport"]')
		.setAttribute(
			'content',
			'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no'
		);
}

//判断是否是pc
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	//true为PC端，false为手机端和ipad  把网址换成pc端地址
	flag ? (window.location.href = 'https://www.baidu.com/') : '';
}
$(document).ready(function() {
	IsPC();
});
