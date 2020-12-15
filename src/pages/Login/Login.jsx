import React, { Component } from 'react';
import { Card, Image } from 'antd';
import style from './style.module';

class Article extends Component {
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
            src={require('@/static/images/mini-program-code.png')}
            placeholder={
              <Image
                preview={false}
                src={require('@/static/images/mini-program-code.png')}
                width={200}
              />
            }
          />
        </Card>
      </div>
    )
  }
}

export default Article;