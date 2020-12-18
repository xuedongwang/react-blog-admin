import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Menu, Breadcrumb, Avatar, Badge, Dropdown } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { menu } from '@/config';
import style from './style.module.scss';
const { Header, Sider, Content } = Layout;

const menuList = (
  <Menu>
    <Menu.Item>
      个人信息
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      退出
    </Menu.Item>
  </Menu>
);


class Common extends Component {
  constructor (props) {
    super(props);
    this.state = {
      collapsed: false,
      current: this.props.activeMenu
    }
  }
  handleToggleMenu =  () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render () {
    return (
      <div className={style.layout}>
        <Helmet>
          <title>主页</title>
        </Helmet>
        <Layout>
          <Sider style={{
            height: '100vh',
          }} trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu theme={menu.theme} mode="inline" selectedKeys={[this.state.current]} defaultSelectedKeys={menu.defaultSelectedKeys}>
              {
                menu.list.map(menuItem => (
                  <Menu.Item key={menuItem.key} icon={<menuItem.icon/>}>
                    <Link to={menuItem.key}>{ menuItem.name }</Link>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Sider>
          <Layout>
            <Header className={[
              style.siteLayoutBackground,
              style.siteLayoutHeader
            ]}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: style.trigger,
                onClick: this.handleToggleMenu,
              })}
              <div className={style.headerRight}>
                <div className={style.userinfo}>
                  <div className={style.nickname}>用户名啊</div>
                  <Dropdown overlay={menuList} trigger="click" placement="bottomRight" arrow={true}>
                    <Badge size="small" count={99}>
                      <Avatar size="large" icon={<UserOutlined />} />
                    </Badge>
                  </Dropdown>
                </div>
              </div>
            </Header>
            <Content style={{
              margin: '0 16px',
              overflow: 'auto',
              maxHeight: 'calc(100vh - 64px)',
              paddingBottom: '16px'
            }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {
                  this.props.breadcrumb.map(item => (
                    <Breadcrumb.Item key={item.name}>
                      {
                        item.path
                        ? <Link to={item.path}>{ item.name }</Link>
                        : item.name
                        
                      }
                    </Breadcrumb.Item>
                  ))
                }
              </Breadcrumb>
              <div className={style.siteLayoutBackground1} style={{ minHeight: 360 }}>
                { this.props.children }
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default withRouter(Common);