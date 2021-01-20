import React, { Component } from 'react';
import { Card, Form, Input, Button, Row, Col, Result, Steps } from 'antd';
import { Link } from 'react-router-dom';
import style from './style.module';

const { Step } = Steps;

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
      countdown: COUNT_DOWN_TIMEOUT,
      currentStep: 0
    }
    this.formRef = React.createRef();
  }
  handleVerifyCaptcha = (values) => {
    console.log(values);
    this.setState({
      currentStep: 1
    })
  }
  handleResetPassword = (values) => {
    console.log(values);
    this.setState({
      currentStep: 2
    })
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
          width: 800,
          boxShadow: '0 0 10px #ececec',
          }}
          >
          <Steps size="small" current={this.state.currentStep}>
            <Step title="验证邮箱" />
            <Step title="重置密码" />
            <Step title="修改成功" />
          </Steps>
          {
            this.state.currentStep === 0
            &&
            <Form
              ref={this.formRef}
              {...layout}
              name="basic"
              style={{
                marginTop: 20
              }}
              initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                captcha: '',
                agreement: false
              }}
              onFinish={this.handleVerifyCaptcha}
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

              <Form.Item label="验证码" required={true} extra={this.state.captchaHasSend ? '验证码已发送到你的邮箱' : ''}>
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
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  下一步
                </Button>
              </Form.Item>
            </Form>
          }
          {
            this.state.currentStep === 1
            &&
            <Form
              ref={this.formRef}
              {...layout}
              name="basic"
              style={{
                marginTop: 20
              }}
              initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                captcha: '',
                agreement: false
              }}
              onFinish={this.handleResetPassword}
            >
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
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  修改密码
                </Button>
              </Form.Item>
            </Form>
          }
          {
            this.state.currentStep === 2
            &&
            <Result
              status="success"
              title="密码修改成功"
              extra={[
                <Button type="primary" key="console">
                  <Link to="/login">去登录</Link>
                </Button>
              ]}
            />
          }
        </Card>
      </div>
    )
  }
}

export default Login;