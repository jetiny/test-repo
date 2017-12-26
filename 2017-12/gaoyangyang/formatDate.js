export default (now, format) => {
  let newTime = new Date();
  if (format) {
    newTime = new Date(now)
  }
  let formTime = {
    year : newTime.getFullYear(),
    month : newTime.getMonth()+1,     
    date : newTime.getDate(),     
    hour : newTime.getHours(),  
    minute : newTime.getMinutes(),   
    second : newTime.getSeconds(),
    milliSecond : newTime.getMilliseconds()
  }
  let time = [];
  // 1 => 01
  for (let k in formTime) {
    if ((formTime[k] + '').length === 1) {
      formTime[k] = '0' + formTime[k]
    } else {
      formTime[k] = '' + formTime[k]
    }
  }
  // 1 => 001
  while ((formTime.milliSecond + '').length < 3)
  {
    formTime.milliSecond = '0' + formTime.milliSecond
  }
  // 转 中文日期
  if (format === 'YY年MM月DD日' && now) {
    formTime.years = newTime.getYear()-100
    return formTime.years+ '年' + formTime.month + '月' + formTime.date + '日'
  } else {
    let arr = {
      "YYYY": "year",
      "MM": "month",
      "DD": "date",
      "hh": "hour",
      "mm": "minute",
      "ss": "second",
      "ms": "milliSecond"
    }
    let time2 = ''
    if (!now) {
   		for (let k in formTime) {
        if (k === 'milliSecond') {
          continue;
        }
        else {
          time.push(formTime[k])
        }
      }
      // time
    	time.forEach((elem, index) => {
        if (index<2) {
          time2 = time2 + (elem + '-')
        } 
        else if (index === 2) {
          time2 = time2 + (elem + ' ')
        }
        else if (index > 3){
          time2 = time2 + (':' + elem)
        } else {
          time2 = time2 + elem
        }
      })
      time = time2
    } else {
      if (now === 'ms') {
        newTime.getMilliseconds()
      }
    	for (let j in arr) {
          if (now.includes(j)) {
            time.push(formTime[arr[j]])
          }
    	}
    	if (/^\[\w{4,6}\]/.test(now)) {
    		 time = '[' + time.join('') + ']'
    	} else if (/^\[\w{4}:\w{2}\]/.test(now)) {
    		time = '[' + time.join(':') + ']'
    	}
    	else {
    		time = time.join('')
    	}
    }
     return time
    }
  }