
const { mock, Random } = require('mockjs');

module.exports = {
  statistics: async ctx => {
    ctx.body = {
      code: 0,
      data: mock({
        articleCount: () => Random.natural(0, 100000000),
        categoryCount: () => Random.natural(0, 100000000),
        commentCount: () => Random.natural(0, 100000000),
      })
    }
  }
}