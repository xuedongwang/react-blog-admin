import React, { Component } from 'react';
import { Card, Form, Input, Button, Row, Col, Checkbox } from 'antd';
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

const COUNT_DOWN_TIMEOUT = 3;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaHasSend: false,
      countdown: COUNT_DOWN_TIMEOUT
    }
    this.formRef = React.createRef();
  }
  handleLogin = (values) => {
    this.props.userLoginAsync(values);
  }
  handleGetCaptcha = async () => {
    // try {
    //   console.log(this.formRef)
    //   const values = await this.formRef.current.validateFields();
    // } catch (errorInfo) {
    //   throw errorInfo;
    // }
    this.setState({
      captchaHasSend: true
    }, () => {
      this.countdownTimer = setInterval(() => {
        if (this.state.countdown < 1) {
          this.setState({
            captchaHasSend: false,
            countdown: COUNT_DOWN_TIMEOUT
          }, () => {
            this.countdownTimer && clearInterval(this.countdownTimer)
          })
          return;
        }
        this.setState({
          countdown: this.state.countdown - 1
        })
      }, 1000);
    })
  }
  componentWillUnmount() {
    this.countdownTimer && clearInterval(this.countdownTimer);
  }
  render () {
    return (
      <div className={style.loginRegister}>
        <Card style={{
          width: 500,
          boxShadow: '0 0 10px #ececec',
          }} title="注册">
          <Form
            ref={this.formRef}
            {...layout}
            name="basic"
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              captcha: '',
              agreement: false
            }}
            onFinish={this.handleLogin}
          >
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                {
                  required: true,
                  message: '请输入账号',
                },
                {
                  type: 'email',
                  message: '不是一个有效的邮箱',
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
            <Form.Item
              label="确认密码"
              dependencies={['password']}
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次输入的密码不匹配');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item label="验证码" required extra={this.state.captchaHasSend ? '验证码已发送到你的邮箱' : ''}>
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    noStyle
                    name="captcha"
                    rules={[
                      {
                        required: true,
                        message: '请输入验证码'
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {
                    this.state.captchaHasSend
                    ?
                    <Button disabled={true}>{ this.state.countdown }</Button>
                    :
                    <Button onClick={this.handleGetCaptcha}>获取验证码</Button>
                  }
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              { ...tailLayout }
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject('勾选声明后才可使用该系统'),
                },
              ]}
            >
              <Checkbox>
                我已经阅读并<Link to="/agreement">同意声明</Link>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Link to="/login">已有账号，去登录</Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login;