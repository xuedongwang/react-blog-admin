import {
  HomeOutlined,
  FileTextOutlined,
  TagsOutlined,
  SettingOutlined,
  UserOutlined,
  MessageOutlined,
  BarChartOutlined,
  DeleteOutlined,
  FolderOpenOutlined,
  DollarOutlined
} from '@ant-design/icons';

const menuConfig = {
  defaultSelectedKeys: ['/'],
  theme: 'dark',
  list: [
    {
      path: '/',
      key: '/',
      name: '主页',
      icon: HomeOutlined
    },
    {
      path: '/article',
      key: '/article',
      name: '文章管理',
      icon: FileTextOutlined
    },
    {
      path: '/category',
      key: '/category',
      name: '分类管理',
      icon: TagsOutlined
    },
    {
      path: '/user',
      key: '/user',
      name: '用户管理',
      icon: UserOutlined
    },
    {
      path: '/comment',
      key: '/comment',
      name: '留言管理',
      icon: MessageOutlined
    },
    {
      path: '/statistics',
      key: '/statistics',
      name: '数据统计',
      icon: BarChartOutlined
    },
    {
      path: '/material',
      key: '/material',
      name: '资料库',
      icon: FolderOpenOutlined
    },
    {
      path: '/trash',
      key: '/trash',
      name: '回收站',
      icon: DeleteOutlined
    },
    {
      path: '/ad',
      key: '/ad',
      name: '广告管理',
      icon: DollarOutlined
    },
    {
      path: '/setting',
      key: '/setting',
      name: '网站设置',
      icon: SettingOutlined
    }
  ]
};

export default menuConfig;