$(function(){
	$('#radioBox').hide();
	$('#hide_text').hide();
})

$(function(){
	$('#select').on('change',function(){
		let val = $('#select').val();
		if(val == 1){
			$('#radioBox').show();
			$('#hide_text').hide();
		} else if(val == 2){
			$('#hide_text').show();
			$('#radioBox').hide();
		} else{
			$('#hide_text').hide();
			$('#radioBox').hide();
		}
	});
});