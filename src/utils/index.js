const webInfo = {
	reqApplicationType : "webHtml",
	reqApplicationVersion : "1.0",
	osName : navigator.platform,
	osVersion : navigator.appName,
	appDownChannel : "web",
	//mobileModel : navigator.userAgent
}
const host = ""; //本地
//const host = ""; //测试库
//const host = ""; //生产

export default{
	getWebInfo(){
		return webInfo;
	},
	
	getWebInfoUrl(){
		let param = "";
		for(var key in webInfo){
			param += ("&"+key+'='+webInfo[key]);
		}
		return param;
	},

	//返回兼容性时间格式 yyyy/mm/dd
	fomatDate(_date){
		_date = _date.split(/[- : \/]/);
		if(_date && new Date(_date[0], _date[1]-1, _date[2], _date[3], _date[4], _date[5]) != "Invalid Date"){
		    var date = new Date(_date[0], _date[1]-1, _date[2], _date[3], _date[4], _date[5]);
		    return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
		}else{
			return "-";
		}
	},

	getHost(){
		return host;
	}
}