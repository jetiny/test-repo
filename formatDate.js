const formatDate =(now, format) => {
  let newTime = new Date();
  if (format === 'YY年MM月DD日') {
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
  let time;
  for (let k in formTime) {
    if ((formTime[k]+"").length === 1) {
      formTime[k] = "0" + formTime[k]
    } else {
      formTime[k] = "" + formTime[k]
    }
  }
  if (format === 'YY年MM月DD日') {
    if (/^\d{4}-\d{2}-\d{2}$/.test(now)) {
      let time = now.split('-')
      return new Date(now).getYear()-100 + '年' + time[1] + '月' + time[2] + '日'
    }
    else if (typeof(now) === 'number') {
      return new Date(now).getYear()-100 +"年"+ ((new Date(now).getMonth()*1)+1) +"月" + new Date(now).getDate()+"日";     
    } 
    else {
     return new Date(now).getYear()-100+ '年' + formTime.month + '月' + formTime.date + '日'
    }
  } else {
    switch(now)
    {
    case '[YYYY]':
      time = '[' + formTime.year + ']'
      break;
    case '[YYYYMM]':
      time = '[' + formTime.year + '' + formTime.month + ']'
      break;
    case 'YYYYMM':
      time = formTime.year + '' + formTime.month
      break;
    case 'YYYYMMDD':
      time = formTime.year + '' + formTime.month + '' + formTime.date
      break;
    case 'YYYYMMDDss':
      time = formTime.year + '' + formTime.month + '' + formTime.date + '' + formTime.minute
      break;
    case 'YYYYMMss':
      time = formTime.year + '' + formTime.month + ''  + formTime.minute
      break;
    case '[YYYY:MM]':
      time = '[' + formTime.year + ':' + formTime.month + ']'
      break;
    case 'YYYY':
      time = formTime.year
      break;
    case 'MM':
      time = formTime.month    
      break;
    case 'DD':
      time = formTime.date
      break;
    case 'hh':
      time = formTime.hour
      break;
    case 'mm':
      time = formTime.minute
      break;
    case 'ss':
      time = formTime.second
      break;
    case 'ms':
      time = formTime.milliSecond
      break;
    default:
      time = formTime.year+"-"+formTime.month+"-"+formTime.date+" "+formTime.hour+":"+formTime.minute+":"+formTime.second
     }
     return time
    }
  }
  export default formatDate