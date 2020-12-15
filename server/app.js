const Koa = require('koa');
const Router = require('koa-router');
const cors2 = require('koa2-cors');
const routes = require('./routes');

const app = new Koa();
const router = new Router();

const PORT = 3003;

routes(router);

app
  .use(cors2())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`Mock Server running at: http://localhost:${PORT}`);
})