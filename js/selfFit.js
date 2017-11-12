
	window.addEventListener('resize',selffit,false);
			
	function selffit(){
	   document.documentElement.style.fontSize = document.documentElement.clientWidth <= 750 ?
	(document.documentElement.clientWidth/7.5 + 'px') : '100px';
				
	};
	selffit();
	
	

