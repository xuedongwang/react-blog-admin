
const { mock, Random } = require('mockjs');

const total = Random.natural(0, 10000);
module.exports = {
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