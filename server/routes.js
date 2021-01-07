
const controller = require('./controller');
const delay = require('./middleware/delay');
module.exports = router => {
  router.get('/userinfo', controller.user.info)
  router.post('/login', controller.user.login)
  router.get('/statistics', controller.common.statistics)
  router.get('/article_list', controller.article.list)
  router.get('/create_article', delay(1000),controller.article.create)
  router.get('/get_article_detail', delay(3000), controller.article.detail)
  router.post('/save_article_content', delay(1000), controller.article.saveContent)
  router.post('/save_article', delay(1000), controller.article.save)
}