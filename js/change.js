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
	//true为PC端，false为手机端和ipad  把网址换成手机端地址 
	flag ? '' : (window.location.href = 'https://www.baidu.com/');
}
$(document).ready(function() {
	IsPC();
});
