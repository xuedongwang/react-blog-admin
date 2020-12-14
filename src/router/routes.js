import Home from '@/pages/Home';
import Common from '@/layouts/Common/index.js';
import Blank from '@/layouts/Blank';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Article from '@/pages/Article';
import CreateArticle from '@/pages/CreateArticle';
import Category from '@/pages/Category';
import NotFound from '@/pages/NotFound';
import Comment from '@/pages/Comment';

const routes = [
  {
    path: '/',
    component: Home,
    layout: Common,
    exact: true,
    strict: true
  },
  {
    path: '/comment',
    component: Comment,
    layout: Blank,
    exact: true,
    strict: true
  },
  {
    path: '/category',
    component: Category,
    layout: Common,
    exact: true,
    strict: true
  },
  {
    path: '/article',
    component: Article,
    layout: Common,
    exact: true,
    strict: true
  },
  {
    path: '/create-article',
    component: CreateArticle,
    layout: Blank,
    exact: true,
    strict: true
  },
  {
    path: '/register',
    component: Register,
    layout: Blank,
    exact: true,
    strict: true
  },
  {
    path: '/login',
    component: Login,
    layout: Blank,
    exact: true,
    strict: true
  },
  {
    path: '*',
    component: NotFound,
    layout: Blank,
    exact: false,
    strict: true
  },
];

export default routes;