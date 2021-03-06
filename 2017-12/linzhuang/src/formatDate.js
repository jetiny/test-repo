module.exports = function formatDate (fmt, date) {
  if (!fmt) fmt = 'YYYY-MM-DD hh:mm:ss'
  if (!date) {
    date = new Date()
  } else {
    let check = (v) => 'YMDhmsq'.split('').concat(['ms']).filter((k) => {
      if (new RegExp('(' + k + ')').test(v)) {
        return k
      }
    })
    if (check(fmt).length >= 0 || check(date).length < 0) {
      let d = date
      date = new Date(fmt)
      fmt = d
    }
    if (!(fmt instanceof Date)) {
      date = new Date(date)
    }
  }
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S+': date.getMilliseconds() // 毫秒
  }
  if (/(YY+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(ms+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, 'SSS')
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((RegExp.$1.length === 2) ? ('00' + o[k]).substr(('' + o[k]).length) : ('000' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
