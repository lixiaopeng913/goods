var theCommonFn = {	
	//提示弹窗
	alertWin: function(word,color){
		var word = word || '' ;
		var color = color || '#666666';
		if($('#alertWin').length==0){
			var alertWinDOM = $('<div id="alertWin">'+ word +'</div>');
			alertWinDOM.appendTo($('body'));
			$('#alertWin').css({
				'width': '50%',
				'height': '0.5rem',
				'line-height': '0.5rem',
				'text-align': 'center',
				'border-radius': '0.1rem',
				'background': color,
				'color': '#FFFFFF',
				'position': 'fixed',
				'top': '0',
				'bottom': '0',
				'left': '0',
				'right': '0',
				'margin': 'auto',
				'z-index': '999'
	//			'display': 'none'
			});
			$.fn.idSet = setTimeout(function(){
				$('#alertWin').hide(1000);
			},3000)
		}else{
			$.fn.idSet&&clearTimeout($.fn.idSet);
			
			$('#alertWin').show().text(word).css({
				'background': color,
			});
			$.fn.idSet = setTimeout(function(){
				$('#alertWin').hide(1000);
			},3000);
		}
	},
	//等待
	waiting: function (hide){
		if($('.waiting').length == 0){
			var waitDOM = $('<div class="waiting"></div>');
			waitDOM.appendTo($('body'));
			$('.waiting').css({
				'height': '100%',
				'width': '100%',
				'position': 'fixed',
				'top': '0',
				'bottom': '0',
				'left': '0',
				'right': '0',
				'margin': 'auto',
				'background': 'url(http://7xt3r1.com2.z0.glb.clouddn.com//165670/img/Fsc4kob-WplPjelKF-ECob2WP6U9.gif) no-repeat center center/1rem 1rem',
				'z-index': '999',
			});
			
		}else{
			$('.waiting').show();
		};
		hide&&$('.waiting').hide()	
	},

	//延迟
	// delay:function(){
	// 	setTimeout(function () {
 //       $("#result-error").hide();
 //    }, 6000);
	// },


//获取mtn用户信息的方法——目前只支持安卓
	/*getMtn:function(){
	   if (/(Android)/i.test(navigator.userAgent)) { 
			try { 
                var mtn =  window.AndroidWebView.getMnt();
                //alert("识别为安卓端，现在获取的是mtn："+ mtn);
                return mtn;
            }catch(e) {  
                alert('识别为安卓端,但是无法获取mtn,将mtn设置为4eb42a58684ec3ae5d4f00723e6a18aa'); 
                return  '8da9f94bc63f05ff55509fe026c36d06';
            } 
        }else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        	alert('识别为ios端,将mtn设置为4eb42a58684ec3ae5d4f00723e6a18aa'); 
            return  '8da9f94bc63f05ff55509fe026c36d06';
        }else{
            alert('识别为pc端,将mtn设置为4eb42a58684ec3ae5d4f00723e6a18aa');
            return '8da9f94bc63f05ff55509fe026c36d06';
        }
        return
	},*/

//通过url获取Mtn
	getMtnByUrl:function(){
		var mtn = Arg('mtn');
		if(mtn){
		return mtn;
	    }else{
	    	//alert("无法获取mtn,强制设置返回4eb42a58684ec3ae5d4f00723e6a18aa");
	    	return '170451ef5605136c5cc2cd6f96704571';
	    }
	},

	//获取loginId用户信息的方法——目前只支持安卓
/*	getloginId:function(){
	   if (/(Android)/i.test(navigator.userAgent)) { 
			try { 
                var loginId =  window.AndroidWebView.getloginId();
               // alert("识别为安卓端，现在获取的是loginId："+ loginId);
                return loginId;
            }catch(e) {  
                //alert('识别为安卓端,但是无法获取loginId,将loginId设置为u5dd27duw7'); 
                return  'u5dd27duw7';
            } 
        }else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        	alert('识别为ios端,将loginId设置为u5dd27duw7'); 
            return  'u5dd27duw7';
        }else{
           // alert('识别为pc端,将loginId设置为u5dd27duw7');
            return 'u5dd27duw7';
        }
        return
	},*/

	//通过url获取loginId
	getLoginIdByUrl:function(){
		var loginId = Arg('loginId');
		if(loginId){
		return loginId;
	    }else{
	    	//alert("无法获取loginId,强制设置返回u5dd27duw7");
	    	return 'u5dd27duw7';
	    }
	},

	getLocByUrl:function(){
		var loc = Arg('loc');
		if(loc){
		return loc;
	    }else{
	    	//alert("无法获取loc,强制设置返回'zh-Hans'");
	    	return 'zh-Hans';
	    }
	},

    getFromTypeByUrl:function(){
		var fromType = Arg('fromType');
		if(fromType){
		return fromType;
	    }else{
	    	//alert("无法获取fromType,强制设置返回'2'");
	    	return '2';
	    }
	},
    
    getMobileByUrl:function(){
		var mobile = Arg('mobile');
		if(mobile){
		return mobile;
	    }else{
	    	//alert("无法获取mobile,强制设置返回'true'");
	    	return 'true';
	    }
	},

	getBuildIdByUrl:function(){
		var buildID = Arg('buildID');
		if(buildID){
		return buildID;
	    }else{
	    	//alert("无法获取buildID,强制设置返回'201608071700'");
	    	return '201608071700';
	    }
	},

	getVersionIDByUrl:function(){
		var versionID = Arg('versionID');
		if(versionID){
		return versionID;
	    }else{
	    	//alert("无法获取versionID,强制设置返回'1.0.0'");
	    	return '1.0.0';
	    }
	},

	get_vtByUrl:function(){
		var v_vt = Arg('_vt');
		if(_vt){
		return _vt;
	    }else{
	    	//alert("无法获取versionID,强制设置返回'1.0.0'");
	    	return 'null';
	    }
	},


	//h5页面关闭
	closeWindow:function(){
		if (/(Android)/i.test(navigator.userAgent)) { 
	 		try { 
                  window.AndroidWebView.finishWebView();
            }catch(e) {  
                  console.log(e);
              } 
        }else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        	try {
        	    bridge.callHandler('pushBack', {}, function responseCallback(responseData) {
                    log("JS received response:", responseData); 
                })
        	}catch(e) {  
                alert('识别为ios端,但是无法关闭'); 
            }
        }else{
            alert('识别为pc端,页面不关闭');
             // window.location="https://www.baidu.com"; 
        }
    },

//关闭失败窗口
	delay:function(seconds){
		setTimeout(function () {
       $("#result-error").hide();
    }, seconds);
	},

	//关闭成功窗口
	delay2:function(seconds){
		setTimeout(function () {
       $("#result-success").hide();
    }, seconds);
	},


//关闭成功窗口  //windowPrompts=1时，代表选择了result-success页面
	waitAndClosePrompts:function(windowPrompts,seconds){
		if(windowPrompts == '1'){
		setTimeout(function () {
       $("#result-success").hide();
    }, seconds);
	}
	},

	//url携带信息
	urlHandle: function(theUrl){
		var obj = {};
		var arr1= theUrl.slice(theUrl.lastIndexOf('?')+1).split('&');
		for(var i=0;i<arr1.length;i++){
			var arr2 = arr1[i].split('=');
			obj[arr2[0]] = arr2[1]
		}
		return obj
	},
	timeAgo: function (time){
		var now = new Date().getTime();
	    var times = now-(Number(time));
		var scs = times/1000,
		    mins = scs/60,
		    hours = mins/60,
		    days = hours/24;
		if(scs<=60){
			return '1分钟前'
		}else if(scs>60&&mins<60){
			return parseInt(mins)+'分钟前'
		}else if(mins>=60&&hours<24){
			return parseInt(hours) + '小时前'
		}else{
			return parseInt(days) + '天前'
		}
	},
	windowPrompts: function(){
		theCommonFn.alertWin("弹窗提示");
		console.log("bbb");
		var bh = $("body").height(); 
                    var bw = $("body").width(); 
                    $("#fullbg").css({ 
                       height:bh, 
                       width:bw, 
                      display:"block" 
                    }); 
                    $("#dialog").show(); 
	},
	 closeBg:function(){
	 	$("#fullbg,#dialog").hide(); 
	 },
	//获取空值
	getValue: function(value) {
		if (value == null || value == undefined) {
			return '';
		}
		return value;
	}
}
