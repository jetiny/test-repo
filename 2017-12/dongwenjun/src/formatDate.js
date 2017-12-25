  export default function formatDate () {
    var date, expectDate
    if (arguments.length === 0) {
      date = new Date()
      expectDate = 'YYYY-MM-DD hh:mm:ss'
    } else if (arguments.length === 1) {
      expectDate =arguments[0]
      date = new Date()
    } else if (arguments.length > 1) {
      date =arguments[0]
      expectDate =arguments[1]
    }
    if (/^\d*$/.test(date)) { // 时间戳
      date = new Date(date)
      fn ()
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(date)) { // 字符串
      date = date.split('-')
      expectDate = expectDate.replace(/YY/, '17') 
      expectDate = expectDate.replace(/MM/, date[1])
      expectDate = expectDate.replace(/DD/, date[2])
    } else {  // new Date()
      fn()
    }
  function fn () {
    var d =  {
      "MM": [date.getMonth() + 1, /MM/],
      'DD': [date.getDate(), /DD/],
      'hh': [date.getHours(), /hh/],
      'mm': [date.getMinutes(), /mm/],
      'ss': [date.getSeconds(), /ss/],
      'ms': [date.getMilliseconds(), /ms/],
      'YYYY': [date.getFullYear(), /YYYY/],
      'YY': [date.getFullYear().toString().slice(-2), /YY/]
    }
    Object.keys(d).forEach((v, i) => {
        if (expectDate.indexOf(v) >= 0) {
            expectDate = expectDate.replace(d[v][1], d[v][0])
        }
    })
  }
  return expectDate
}