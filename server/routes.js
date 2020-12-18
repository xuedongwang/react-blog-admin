
const controller = require('./controller');

module.exports = router => {
  router.get('/userinfo', controller.user.info)
  router.get('/get_qr_code', controller.common.qrCode)
  router.get('/statistics', controller.common.statistics)
}