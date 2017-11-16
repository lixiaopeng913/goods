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

function checkNumber(obj){
    var re=/^\d*$/;
    if (obj.match(re) == null)
        return false;
    else
        return true;
}

function checkFloat(obj) {
    var re=/^\d*\.?\d{1,2}$/;
    if (obj.match(re) == null)
        return false;
    else
        return true;
}

//验证手机号
function checkPhone(obj){
    var reg = /^1[34578]\d{9}$/;
    if(!(reg.test(obj))){
        return false;
    }
}

//验证身份证
function checkID(obj){
    var reg15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    var reg18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
    if(!(reg15.test(obj)) || !(reg18.test(obj))){
        return false;
    }
}