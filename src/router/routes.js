import Home from '@/pages/Home';
import Common from '@/layouts/Common/index.js';
import Blank from '@/layouts/Blank';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ResetPassword from '@/pages/ResetPassword';
import Article from '@/pages/Article';
import CreateArticle from '@/pages/CreateArticle';
import Category from '@/pages/Category';
import CreateCategory from '@/pages/CreateCategory';
import NotFound from '@/pages/NotFound';
import Comment from '@/pages/Comment';
import ResourceLib from '@/pages/ResourceLib';

const routes = [
  {
    path: '/',
    component: Home,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      title: '主页',
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
      title: '留言管理',
      activeMenu: '/comment'
    }
  },
  {
    path: '/resource-lib',
    component: ResourceLib,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      title: '资源库',
      activeMenu: '/resource-lib'
    }
  },
  {
    path: '/category',
    component: Category,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      title: '分类管理',
      activeMenu: '/category'
    }
  },
  {
    path: ['/create-category', '/edit-category'],
    component: CreateCategory,
    layout: Common,
    exact: true,
    strict: true,
    meta: {
      title: '创建分类',
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
      title: '文章管理',
      activeMenu: '/article'
    }
  },
  {
    path: ['/create-article', '/edit-article'],
    component: CreateArticle,
    layout: Blank,
    exact: true,
    strict: true,
    meta: {
      title: '创建文章',
    }
  },
  {
    path: '/register',
    component: Register,
    layout: Blank,
    exact: true,
    strict: true,
    meta: {
      title: '注册',
    }
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    layout: Blank,
    exact: true,
    strict: true,
    meta: {
      title: '重置密码',
    }
  },
  {
    path: '/login',
    component: Login,
    layout: Blank,
    exact: true,
    strict: true,
    meta: {
      title: '登录',
      activeMenu: '/'
    }
  },
  {
    path: '*',
    component: NotFound,
    layout: Blank,
    exact: false,
    strict: true,
    meta: {
      title: '404',
    }
  },
];

export default routes;