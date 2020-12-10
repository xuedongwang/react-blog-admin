import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import style from './style.module';
class NotFound extends Component {
  render () {
    return (
      <div className={style.notFound}>
        <Result
          status="404"
          title="404"
          subTitle="对不起，你访问的页面不存在"
          extra={
            <Button type="primary">
              <Link to="/">回到首页</Link>
            </Button>
          }
        />
      </div>
    );
  }
}

export default NotFound;