export default (() => {
    let dt = new Date()
	let second = (sec) => {
        let ret = 0
		if (sec < 10) {
          ret = `0${sec}`
		} else {
          ret = sec
		}
		return ret
	}
	let maps = {
      '[YYYY]': `[${dt.getFullYear()}]`,
      '[YYYYMM]': `[${dt.getFullYear()}${second(dt.getMonth() + 1)}]`,
      '[YYYY:MM]': `[${dt.getFullYear()}:${second(dt.getMonth() + 1)}]`,
      'YYYY': `${dt.getFullYear()}`,
      'MM': `${second(dt.getMonth() + 1)}`,
      'DD': `${second(dt.getDate())}`,
      'hh': `${second(dt.getHours())}`,
      'mm': `${second(dt.getMinutes())}`,
      'ss': `${second(dt.getSeconds())}`,
      'ms': `${dt.getSeconds() * 1000}`,
      'YYYYMM': `${dt.getFullYear()}${second(dt.getMonth() + 1)}`,
      'YYYYMMDD': `${dt.getFullYear()}${second(dt.getMonth() + 1)}${second(dt.getDate())}`,
      'YYYYMMDDss': `${dt.getFullYear()}${second(dt.getMonth() + 1)}${second(dt.getDate())}${second(dt.getSeconds())}`,
      'YYYYMMss': `${dt.getFullYear()}${second(dt.getMonth() + 1)}${second(dt.getSeconds())}`
	}
	return (x, y) => {
  	  let dateTime = ''
	  if (x && y) {
		if (/^\d{4}-\d{2}-\d{2}$/.test(x)) {
		  let _YY = x.match(/^\d{4}/)[0].slice(2, x.match(/^\d{4}/)[0].length)
		  let _MM = x.match(/-\d{2}-/)[0].replace(/-/g, '')
		  let _DD = x.match(/\d{2}$/)[0]
		  dateTime = `${_YY}年${_MM}月${_DD}日`
		} else {
		  let dat = new Date(x)
		  dateTime = `${dat.getFullYear().toString().slice(2, dat.getFullYear().length)}年${second(dat.getMonth() + 1)}月${second(dat.getDate())}日`
		}
	  } else if (x) {
        dateTime = `${maps[x]}`
	  } else {
        dateTime = `${dt.getFullYear()}-${second(dt.getMonth() + 1)}-${second(dt.getDate())} ${second(dt.getHours())}:${second(dt.getMinutes())}:${second(dt.getSeconds())}`
	  }
	  return dateTime
	}
})()