import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { menu } from '@/config';
import style from './style.module.scss';
const { Header, Sider, Content } = Layout;

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      collapsed: false,
      defaultSelectedKeys: menu.defaultSelectedKeys
    }
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  componentDidMount () {
    this.setState({
      defaultSelectedKeys: this.props.history.location.pathname
    })
  }
  handleClick (e) {
    this.props.history.push(e.key);
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.defaultSelectedKeys} onClick={this.handleClick}>
              {
                menu.list.map(menuItem => (
                  <Menu.Item key={menuItem.key} icon={<menuItem.icon/>}>
                    { menuItem.name }
                  </Menu.Item>
                ))
              }
            </Menu>
          </Sider>
          <Layout>
            <Header className={style.siteLayoutBackground} style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: style.trigger,
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className={style.siteLayoutBackground}
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              { this.props.children }
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default withRouter(Home);