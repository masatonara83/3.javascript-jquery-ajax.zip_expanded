let price = 0

$(function(){
	$('.form-grop').on('click',function(){
		if($('responsibleCompany').val() == 'M'){
			price += 1380;
		} else {
			price += 2380;
		}
	})
})

console.log(price);