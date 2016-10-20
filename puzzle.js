
var point;

var square = new Array("one-one","one-two","one-three","one-four",
	"two-one","two-two","two-three","two-four",
	"three-one","three-two","three-three","three-four",
	"four-one","four-two","four-three","four-four");

var whiteSquare = new Array(16);

var strBg = new Array(
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll 0px 0px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -88px 0px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -176px 0px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -264px 0px / auto padding-box border-box',

		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll 0px -88px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -88px -88px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -176px -88px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -264px -88px / auto padding-box border-box',

		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll 0px -176px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -88px -176px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -176px -176px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -264px -176px / auto padding-box border-box',

		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll 0px -264px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -88px -264px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -176px -264px / auto padding-box border-box',
		'rgba(0, 0, 0, 0) url("http://my.ss.sysu.edu.cn/wiki/download/attachments/467435525/panda.jpg?version=2&modificationDate=1447574961000") repeat scroll -264px -264px / auto padding-box border-box');


function reset() {
	for(var i = 0; i < 16; i++) {
		document.getElementById(square[i]).style.background = strBg[i];
		/*document.getElementById(square[i]).style.transition = "background 0.1s";*/
	}
}

window.onload = reset;

function shuffle() {
	var ri = new Array(15);
	for (i = 0; i < 15; i++)
		ri[i] = i;
	for(var j = 0; j < 5; j++) {
		ri.sort(function() {
			return Math.random()-0.5;
		});
		for (var i = 0; i < 15; i += 3) {

            var a = document.getElementById(square[ri[i]]);
            var b = document.getElementById(square[ri[i + 1]]);
            var c = document.getElementById(square[ri[i + 2]]);

            var bgA = window.getComputedStyle(a, "").background;
            var bgB = window.getComputedStyle(b, "").background;
            var bgC = window.getComputedStyle(c, "").background;
            temp = bgA;

            a.style.background = bgB;
            b.style.background = bgC;
            c.style.background = temp;

            t = whiteSquare[ri[i]];
            whiteSquare[ri[i]] = whiteSquare[ri[i + 1]];
            whiteSquare[ri[i + 1]] = whiteSquare[ri[i + 2]];
            whiteSquare[ri[i + 2]] = t;
		}
	}
}

function upsetOrder() {
	reset();

	for(var i = 0; i < 16; i++) whiteSquare[i] = false;
	point = Math.ceil(Math.random()*4);
	switch(point) {
		case 1: document.getElementById('one-one').style.background = 'url("")'; whiteSquare[0] = true; break;
		case 2: document.getElementById('one-four').style.background = 'url("")'; whiteSquare[3] = true; break;
		case 3: document.getElementById('four-one').style.background = 'url("")'; whiteSquare[12] = true; break;
		case 4: document.getElementById('four-four').style.background = 'url("")'; whiteSquare[15] = true; break;
	}
	//alert(point + " " + whiteSquare);
	shuffle();
}

function judge() {
	for(var i = 0; i < 16; i++) {
		if(window.getComputedStyle(document.getElementById(square[i]), "").background != strBg[i]) return false;
	}
	return true;
}

function change(num) {	
	var click = document.getElementById(square[num]);
	var clickBackground = window.getComputedStyle(click, "").background;

	var whiteBlank;
	for(var i = 0; i < 16; i++) {
		if(whiteSquare[i] == true) whiteBlank = i;
	}

	var blank = document.getElementById(square[whiteBlank]);
	var blankBaground = window.getComputedStyle(blank, "").background;

	if((click.offsetTop == blank.offsetTop && Math.abs(click.offsetLeft - blank.offsetLeft) >= 85
		&& Math.abs(click.offsetLeft - blank.offsetLeft) <= 95) 
		|| (click.offsetLeft == blank.offsetLeft && Math.abs(click.offsetTop - blank.offsetTop) >= 85
			&& Math.abs(click.offsetTop - blank.offsetTop) <= 95)) {
		click.style.background = blankBaground;
		blank.style.background = clickBackground;
		click.style.transition="background 0.8s";
		blank.style.transition="background 0.8s"

		whiteSquare[whiteBlank] = false;
		whiteSquare[num] = true;
	}

	if(judge()) {
		alert("You Win!");
	}
}