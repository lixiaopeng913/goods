/****************************************************** APP 常量设置部分 ********************************************************/
//APP 常量设置
var remote_url = "https://wei.wiyarn.com/actiz/rs/b?";
var const_vt = "dlk_weishatest";
var pageSize = 5;

//货物状态


/****************************************************** APP 常量设置部分 ********************************************************/

function back() {
    window.history.back(-1);
}

function getURLParams(){
    var url = location.href; //获取url中"?"符以及其后的字串
    var paraObj = {};
    if(url.indexOf("?") != -1)
    {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++)
        {
            paraObj[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return paraObj;
}