
var register = document.querySelector(".register");
var register2 = document.querySelector(".register2");
var register1 = document.querySelector(".register1");
var reClose = document.querySelector(".reClose");
var wrapbg = document.querySelector(".wrapbg");
var rgMove = document.querySelector(".rgMove");
var qrLogin = document.querySelector("#qrLogin");
var nameLogin = document.querySelector("#nameLogin");
getSecurity();
function getSecurity() {
	var button = document.querySelector(".button");
	
	button.onclick = function() {
		var i = 60;
		var timer = setInterval(function(){
			i--;

		button.value = ""+i+"s将后重新换取";
			if(i==0) {
				clearInterval(timer);
				button.value = "再次获取验证码";
			}
		},1000);

	}
}
function nowRegister() {
	if(! document.getElementById('btn')) {
		return false;
	}
	var btn = document.getElementById('btn');
	btn.onclick = function() {
		wrapbg.style.display = "block"
        register.style.display = "block";
	}
	reClose.onclick = function() {
		register.style.display = "none";
		wrapbg.style.display = "none";

	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;

	}else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
addLoadEvent(nowRegister);
addLoadEvent(registerID);
function registerID() {
	var userName = document.getElementById('userName');
	var password = document.getElementById('password');
	var tel = document.getElementById('tel');
	var security = document.getElementById('security');
	userName.onfocus = function() {
		var span1 =document.querySelector(".span1");
		
		span1.innerHTML = "设置后不可更改" + "<br>" +"中英文均可，最长14个英文后7个汉字";
		if(userName.value != ""){
			span1.innerHTML = "";
		}	
	}
	userName.oninput = function() {
		var span1 =document.querySelector(".span1");
        var reg1 = /(^[0-9a-zA-Z]{1,14}$)|(^[\u4e00-\u9fa5]{1,7}$)/g;
        var judge = reg1.test(userName.value);
        // console.log(reg1.test(userName.value));
        // console.log(userName.value);
		if(userName.value == "") {
			span1.innerHTML = "";
			span1.style.backgroundImage = "";
			span1.style.lineHeight="";
			span1.style.color ="#655";
		}
		if(judge) {
			span1.innerHTML = "";
			span1.style.backgroundImage = "url(img/tick.png)";
		}
		if(!judge&&userName.value != ""){
			span1.style.backgroundImage = "url(img/wrong.png)";
			span1.style.lineHeight = "38px";
			span1.style.paddingLeft = "35px";
			span1.style.color = "red";
			span1.innerHTML = "用户名不能超过14个字符或7个汉字";
		}
	}
	tel.onfocus = function() {
		var span2 = document.querySelector(".span2");
		if(tel.value == "") {
			span2.innerHTML = "请输入中国大陆手机号，其他用户不可见";
		}
		
	}
	tel.onblur = function() {
		var span2 = document.querySelector(".span2");
		var reg2 = /^(183|185|182|139|188|138|186|189|156|155|135|137)[0-9]{8}$/g;
		var judge = reg2.test(tel.value);
		if(tel.value == "") {
			span2.innerHTML = "";
			span2.style.backgroundImage = "";
			span2.style.color ="#655";
		}
		if(judge) {
			span2.innerHTML = "";
			span2.style.backgroundImage = "url(img/tick.png)";
			console.log(tel.value);
		}
		if(!judge&&tel.value != "") {
			span2.innerHTML = "手机号码格式不正确";
			span2.style.backgroundImage = "url(img/wrong.png)";
			span2.style.paddingLeft = "35px";
			span2.style.color = "red";
		}
	}
	password.onfocus = function() {
		var span3 = document.querySelector(".span3");
		var pic = document.querySelector(".pic");
		if(password.value == "") {
			span3.style.display = "inline-block";
			pic.style.display = "block";
		}
		
	}
	password.onblur = function() {
		var span3 = document.querySelector(".span3");
		var pic = document.querySelector(".pic");

		var reg3 = /^[0-9a-zA-Z]{6,14}$/g;
		var lis = document.getElementsByTagName('li');
		var judge = reg3.test(password.value);
		    if(password.value == "") {
		    	span3.style.display = "none";
		    	pic.style.display = "none";
		    }

	}
	password.oninput = function() {
		var span3 = document.querySelector(".span3");
		var pic = document.querySelector(".pic");

		var reg3 = /^[0-9a-zA-Z]{6,14}$/g;
		var reg4 = /[ ]+/g;
		var lis = document.getElementsByTagName('li');
		var judge = reg3.test(password.value);
		if(judge) {
               console.log(judge);
               for(var i=0; i<lis.length; i++) {
               	   lis[i].style.listStyle = "url(img/ok.png)";
               }
		    }
		    if(!judge) {
			    lis[0].style.listStyle = "url(img/wrong1.png)";

		    }
		    if(reg4.test(password.value)) {
		    	lis[2].style.listStyle = "url(img/wrong1.png)";
		    }	
	}
}
