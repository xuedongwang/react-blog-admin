
const { mock, Random } = require('mockjs');

const total = Random.natural(0, 10000);
module.exports = {
  saveContent: async ctx => {
    ctx.body = {
      code: 0,
      data: mock({
        updatedAt: Random.time('T')
      })
    }
  },
  save: async ctx => {
    ctx.body = {
      code: 0,
      data: mock({}),
      message: 'success'
    }
  },
  detail:  async ctx => {
    ctx.body = {
      code: 0,
      data: mock({
        id: ctx.query.id,
        title: Random.csentence(),
        description: Random.cparagraph(),
        isPrivate: Random.boolean(),
        isDraft: Random.boolean(),
        isOrigin: Random.boolean(),
        isAllowComment: Random.boolean(),
        'keywords|0-10': [() => Random.word()],
        content: Random.cparagraph(),
        createdAt: Random.time('T'),
        updatedAt: Random.time('T'),
        categoryId: Random.id()
      })
    }
  },
  create:  async ctx => {
    ctx.body = {
      code: 0,
      data: mock({
        id: Random.id()
      })
    }
  },
  list: async ctx => {
    const { perPage, currentPage } = ctx.query;
    const pageSize = parseInt(perPage) || 1;
    const current = parseInt(currentPage) || 10;
    ctx.body = {
      code: 0,
      data: mock({
        total,
        perPage: pageSize,
        currentPage: current,
        [`list|${perPage}`]: [{
          id: () => Random.id(),
          title: () => Random.csentence(),
          isPrivate: () => Random.boolean(),
          isDraft: () => Random.boolean(),
          isOrigin: () => Random.boolean(),
          author: () => Random.cname(),
          'keywords|0-5': [() => Random.word()],
          categoryName: () => Random.word(),
          description: () => Random.cparagraph(),
          readCount: () => Random.natural(0,10000),
          createdAt: () => Random.time('T'),
          updatedAt: () => Random.time('T'),
        }]
      })
    }
  }
}