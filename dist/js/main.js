/****************************************************** APP 常量设置部分 ********************************************************/
//APP 常量设置
var remote_url = "https://wei.wiyarn.com/actiz/rs/b";
var const_vt = "dlk_weishatest";

//货物状态


/****************************************************** APP 常量设置部分 ********************************************************/

function back() {
    window.history.back(-1);
}

//获取订单类型
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

function getURLParams(){
    var url = location.href;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {};
    var j;
    for (var i=0; j=paraString[i]; i++){
        paraObj[j.substring(0,j.indexOf("="))] = j.substring(j.indexOf("=")+1,j.length);
    }
    return paraObj;
}