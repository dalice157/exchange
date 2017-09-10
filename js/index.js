$(function(){
  var submitBtn = $("#submit-btn");
  
  submitBtn.on('click', function(){
		exchange.getConversion();
  })
});

var exchange = exchange || {};
exchange = (function(){
	function getConversion(){
		var option = $("#option-select").val();
  	var currency = $("#currency").val();
		var result = $("#result");
		
		var outComeUS = currency / 30;
		var outComeNT = currency * 30;
    var re = /^[0-9]*$/;
    
    if(!re.test(currency) || currency === '') {
        result.text("請輸入數字！！").css("color","red");
    } else if(option === 'nt2us') {
      result.text('US ' + outComeUS.toFixed(2)).css("color","blue");
    } else if(option === 'us2nt') {
      result.text('NT ' + outComeNT.toFixed(2)).css("color","blue");
    }
	}

	return {
		getConversion: getConversion
	}
}());