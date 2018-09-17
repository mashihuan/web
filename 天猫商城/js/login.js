function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
addLoadEvent(mentionError);
addLoadEvent(changeLogin);
/*提示账号密码错误*/
function mentionError () {
	var tit = document.getElementById('tit');
	var des = document.getElementById('des');
	var user_name = document.querySelector(".user_name");
	var user_code = document.querySelector(".user_code");
	var submit = document.querySelector(".submit");
	submit.onclick = function() {
		console.log(user_name.value);
		var reg = /^[a-z0-9]{5,12}$/g;
		var reg2 = /^[a-zA-Z0-9]{6,12}$/g;
	    var judge = reg.test(user_name.value);
	    var judge2 = reg2.test(user_code.value);
	    console.log(judge);
	    if(judge == false || judge2 == false) {
	    	tit.style.display = "none";
	    	des.style.display = "block";
	    }else {
	    	tit.style.display = "block";
	    	des.style.display = "none";
	    }
	}
	
}
/*切换账号密码登录和二维码登录*/
function changeLogin () {
    var qr = document.querySelector(".qr");
    var id_login = document.querySelector("#id_login")
    var qrLogin = document.getElementById('qrLogin');
    var codeLogin = document.getElementById('codeLogin');
    qr.onclick = function () {
        id_login.style.display = "none";
        qrLogin.style.display = "block"
    }
    codeLogin.onclick = function() {
        id_login.style.display = "block";
        qrLogin.style.display = "none"
    }

}