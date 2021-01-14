import React, { Component } from 'react';
import { Card, Form, Input, Button, message } from 'antd';
import { withRouter } from 'react-router-dom';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

class Category extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false
    }
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
    this.setState({
      loading: true
    })
    $api
      .createCategory(values)
      .then(() => {
        message.success({ content: '创建分类成功' });
        this.props.history.push('/category');
      })
      .catch(err => {
        throw err;
      })
      .finally(() => {
        this.setState({
          loading: false
        })
      });
  }
  render () {
    const initialValues = {
      name: '',
      description: ''
    };
    const { location } = this.props;
    return (
      <div>
        <Card>
          <Form initialValues={initialValues} {...layout} onFinish={this.onFinish}>
            <Form.Item label="分类名" name="name" rules={[{
              required: true,
              message: '请输入分类名',
            }, {
              type: 'string',
              max: 20,
              message: '长度为1-20个字符',
            }]}>
              <Input />
            </Form.Item>
            <Form.Item label="描述" name="description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
              <Button type="primary" htmlType="submit" loading={this.state.loading}>
                { location?.pathname === '/create-category' ? '创建' : '更新' }
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default withRouter(Category);