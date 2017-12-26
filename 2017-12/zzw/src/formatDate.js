export default (fmt, date) => {
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
  let dArray = {
    'M+': date.getMonth() + 1,  
    'D+': date.getDate(),    
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }

  if (/(YY+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(ms+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, 'S')
  }
  for (let k in dArray) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (dArray[k]) : (('00' + dArray[k]).substr(('' + dArray[k]).length)))
    }
  }
  return fmt
}