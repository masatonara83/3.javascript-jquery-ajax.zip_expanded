console.log("演習2")
{
console.log('nara')
}

console.log("演習3")
{
	let lastName = '奈良';
	let firstName = '将人';
	console.log(lastName);
	console.log(firstName);
	
}

console.log("演習4")
{
	let age = 65;
	if(age >= 0 && age < 5){
		console.log('幼年期');
	} else if(age < 15) {
		console.log('少年期');
	}else if(age < 25){
		console.log('青年期');
	}else if(age < 45 && age <= 64){
		console.log('中年期');
	} else {
		console.log('更年期');
	}
}

console.log("演習4-2")
{
	
}

console.log("演習5")
{
	let num = 0;
	for(let i = 1; i <= 10; i++){
		num += i;
	}
	console.log(num);
}

console.log("演習5-2")
{
	let nums = "";
	
	for(let i = 9; i > 0; i--){
		for(let j = 9; j > 0; j--){
			let num = i * j;
			if(num < 10){
				nums += ' ' + num + ' ';
			}else {
				nums += num + ' ';
			}
		}
		nums += "\n";
	}
	
	console.log(nums);
}

console.log("演習6")
{
	let number = "";
	let nums = [1,2,3,4,5,6,7,8,9,10];
	for(let i = 0; i < nums.length; i++){
		number += nums[i] + " ";
	}
	console.log(number);
	
	number = "";
	for(let num of nums){
		number += num + " ";
	}
	console.log(number);
}

console.log("演習6-2")
{
	let kisu = "";
	let nums = [1,2,3,4,5,6,7,8,9,10];
	for(let num of nums){
		if(num % 2 == 1){
			kisu += num + " ";
		}
	}
	
	console.log(kisu);
}

console.log("演習7")
{
	let country = {
		'日本':'東京',
		'スリランカ':'スリジャヤワルダナプラコッテ',
		'タイ':'クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラーユッタヤー・マハーディロック・ポップ・ノッパラット・ラーチャタニーブリーロム・ウドムラーチャニウェートマハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット'
	};
	console.log(country['日本']);
	console.log(country['タイ']);
	country['タイ'] = 'バンコク';
	console.log(country['タイ']);
	
	
}
