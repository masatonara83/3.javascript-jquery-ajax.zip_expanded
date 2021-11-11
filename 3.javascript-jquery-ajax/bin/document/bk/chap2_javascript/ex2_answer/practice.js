// 問2 解答
console.log("問2 解答");
console.log("伊賀将之");

// 問3 解答
console.log("問3 解答");
var lastName = "伊賀";
var firstName = "将之"
console.log(lastName);
console.log(firstName);

// 問4 解答
console.log("問4 解答");
var age = 18;
if(age < 20){
	console.log("未成年です");
} else {
	console.log("成人です");
}

// 問4-2 解答
console.log("問4-2 解答");
var age = 4;
if(0 <= age && age <= 4){
	console.log("幼年期");
} else if(5 <= age && age <= 14){
	console.log("少年期");
} else if(15 <= age && age <= 24){
	console.log("青年期");
} else if(25 <= age && age <= 44){
	console.log("壮年期");
} else if(45 <= age && age <= 64){
	console.log("中年期");
} else if(65 <= age){
	console.log("高年期");
}

// 問5 解答
console.log("問5 解答");
var answer = 0;
for(var i = 1; i <= 10; i++){
	answer += i;
}
console.log(answer);

// 問5-2 解答
console.log("問5-2 解答");
let answerLine = "";
for(var i = 1; i <= 9; i++){
	for(var j = 1; j <= 9; j++){
		let answer = i * j;
		if(answer < 10){
			answer = " " + answer;
		}
		answerLine += answer + " ";
		//process.stdout.write(i + j);
	}
	answerLine += "\n"// 改行
}
console.log(answerLine);

// 問6 解答
console.log("問6 解答");
var array = [1,2,3,4,5,6,7,8,9,10];
// for文
var answer = 0;
for(var i = 0; i < 10; i++){
	answer += array[i];
}
console.log("for文のanswer:" + answer);
// for-of文
var answer = 0;
for(var number of array){
	answer += number;
}
console.log("for-of文のanswer:" + answer);

// 問6-2 解答
console.log("問6-2 解答");
var array = [1,2,3,4,5,6,7,8,9,10];
// for文
for(var i = 0; i < 10; i++){
	var number = array[i];
	if(number % 2 == 1){
		console.log(number);
	}
}
// for-of文
for(var number of array){
	if(number % 2 == 1){
		console.log(number);
	}
}

// 問7 解答
console.log("問7 解答");
var capitalInfo = {
	'日本':'東京',
	'スリランカ':'スリジャヤワルダナプラコッテ',
	'タイ':'クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラアユッタヤー・マハーディロッカポップ・ノッパラッターナラーチャタニーブリーロム・ウドンラーチャニウェットマハーサターン・アモーンラピーンアワターンサティット・サッカタットティヤウィサヌカムプラシット'
};
console.log("日本の首都は" + capitalInfo['日本'] + "です");
console.log("タイの首都は" + capitalInfo['タイ'] + "です");
capitalInfo['タイ'] = "バンコク";
console.log("タイの首都は" + capitalInfo['タイ'] + "です");

// 問8 解答
console.log("問8 解答");
printName(); //関数宣言の前でも使用可能
function printName(){
	console.log('伊賀将之');
}
printName();

// 問8-2 解答
console.log("問8-2 解答");
function add(num1, num2){
	return num1 + num2;
}
function sub(num1, num2){
	return num1 - num2;
}
function multi(num1, num2){
	return num1 * num2;
}
function div(num1, num2){
	return num1 / num2;
}
console.log("5 + 3 = " + add(5,3));
console.log("5 - 3 = " + sub(5,3));
console.log("5 * 3 = " + multi(5,3));
console.log("5 / 3 = " + div(5,3));

// 問9 解答
console.log("問9 解答");
// printNameVariable(); //関数宣言の前だと使用不可能(巻き上げできないという)
var printNameVariable = function() {
	console.log("イガ");
}
printNameVariable();

// 問9-2 解答
console.log("問9-2 解答");
var addVariable = function(num1, num2) {
	return num1 + num2;
}
var subVariable = function(num1, num2) {
	return num1 - num2;
}
var multiVariable = function(num1, num2) {
	return num1 * num2;
}
var divVariable = function(num1, num2) {
	return num1 / num2;
}
console.log("5 + 3 = " + addVariable(5,3));
console.log("5 - 3 = " + subVariable(5,3));
console.log("5 * 3 = " + multiVariable(5,3));
console.log("5 / 3 = " + divVariable(5,3));

// 問10 解答
console.log("問10 解答");
function global_use(){
  food = "カレー"; //varのない変数はグローバルスコープ扱い
}
global_use(); //ここで、food変数に"カレー"が格納される
console.log( food ); //コンソールに"カレー"と出力される

var food = "ごはん";
function local_food1(){ var food = "カレー"; console.log( food ); }
function local_food2(){ var food = "うどん"; console.log( food ); };

local_food1(); //コンソールに"カレー"と出力
local_food2(); //コンソールに"うどん"と出力
console.log( food ); //コンソールに"ごはん"と出力

// 問11 解答
console.log("問11 解答");
if (true) {
    var x = 5;
}
console.log(x); // 5と出力
if (true) {
    let y = 5;
}
//console.log(y); // ReferenceErrorになる

// 問12 解答
console.log("問12 解答");
// オブジェクト生成
var skyline = new Object();
skyline.speed = 0;
skyline.bodyColor = "blue";
skyline.run = function(){return this.speed += 40;}
// オブジェクト動作確認
console.log(skyline);
skyline.run();
skyline.run();
skyline.run();
console.log(skyline);

// 問13 解答
console.log("問13 解答");
var birthDay = new Date(1979,7 - 1,27); // 月は-1する
console.log(birthDay);

// 問13-2 解答
console.log("問13-2 解答");
var birthDay = new Date(1979,7 - 1,27); // 月は-1する
var futureDay = new Date(birthDay.getFullYear() + 20, birthDay.getMonth(), birthDay.getDate());
console.log(futureDay);

// 問14 解答
console.log("問14 解答");
var powAnswer = Math.pow(2, 3);
console.log("2の3乗 : " + powAnswer);
