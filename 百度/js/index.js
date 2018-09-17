
	var dl = document.querySelector(".dl");
	var body = document.querySelector("body");
	var register = document.querySelector(".register");
	var register2 = document.querySelector(".register2");
	var register1 = document.querySelector(".register1");
	var reClose = document.querySelector(".reClose");
	var reClose1 = document.querySelector(".reClose1");
	var wrapbg = document.querySelector(".wrapbg");
	var rgMove = document.querySelector(".rgMove");
	var remove1 = document.querySelector("remove1");
	var qrLogin = document.querySelector("#qrLogin");
	var nameLogin = document.querySelector("#nameLogin");
	var metion = document.querySelector(".metion");
	var userLogin_sub = document.querySelector(".userLogin-sub");
	var sz = document.querySelector(".sz");
	var abc = sz.querySelectorAll("li");
	sz.onmouseover = function() {
		
	}
	userRegister(dl,reClose1,register2);
	userRegister(dl,reClose,register);
	moveRegister(rgMove,register);
	useuserLogin();
	checkLogin();
	changeSecurity();
	function checkLogin() {
		userLogin_sub.onclick = function() {
			var userLogin_tel = document.querySelector(".userLogin-tel");
			var userLogin_pas = document.querySelector(".userLogin-pas");
			var userLogin_check = document.querySelector("#userLogin-check");
			console.log(userLogin_check.value);
			if(userLogin_tel.value == ""){
                 metion.innerHTML = "请输入手机/邮箱用户名";
		     }
		     if(userLogin_tel.value != ""&&userLogin_pas.value == "") {
		     	metion.innerHTML = "请您输入密码";
		     }
		     if(userLogin_tel.value != ""&&userLogin_pas.value != ""&&userLogin_check.value == "") {
		     	metion.innerHTML = "请您输入验证码";
		     }
		     if(userLogin_tel.value != "" && userLogin_pas.value!=""&&userLogin_check.value != "") {
		     	metion.innerHTML = "";
		     }
		}
		

	}
	function changeSecurity() {
		var userLogin_security = document.querySelector("#userLogin-security");
		var userLogin_span = document.querySelector("#userLogin-span");
		var i=2;
		userLogin_span.onclick = function() {
			userLogin_security.style.backgroundImage = "url(img/security"+i+".png)";
			i++;
			if(i>5) {
				i=1;
			}
		}
	}
	function useuserLogin() {
		nameLogin.onclick = function() {
			register1.style.display = "none";
            register2.style.display = "block";

		}
		qrLogin.onclick = function() {
			register1.style.display = "block";
            register2.style.display = "none";
		}
	}
	function userRegister(dl,reClose,register) {
		dl.onclick = function() {
			wrapbg.style.display = "block"
            register.style.display = "block";
		}
		reClose.onclick = function() {
			register.style.display = "none";
			wrapbg.style.display = "none";

		}
	}
	function moveRegister(remove,register) {
		rgMove.onmousedown=function(e){
		var myEv=e||window.event;
		var currentX=myEv.offsetX;
		var currentY=myEv.offsetY;
		console.log(currentX);
		console.log(currentY);
		window.onmousemove=function(e){
			var ev=e||window.event;
			var x=ev.clientX;
			var y=ev.clientY;
			var myLeft = x +225 -currentX ;
			var myTop = y - currentY;
			console.log(myLeft);
			if(myTop < 0) {
				myTop = 0;
			}
			if(myTop > 138) {
				myTop = 138;
			}
			if(myLeft < 225) {
				myLeft = 225;
			}
			if(myLeft > window.innerWidth - register.offsetWidth+225) {
				myLeft = window.innerWidth - register.offsetWidth+225;
			}
			register.style.left=myLeft +'px';
			register.style.top= myTop+'px';
		}
		window.onmouseup=function(){
			window.onmousemove=null;
		}
		return false;
	  }

	}
