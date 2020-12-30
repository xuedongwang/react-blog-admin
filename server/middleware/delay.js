const { delay } = require('../helper');

module.exports = (timeout = 0) => {
  return async (ctx, next) => {
    await delay(timeout);
    await next();
  }
}