import * as timeago from 'timeago.js';

const timeagoFunc = date => {
  return timeago.format(date, 'zh_CN');
}

export default timeagoFunc;