function addLoadEvent (func) {
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
addLoadEvent(cursorSlide);
addLoadEvent(dragSlide);
addLoadEvent(agree);
addLoadEvent(moveXiaomi);
/*光标滑动*/
function cursorSlide () {
	var timer1 = setInterval(function(){
		var cursor = document.querySelector(".cursor");
		var timer = setInterval(function(){
	       var left = cursor.offsetLeft;
	       left +=2;
	       cursor.style.opacity = "1";
	       if(left == 250) {
	       	   left = 90;
	       	   cursor.style.opacity = "0";
	           cursor.style.left = left + "px";
	           clearInterval(timer);
	       }
	       cursor.style.left = left + "px";
		},1);
	},3000);	
}
/*拖动滑块*/
function dragSlide () {
	var slide = document.querySelector(".slide");
	var slide_bg = document.querySelector(".slide_bg");
	var success = document.querySelector(".success");
	var next_btn = document.querySelector(".next_btn");
	var isRight = false;
	slide.onmousedown = function(e) {
        var ev = e || windwo.event;
        var currentX = ev.offsetX;
        var currentY = ev.offsetY;
        document.onmousemove = function(e) {
			var ev = e || window.event;
			var lastX = ev.clientX;
		    var lastY = ev.clientY;
			var left = lastX - 525- currentX;
			var myTop = lastY - currentY;
			if(left <= 0) {
				left = 0;
			}
			if(left >= 258) {
				left = 258;
				isRight = true;
			}
			slide.style.left = left + "px";
			slide_bg.style.width = left + "px";
			slide.style.top = -1 + "px";
			document.onmouseup = function() {
				console.log(isRight)
				if(isRight) {
					slide.style.left = left + "px";
			        slide_bg.style.width = left + "px";
                    success.style.display = "block";
                    slide_bg.style.opacity = 1;
                    slide.onmousedown = null;
                    slide.style.background = "url(img/logo/right.png) center center no-repeat"
                    document.onmousemove = null;
                    slide.style.backgroundSize = "18px 18px"
                    slide.innerHTML = null;
                    next_btn.style.backgroundColor = "red";
                    next_btn.style.color = "#fff";

				}
				else {
					slide.style.left = 0; 
					success.style.display = "none";
					slide_bg.style.width = 0;
					document.onmousemove = null;
				}
				
		    }
		}
		
	}	
}
/*是否同意协议*/
function agree () {
    var close = document.querySelector(".close");
    var agree = document.querySelector(".agree");
    var protocol = document.querySelector(".protocol");
    // close.onclick = function() {
    // 	window.close();
    // }
    agree.onclick = function() {
    	protocol.style.display = "none";
    }
}
/*移动小蜜*/
function moveXiaomi () {
	var xiaomi_tit = document.querySelector(".xiaomi_tit");
	var xiaomi = document.querySelector(".xiaomi");
	xiaomi_tit.onmousedown = function(e) {
		var ev = e || window.event;
		var currentX = ev.offsetX;
		var currentY = ev.offsetY;
		window.onmousemove = function(e) {
            var ev = e || window.event;
            var lastX = ev.clientX;
            var lastY = ev.clientY;
            console.log(lastX);
            xiaomi.style.left = lastX - currentX + "px";
            xiaomi.style.top = lastY - currentY + "px";  
		}
		window.onmouseup = function() {
			window.onmousemove = null;
		}
	}
}