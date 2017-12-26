export default ((fmt, dat) => {
    let o = {
      'M+': dat.getMonth() + 1, // 月份
      'd+': dat.getDate(), // 日
      'h+': dat.getHours(), // 小时
      'm+': dat.getMinutes(), // 分
      's+': dat.getSeconds(), // 秒
      'q+': Math.floor((dat.getMonth() + 3) / 3), // 季度
      'S': dat.getMilliseconds() // 毫秒
    }
    if (!fmt) {
      fmt = 'yyyy-MM-dd'
    }
    if (!dat) {
      dat = new Date()
    } else {
      dat = new Date(dat)
    }
   
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (dat.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return fmt
})