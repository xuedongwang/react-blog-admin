import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import style from './style.module.scss';
const { Header, Sider, Content } = Layout;

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      collapsed: false,
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render () {
    return (
      <div className={style.layout}>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
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

export default Home;