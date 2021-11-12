let val = 0;

$(function(){
	$('#btn').on('click',function(){
		
		
		if(val == 0){
			$('.nameBox').css('color','red');
			val = 1;
		} else {
			$('.nameBox').css('color','blue');
			val = 0;
		}
	});
});