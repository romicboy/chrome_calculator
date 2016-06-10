(function() {
	
	var $this;
	
	var Background = function() {

		this.getTime = function() {
			return (Date.parse(new Date()) / 1000);
		};
		
		// 打开Options页面
		this.openOptions = function () {
			window.open('/application/options/html/options.html');
		};
		
		// 用户点击图片事件
		this.clickIconListener = function () {
			chrome.browserAction.onClicked.addListener(function (tab) {
				//console.log(tab.url);
				$this.openOptions();
			});
		};
		
		// 初始化
		this.init = function() {
			$this = this;
			this.clickIconListener();
			this.start();
			return $this;
		};
	};
	
	var background = new Background();
	background.init();

})();
