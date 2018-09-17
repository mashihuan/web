window.onload = function() {
	var wrap = document.querySelector(".wrap");
	var contr = document.getElementById('contr');
	var ul = document.getElementsByTagName('ul')[0];
	var uLis = ul.getElementsByTagName('li');
	var oLis = contr.getElementsByTagName('li');
	var prev = document.getElementById("prev");
	var next = document.getElementById('next');
	var val = uLis[0].offsetWidth;
	var num = 0;
	init();
	function init() {
		ul.style.left = -val + "px";
		stopAmimation();
		begin();
		controlCircle();
	}
	prev.onclick = function() {
        var myLeft = ul.offsetLeft;
        myLeft -= val;
        if(myLeft <= -(uLis.length - 1) * val) {
        	myLeft = -val;
        }
        ul.style.left = myLeft + "px"; 
        num ++;
        if(num > 4) {
        	num = 0;
        }
        directionTabs();
	}
	next.onclick = function() {
        var myLeft = ul.offsetLeft;
        myLeft += val;
        if(myLeft == 0) {
        	myLeft = -(uLis.length - 2) * val;
        }
		ul.style.left = myLeft + "px"; 
        num --;
        if( num < 0) {
        	num = 4;
        }
        directionTabs();
	}
	function directionTabs() { 
		 for(var i=0; i<oLis.length; i++) {
        	oLis[i].className = "";
        }
        oLis[num].className = "active";
	}
	function controlCircle() {
		for(var i=0; i<oLis.length; i++) {
			oLis[i].index = i;
			oLis[i].onclick = function() {
				num = this.index;
				directionTabs();
	            console.log(this.index);
	            ul.style.left = -this.index * val - 400 + "px";
			}
		}
	}
	function stopAmimation() {
        wrap.onmouseover = function() {
            clearInterval(timer);
        }
	}
	function begin() {
		var timer1 = setInterval(function(){
			moveAnimation();
		},4000);
	}
	var timer;
	function moveAnimation() {
		timer = setInterval(function(){
			var myLeft = ul.offsetLeft;
			myLeft -= 1;
			console.log(myLeft);
			if(myLeft <= -(uLis.length - 1) * val) {
        	    myLeft = -val;
             }
            if(myLeft % val == 0) {
                num ++;
                if(num > 4) {
                	num = 0;
                }
                for(var i=0; i<oLis.length; i++) {
                	oLis[i].className = "";
                }
                oLis[num].className = "active";
            	clearInterval(timer);
            }
			ul.style.left = myLeft + "px";

		},1);
		
	}
}