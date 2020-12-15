const delay = (timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, timeout);
  })
};

module.exports = {
  delay
}