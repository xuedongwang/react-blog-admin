import React, { Component } from 'react';
import { Table, Card, Button } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];


class Category extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {}
  render () {
    return (
      <div>
        <Card title="文章管理" bordered={false} extra={<Button type="primary">新建文章</Button>}>
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </div>
    )
  }
}

export default Category;