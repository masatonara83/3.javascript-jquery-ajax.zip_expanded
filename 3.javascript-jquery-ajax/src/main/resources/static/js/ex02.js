$(function(){
	$(document).on('keyup','#password','#password2',function(){
		let hostUrl = 'http://localhost:8080/pass/check';
		let inputPass = $('#password').val();
		let inputPass2 = $('#password2').val();
		$.ajax({
			url : hostUrl,
			type : 'POST',
			dataType : 'json',
			data : {
				password : inputPass,
				password2 : inputPass2
			},
			async : true
		}).done(function(data){
			console.log(data);
			console.dir(JSON.stringify(data));
			$('#passError').text(data.passError);
			$('#passError2').text(data.passError2);
		}).fail(function(XMLHttpRequest, textStatus, errorThrown){
			alert('エラーが発生しました！');
			console.log('XMLHttpRequest : ' + XMLHttpRequest.status);
			console.log('textStatus     : ' + textStatus);
			console.log('errorThrown    : ' + errorThrown.message);
		});
	});
});