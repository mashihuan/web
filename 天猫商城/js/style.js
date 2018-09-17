function addEventLoad (func) {
	var oldonload = window.onload;
	if(window.onload != "fuction") {
		window.onload = func;
	}else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
addEventLoad(mart_change);
// 控制天猫超市商品滚动
function mart_change() {
    var mart_fq = document.querySelector("#mart-fq");
    var fq_color = mart_fq.querySelector("a");
    var mart_lf = document.querySelector("#mart-lf");
    var lf_color = mart_lf.querySelector("a");
    var change_content = document.querySelector(".tianmao-change-title");
    var change_pic = document.querySelector(".change-img");
    var change_bl = document.querySelector(".change-bl");
    var change_des = document.querySelector(".change-des");
    var timer;
    function fq_desc() {
    	fq_color.style.background = "#01b262";
    	fq_color.style.color = "#fff";
    	lf_color.style.background = "#eee";
    	lf_color.style.color = "#000";
        change_bl.innerHTML = "限时限量疯抢";
    	change_des.innerHTML = "1元超值疯抢中";
    	change_pic.src = "img/mart-fq.jpg";
    }
    function lf_desc() {
    	lf_color.style.background = "#01b262";
    	lf_color.style.color = "#fff";
    	fq_color.style.background = "#eee";
    	fq_color.style.color = "#000";
    	change_bl.innerHTML = "膜法世家面膜";
    	change_des.innerHTML = "限时抢买2免1";
    	change_pic.src = "img/mart-lf.jpg";
    }
    var isover = true;
    change_timer();   
	fq_color.onmouseover = function() {
    	fq_desc();
    	clearInterval(timer);
    }  
    fq_color.onmouseout = function() {
    	change_timer();
    } 
    lf_color.onmouseover = function() {
    	lf_desc();
    	clearInterval(timer);	
    }
    lf_color.onmouseout = function() {
    	change_timer();
    } 
    function change_timer() {
    	if(isover) {
    	    timer = setInterval(function(){
	    	    if(change_bl.innerHTML == "限时限量疯抢") {
	    		    lf_desc();

		    	}else {
		           fq_desc();
		    	}
		    },3000);
    	}
    }
}