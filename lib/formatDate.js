"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (fmt, date) {
    if (!fmt) {
        fmt = 'YYYY-MM-DD hh:mm:ss';
    }

    //   if(fmt=='2017-12-06'){
    //       fmt = '17'+'年'+'12'+'月'+'06'+'日'
    //   }
    //   if(fmt == 1513310471409){
    //       fmt = '17'+'年'+'12'+'月'+'15'+'日'
    //   }
    //   if(fmt === new Date()){
    //       date = 9
    //   }
    if (!date) {
        date = new Date();
    } else {
        date = new Date(date);
    }
    var o = {
        "Y+": date.getFullYear(),
        "M+": date.getMonth() + 1, //月份
        "D+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };

    if (/(YY+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    if (/(ms+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, 'S');
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
};