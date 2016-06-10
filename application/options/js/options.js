(function() {
	
	var $this;
	
	var Options = function() {
		
		this.bindEvent = function() {
			$("input[type='submit']").click(function(){
				var principal = $("input[name='principal']").val();
				var yield = $("input[name='yield']").val();
				var year = $("input[name='year']").val();
				var value = principal*Math.pow(yield,year);
				$("input[name='property']").val(value);
				return false;
			});
			
		};
		
		this.init = function() {
			$this = this;
			this.bindEvent();
			return this;
		};
	};
	
	$(function() {
		var options = new Options();
		options.init();
	});
	
})();
