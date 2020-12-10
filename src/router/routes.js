import Home from '@/pages/Home';
import Common from '@/layouts/Common';
import Blank from '@/layouts/Blank';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Article from '@/pages/Article';
import Category from '@/pages/Category';
import NotFound from '@/pages/NotFound';

const routes = [
  {
    path: '/',
    component: Home,
    layout: Common,
    exact: true,
  },
  {
    path: '/category',
    component: Category,
    layout: Common,
    exact: true,
  },
  {
    path: '/article',
    component: Article,
    layout: Blank,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    layout: Blank,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    layout: Blank,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    layout: Blank,
    exact: false,
  },
];

export default routes;