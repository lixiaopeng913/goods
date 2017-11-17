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
function checkID(code){
    var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};

    if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
        return false;
    }

    else if(!city[code.substr(0,2)]){
        return false;
    }
    else{
        if(code.length == 18){
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
            //校验位
            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++)
            {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            if(parity[sum % 11] != code[17]){
                return false;
            }
        }
    }
    return true;
}