import Home from '@/pages/Home';
import Common from '@/layouts/Common/index.js';
import Blank from '@/layouts/Blank';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Article from '@/pages/Article';
import CreateArticle from '@/pages/CreateArticle';
import Category from '@/pages/Category';
import CreateCategory from '@/pages/CreateCategory';
import NotFound from '@/pages/NotFound';
import Comment from '@/pages/Comment';

const routes = [
  {
    path: '/',
    component: Home,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      activeMenu: '/'
    }
  },
  {
    path: '/comment',
    component: Comment,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      activeMenu: '/comment'
    }
  },
  {
    path: '/category',
    component: Category,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      activeMenu: '/category'
    }
  },
  {
    path: '/create-category',
    component: CreateCategory,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      activeMenu: '/category'
    }
  },
  {
    path: '/article',
    component: Article,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      activeMenu: '/article'
    }
  },
  {
    path: '/create-article',
    component: CreateArticle,
    layout: Blank,
    exact: true,
    strict: true,
    meta: {}
  },
  {
    path: '/register',
    component: Register,
    layout: Blank,
    exact: true,
    strict: true,
    meta: {}
  },
  {
    path: '/login',
    component: Login,
    layout: Blank,
    exact: true,
    strict: true,
    meta: {
      activeMenu: '/'
    }
  },
  {
    path: '*',
    component: NotFound,
    layout: Blank,
    exact: false,
    strict: true,
    meta: {}
  },
];

export default routes;