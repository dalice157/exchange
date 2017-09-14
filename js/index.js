$(function(){
	var submitBtn = $("#submit-btn");
	
	submitBtn.on('click', function(){
		exchange.getConversion();
	})
});

var exchange = exchange || {};
exchange = (function(){
	var currency = $("#currency");

	function setConversion(){
		var currencyVal = currency.val().trim();
		var outComeUS = currencyVal / 30;
		var outComeNT = currencyVal * 30;
		return {
			outComeUS,
			outComeNT
		}
	}

	function getConversion(){
		var currencyVal = currency.val().trim();
		var option = $("#option-select").val();
		var result = $("#result");
		var re = /^[0-9]*$/;
		var outComeUS = setConversion().outComeUS;
		var outComeNT = setConversion().outComeNT;

		if(!re.test(currencyVal) || currencyVal === '') {
			result.text("請輸入數字！！").css("color","red");
		} else if(option === 'nt2us') {
			result.text('US ' + outComeUS.toFixed(2)).css("color","blue");
		} else if(option === 'us2nt') {
			result.text('NT ' + outComeNT.toFixed(2)).css("color","gray");
		}
	}

	return {
		getConversion: getConversion
	}
}());