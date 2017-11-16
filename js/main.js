/****************************************************** APP 常量设置部分 ********************************************************/
//APP 常量设置
var remote_url = "https://wei.wiyarn.com/actiz/rs/b";

//订单状态
function getOrderStatus(code) {
    // 1.代购.2.代开证3.质押4.存储
    if(code==1){
        return "代购";
    }else if(code==2){
        return "代开证";
    }else if(code==3){
        return "质押";
    }else if(code==4){
        return "存储";
    }else {
        return "未知";
    }
}

/****************************************************** APP 常量设置部分 ********************************************************/

function back() {
    window.history.back(-1);
}

function getURLParams(){
    var url = location.href; //获取url中"?"符以及其后的字串
    var paraObj = {};
    if(url.indexOf("?") != -1)
    {
        var paramArray = url.substr(url.indexOf("?") + 1).split("&");
        for(var i = 0; i < paramArray.length; i ++)
        {
            paraObj[paramArray[i].split("=")[0]]=unescape(paramArray[i].split("=")[1]);
        }
    }
    return paraObj;
}