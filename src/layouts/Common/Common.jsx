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
    console.log(props)
    this.state = {
      collapsed: false,
      current: this.props.location.pathname
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }
  handleToggleMenu () {
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
            <Menu theme={menu.theme} onClick={this.handleClick} mode="inline" selectedKeys={[this.state.current]} defaultSelectedKeys={menu.defaultSelectedKeys}>
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
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {
                  this.props.breadcrumb.map(item => (
                    <Breadcrumb.Item key={item.name}>
                      <Link to={item.path}>{ item.name }</Link>
                    </Breadcrumb.Item>
                  ))
                }
              </Breadcrumb>
              <div className={style.siteLayoutBackground} style={{ padding: 24, minHeight: 360 }}>
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