import React, { Component } from 'react';
import { Card, Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

const validateMessages = {
  required: '${label} 必填',
  string: {
    min: "'${name}' 最少为 ${min} 个字符",
    max: "'${name}' 最多为 ${max} 个字符",
  },
};


class Category extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.setBreadcrumb([
      {
        name: '分类管理',
        path: '/category'
      },
      {
        name: '创建分类'
      }
    ])
  }
  componentWillUnmount () {
    this.props.setBreadcrumb([])
  }
  onFinish = values => {
    console.log(values);
  }
  render () {
    return (
      <div>
        <Card>
          <Form {...layout} onFinish={this.onFinish}>
            <Form.Item label="分类名" name="name" rules={[{
              required: true,
              message: '请输入分类名',
              min: 1,
              mex: 20
            }, {
              type: 'string',
              mex: 20,
              message: '长度为1-20位',
            }]}>
              <Input />
            </Form.Item>
            <Form.Item label="描述" name="description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Category;