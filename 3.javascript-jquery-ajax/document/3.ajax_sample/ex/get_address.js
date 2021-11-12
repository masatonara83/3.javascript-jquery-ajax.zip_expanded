'use strict'
$(function(){
	//住所取得ボタンをクリックで非同期処理開始
	$(document).on('click','#get_address_btn',function(){
		$.ajax({
			url:'http://zipcoda.net/api',
			dataType:'jsonp',
			data:{
				zipcode:$('#zipcode').val()
			},
			async: true
		}).done(function(data){
			console.dir(JSON.stringify(data));
			$('#address').val(data.items[0].address);
		}).fail(function(XMLHttpRequest, textStatus, errorThrown){
			alert('正しい結果をえられませんでした');
			console.log('XMLHttpRequest:' + XMLHttpRequest.status);
			console.log('textStatus  :' + textStatus);
			console.log('errorThrown  :' + errorThrown.message);
		})
	})
})