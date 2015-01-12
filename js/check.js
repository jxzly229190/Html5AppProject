/*结算页面JS操作代码*/
function check(){	
	this.products=function(){
		return[{'name':'iphone4','price':100,'num':1},
		{'name':'iphone4s','price':200,'num':1},
		{'name':'iphone5','price':300,'num':1},
		{'name':'iphone5s','price':500,'num':1},
		{'name':'iphone6','price':550,'num':1}];
	};
}

function checkCtrl($scope) {
  $scope.products=function(){
		return[{'name':'iphone4','price':100,'num':1},
		{'name':'iphone4s','price':200,'num':1},
		{'name':'iphone5','price':300,'num':1},
		{'name':'iphone5s','price':500,'num':1},
		{'name':'iphone6','price':550,'num':1}];
	};
}
