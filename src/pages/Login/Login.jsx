import React, { Component } from 'react';
import { Card, Image } from 'antd';
import style from './style.module';
import { uuid } from '@/helper';

class Login extends Component {
  componentDidMount () {
    this.props.fetchQRCodeAsync({
      params: {
        uuid: uuid()
      }
    })
  }
  render () {
    return (
      <div className={style.loginWrapper}>
        <Card style={{
          width: 300,
          boxShadow: '0 0 10px #ececec',
          textAlign: 'center'
          }} title="登录">
          <Image
            width={200}
            height={200}
            src={this.props.loginQRCode}
            placeholder={
              <Image
                preview={false}
                src={require('@/assets/images/mini-program-code.png')}
                width={200}
                height={200}
              />
            }
          />
        </Card>
      </div>
    )
  }
}

export default Login;