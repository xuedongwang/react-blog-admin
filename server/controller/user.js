
const { mock, Random } = require('mockjs');

module.exports = {
  info: async ctx => {
    ctx.body = {
      code: 0,
      data: mock({
        id: () => Random.id(),
        nickname: () => Random.name(),
        gender: () => Random.integer(0, 1)
      })
    }
  }
}