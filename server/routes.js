
const controller = require('./controller');
const delay = require('./middleware/delay');
module.exports = router => {
  router.get('/userinfo', delay(1000),controller.user.info)
  router.post('/login', delay(1000),controller.user.login)
  router.get('/statistics', delay(1000),controller.common.statistics)

  router.get('/article_list', delay(1000),controller.article.list)
  router.get('/get_article_detail', delay(3000), controller.article.detail)
  router.get('/create_article', delay(1000),controller.article.create)
  router.post('/save_article_content', delay(1000), controller.article.saveContent)
  router.post('/save_article', delay(1000), controller.article.save)

  router.get('/category_list', delay(1000),controller.category.list)
  router.post('/create_category', delay(1000),controller.category.create)
  router.get('/delete_category', delay(1000),controller.category.delete)

}