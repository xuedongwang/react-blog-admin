import React, { Component } from 'react';
import { Table, Card, Button, Descriptions, Typography, Tag, Tooltip, Space, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { accounting, timeago } from '@/helper';
const { Title } = Typography;
class Category extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tableLoading: false,
      category: {}
    }
  }
  componentDidMount () {
    this.fetchCategoryList();
  }
  fetchCategoryList () {
    this.setState({
      tableLoading: true
    })
    $api
      .fetchCategoryList()
      .then(res => {
        this.setState({
          category: res.data
        })
      })
      .catch(err => {
        throw err;
      })
      .finally(() => {
        this.setState({
          tableLoading: false
        })
      })
  }
  handleDelete = row => {
    this.setState({
      tableLoading: true
    })
    $api
      .deleteCategory({params: {id: row.id}})
      .then(() => {
        this.fetchCategoryList();
      })
      .catch(err => {
        throw err;
      })
      .finally(() => {
        this.setState({
          tableLoading: false
        })
      })
  }
  render () {
    const columns = [
      {
        title: '标签名',
        dataIndex: 'name'
      },
      {
        title: '文章数',
        dataIndex: 'relateArticleCount',
        render: readCount => accounting.formatNumber(readCount)
      },
      {
        title: '作者',
        dataIndex: 'author'
      },
      {
        title: '创建时间',
        dataIndex: 'createdAt',
        render: createdAt => timeago(createdAt)
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
        render: createdAt => timeago(createdAt)
      },
      {
        title: '操作',
        fixed: 'right',
        width: 160,
        key: 'action',
        render: row => (
          <Space size="middle">
            <Button size="small" type="primary">
              <Link to={`/edit-category?id=${row.id}`}>编辑</Link>
            </Button>
            <Popconfirm
              placement="topRight"
              title={`确定删除这篇文章吗?`}
              onConfirm={() => this.handleDelete(row)}
              okText="确定"
              cancelText="取消"
            >
              {
                row.isDefault
                ?
                <Tooltip placement="left" title="不能添加更多分类">
                  <Button size="small" type="primary" danger disabled={true}>删除</Button>
                </Tooltip>
                :
                <Button size="small" type="primary" danger>删除</Button>
              }
            </Popconfirm>
          </Space>
        ),
      }
    ];
    
    const { category, tableLoading } = this.state;
    const MAX_ALLOW_CATEGORY = 30;
    return (
      <div>
        <Card title="分类管理" bordered={false}
          extra={
            <Tooltip placement="left" title="不能添加更多分类" visible={category?.list?.length>=MAX_ALLOW_CATEGORY}>
              <Button type="primary" disabled={category?.list?.length>=MAX_ALLOW_CATEGORY}>
                <Link to="/create-category">新建分类</Link>
              </Button>
            </Tooltip>
          }>
          <Title level={5}>最多可以添加<Tag style={{margin: '0 10px'}} color="#108ee9">{ MAX_ALLOW_CATEGORY ?? 0 }</Tag>个分类，你已经添加了<Tag style={{margin: '0 10px'}} color="#108ee9">{ category?.list?.length ?? 0 }</Tag>个，最多还可以添加<Tag style={{margin: '0 10px'}} color="#108ee9">{(MAX_ALLOW_CATEGORY - (category?.list?.length ?? 0)) ?? MAX_ALLOW_CATEGORY}</Tag>个</Title>
          <Table
            loading={this.state.tableLoading}
            rowKey="id"
            dataSource={category.list}
            columns={columns}
            pagination={false}
            expandable={{
              expandedRowRender: category =>(
                <Descriptions
                  style={{marginLeft: 49}}
                  column={1}
                >
                  <Descriptions.Item style={{paddingBottom: 0}} label="文章描述">{ category.description }</Descriptions.Item>
                </Descriptions>
              ),
              rowExpandable: category => (
                !!category.description.trim()
              ),
            }}
          />
        </Card>
      </div>
    )
  }
}

export default Category;