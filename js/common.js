function myAction(){
	
}
myAction.subWebview = null;
myAction.openPage=function(url,title,time){
	if(!url){
		console.error('paramters error：url cannot be '+ url);
		return false;
	}
	if(!time){
		time=150;
	}
	if (myAction.subWebview == null) {
		//获取共用父窗体					
			template = plus.webview.getWebviewById("default-main");
			subWebview = template.children()[0];
		}
		subWebview.loadURL(url);
		//修改共用父模板的标题
		mui.fire(template,'updateHeader',{title:title,showMenu:false});
		template.show('slide-in-right', time);	
};
