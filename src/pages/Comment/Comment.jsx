import React, { Component } from 'react';
import { PageHeader, Button, Card, Descriptions } from 'antd';

class CreateArticle extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">保存草稿</Button>,
            <Button key="2" type="primary">发布</Button>,
          ]}
        >
          <Card title="Card title">
            <Descriptions title="User Info">
              <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
              <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
              <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
              <Descriptions.Item label="Remark">empty</Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </PageHeader>
      </div>
    )
  }
}

export default CreateArticle;