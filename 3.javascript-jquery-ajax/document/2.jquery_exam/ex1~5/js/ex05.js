$(function () {
  $('.btn').on('click',function () {
    
    if($('#mailad').val() == ''){
		alert('メールアドレスを入力してください');
	}
  });
});
