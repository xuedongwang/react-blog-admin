
const { mock, Random } = require('mockjs');

module.exports = {
  create:  async ctx => {
    ctx.body = {
      code: 0,
      data: mock({}),
      message: 'success'
    }
  },
  delete:  async ctx => {
    ctx.body = {
      code: 0,
      data: mock({}),
      message: 'success'
    }
  },
  list: async ctx => {
    const total = Random.natural(0, 30);
    const randomData = mock({
      [`list|${total}`]: [{
        id: () => Random.id(),
        name: () => Random.word(1,50),
        author: () => Random.cname(),
        description: () => Random.cparagraph(),
        relateArticleCount: () => Random.natural(0,10000),
        createdAt: () => Random.time('T'),
        updatedAt: () => Random.time('T'),
      }]
    });
    ctx.body = {
      code: 0,
      message: 'success',
      data: {
        total,
        list: randomData.list.map((item, index) => ({
          ...item,
          isDefault: index === 0 ? true : false
        }))
      }
    }
  }
}