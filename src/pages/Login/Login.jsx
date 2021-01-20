import React, { Component } from 'react';
import { Card, Form, Input, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import style from './style.module';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
  },
};

class Login extends Component {
  handleLogin = (values) => {
    this.props.userLoginAsync(values);
  }
  render () {
    return (
      <div className={style.loginWrapper}>
        <Card style={{
          width: 500,
          boxShadow: '0 0 10px #ececec',
          }} title="登录">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              username: '',
              password: ''
            }}
            onFinish={this.handleLogin}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入账号',
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Link to="/register">注册账号</Link>
              <Divider type="vertical" />
              <Link to="/reset-password">忘记密码？</Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login;