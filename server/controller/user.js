
const { mock, Random } = require('mockjs');

module.exports = {
  info: async ctx => {
    ctx.body = {
      code: 0,
      data: mock({
        id: () => Random.id(),
        avatar: () => Random.image('40x40'),
        messageCount: () => Random.natural(0, 20),
        nickname: () => Random.name(),
        gender: () => Random.integer(0, 1)
      })
    }
  },
  login: async ctx => {
    ctx.body = {
      code: 0,
      data: mock({
        token: () => Random.sentence()
      })
    }
  }
}