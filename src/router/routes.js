import { uuid } from '@/helper';
import Home from '@/pages/Home';
import Article from '@/pages/Article';
import Common from '@/layouts/Common';
import Blank from '@/layouts/Blank';

const routes = [
  {
    path: '/',
    component: Home,
    layout: Common,
    exact: true,
    key: uuid()
  },
  {
    path: '/article',
    component: Article,
    layout: Blank,
    exact: true,
    key: uuid()
  }
];

export default routes;