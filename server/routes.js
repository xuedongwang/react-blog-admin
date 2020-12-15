
const controller = require('./controller');

module.exports = router => {
  router.get('/userinfo', controller.user.info)
}