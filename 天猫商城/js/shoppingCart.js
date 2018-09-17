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

addLoadEvent(removePlaceholder);
addLoadEvent(changeCheckbox);
addLoadEvent(changeArrow);
addLoadEvent(recommendDis);
// addLoadEvent(recommend);
// 去除搜索框站位符
function removePlaceholder() {
	var search_text = document.querySelector(".search_text");
	var search_icon = document.querySelector(".search_icon");
	search_text.onfocus = function() {
		search_icon.style.background = "none";
	}
	search_text.onblur = function() {
		if(search_text.value == ""){
			search_icon.style.background = "url(img/shopcar/sprite1.png) -380px -20px no-repeat";
		}
		
	}
}
// 改变单选框背景颜色
function changeCheckbox () {
	var shopcar_table = document.querySelector(".shopcar_table");
	var checkBox = document.querySelector(".label");
	var all_chose = document.querySelector(".all_chose");
    var isRed = false;	
   
        all_chose.onclick = function() {
        	if(isRed == false) {
        		checkBox.style.background = "url(img/shopcar/sprite.png) left -20px no-repeat";
		        isRed = true;
        	}else {
        		checkBox.style.background = "url(img/shopcar/sprite.png) left top no-repeat";
                isRed = false;
        	}
	    }  
}
// 切换上下箭头背景
function changeArrow () {
	var similar = document.querySelector(".similar");
	var slideshow = document.querySelector(".slideshow");
	var drop_arrow = similar.querySelector("i");
	var isDown = true;
	similar.onclick = function() {
		if(isDown == true) {
			drop_arrow.style.background = "url(img/shopcar/sprite.png) 0 -75px no-repeat";
			
			slideshow.style.visibility = "visible";
			isDown = false;
		}else {
			slideshow.style.visibility = "hidden";
			drop_arrow.style.background = "url(img/shopcar/sprite.png) 0 -65px no-repeat";
            isDown = true;
		}
	}
	
}
// recommend自动浏览
function recommendDis () {
	var red_tit = document.querySelector(".red_tit");
	var lis = red_tit.getElementsByTagName('li');
    var wrap_line = document.querySelector(".wrap_line");
    var line = document.querySelector(".line");
    var red_recent = document.querySelector(".red_recent");
	var red_favorite_wrap = document.querySelector(".red_favorite_wrap");
    for(var i=0; i<lis.length; i++) {
    	lis[0].onmouseover = function() {
	        line.style.left = "0px";
	        line.style.width = "83px";
	    }
	    // lis[1].onmouseover = function() {
	    // 	recentScan();
	    // }

	    function recentScan() {
	        line.style.left = "83px";
	        line.style.width = "111px";
        red_recent.style.display = "block";
        red_favorite_wrap.style.display = "none";
	    }

	    // lis[2].onmouseover = function() {
	    // 	myFavorite();
	    // }

	    function myFavorite() {
	        line.style.left = "194px";
	        line.style.width = "97px";
		red_favorite_wrap.style.display = "block";
        red_recent.style.display = "none";
	    }

    }
    beginChange();
    function beginChange() {
    	var arr = [0,0,lis[0].offsetWidth,lis[1].offsetWidth,lis[2].offsetWidth];
	    var a = 1;
	    var b = 2;
	    var timer = setInterval(function(){
	    	line.style.left = arr[a] + arr[a-1] + "px";
	    	line.style.width = arr[b] + "px";
	    	if(arr[a] + arr[a-1] == 83) {
	    		recentScan();
	    	}
	    	if(arr[a] + arr[a-1] == 194) {
	    		myFavorite();
	    	}
	    	console.log(arr[b]);
	    	a ++;
	    	b ++;
	    	if( a >= 4) {
	    		a = 1;
	    	}
	    	if(b >= 5) {
	    		b = 2;
	    	}
	    },2000);
         lis[1].onmouseover = function() {
	    	recentScan();
	    	clearInterval(timer);
	    	lis[1].onmouseout = function() {
	    		beginChange();
	    	}
	    }
	    lis[2].onmouseover = function() {
	    	myFavorite();
	    	clearInterval(timer);
	    	lis[2].onmouseout = function (){
	    		beginChange();
	    	}
	    }
    }
    
}
// 控制推荐商品显示隐藏
// function recommend () {
//     var red_tit = document.querySelector(".red_tit");
// 	var lis = red_tit.getElementsByTagName('li');
// 	var red_recent = document.querySelector(".red_recent");
// 	var red_favorite_wrap = document.querySelector(".red_favorite_wrap");
// 	lis[1].onmouseover = function () {
// 	}
// 	lis[1].onmouseout = function () {
//         red_recent.style.display = "none";
// 	}
// 	lis[2].onmouseover = function() {
// 	}
// 	lis[2].onmouseout = function() {
// 		red_favorite_wrap.style.display = "none";
// 	}
// }