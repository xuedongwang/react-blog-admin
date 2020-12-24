import React, { Component, Fragment } from 'react';
import { Table, Card, Button, Tag, Space, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom';
import { accounting, timeago } from '@/helper';

const colors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple'
];

class Article extends Component {
  constructor (props) {
    super(props);
    this.handleCreateArticle = this.handleCreateArticle.bind(this);
  }
  handleCreateArticle () {
    this.props.history.push('/create-article')
  }
  componentDidMount () {
    this.props.fetchArticleListAsync({
      params: {
        currentPage: 1,
        perPage: 10
      }
    });
  }
  handChange = ({ current, pageSize }) => {
    this.props.fetchArticleListAsync({
      params: {
        currentPage: current,
        perPage: pageSize
      }
    });
  }
  handleEdit = args => {
    console.log(args)
  }
  handleDelete = args => {
    console.log(args)
  }
  render () {
    const { article } = this.props;
    const { list, total, perPage: pageSize, currentPage: current } = article;
    const columns = [
      {
        title: '文章标题',
        dataIndex: 'title',
      },
      {
        title: '作者',
        dataIndex: 'author',
      },
      {
        title: '关键词',
        dataIndex: 'keywords',
        render: keywords => (
          <Fragment>
            {keywords.map(keyword => {
              return (
                <Tag color={colors[keyword.length % colors.length]} key={keyword}>
                  { keyword }
                </Tag>
              );
            })}
          </Fragment>
        ),
      },
      {
        title: '分类',
        dataIndex: 'categoryName',
      },
      {
        title: '阅读数',
        dataIndex: 'readCount',
        render: readCount => accounting.formatNumber(readCount)
      },
      {
        title: '创建时间',
        dataIndex: 'createdAt',
        render: createdAt => timeago(createdAt)
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
        render: updatedAt => timeago(updatedAt)
      },
      {
        title: '操作',
        fixed: 'right',
        width: 160,
        key: 'action',
        render: row => (
          <Space size="middle">
            <Button size="small" type="primary" onClick={() => this.handleEdit(row)}>编辑</Button>
            <Popconfirm
              placement="topRight"
              title={`确定删除这篇文章吗?`}
              onConfirm={() => this.handleDelete(row)}
              okText="确定"
              cancelText="取消"
            >
              <Button size="small" type="primary" danger>删除</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ];
    return (
      <div>
        <Card title="文章管理" bordered={false} extra={<Button type="primary" onClick={this.handleCreateArticle}>新建文章</Button>}>
          <Table
            pagination={{
              total,
              current,
              pageSize
            }}
            onChange={this.handChange}
            dataSource={list}
            columns={columns}
            rowKey="id"
            expandable={{
              expandedRowRender: record => <p style={{ margin: 0, marginLeft: 49 }}>{record.description}</p>,
              rowExpandable: record => !!record.description.trim(),
            }}
          />
        </Card>
      </div>
    )
  }
}

export default withRouter(Article);