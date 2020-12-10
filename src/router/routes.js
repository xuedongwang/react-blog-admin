import { uuid } from '@/helper';
import Home from '@/pages/Home';
import Common from '@/layouts/Common';
import Blank from '@/layouts/Blank';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Article from '@/pages/Article';
import Category from '@/pages/Category';

const routes = [
  {
    path: '/',
    component: Home,
    layout: Common,
    exact: true,
    key: uuid()
  },
  {
    path: '/category',
    component: Category,
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
  },
  {
    path: '/register',
    component: Register,
    layout: Blank,
    exact: true,
    key: uuid()
  },
  {
    path: '/login',
    component: Login,
    layout: Blank,
    exact: true,
    key: uuid()
  }
];

export default routes;