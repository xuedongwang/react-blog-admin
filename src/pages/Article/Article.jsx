import React, { Component, Fragment } from 'react';
import { Table, Card, Button, Tag, Space, Popconfirm, Descriptions } from 'antd';
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

function ArticleTag ({ article }) {
  if (article.isPrivate) {
    return <Tag color="#ff4d4f">隐私</Tag>;
  } else if (article.isDraft) {
    return <Tag color="#faad14">草稿</Tag>;
  } else if (article.isOrigin) {
    return <Tag color="#52c41a">转载</Tag>;
  } else {
    return <Tag color="#1890ff">原创</Tag>;
  }
}

class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      createArticleLoading: false
    };
  }
  handleCreateArticle = () => {
    this.setState({
      createArticleLoading: true
    })
    $api
      .createArticle()
      .then(res => {
        this.setState({
          createArticleLoading: false
        })
        this.props.history.push(`/create-article?id=${res.data.id}`)
      })
      .catch(err => {
        this.setState({
          createArticleLoading: false
        })
        throw err;
      });
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
        render: row => (
          <Fragment>
            <ArticleTag article={row}/>
            <span>{ row.title }</span>
          </Fragment>
        ),
      },
      {
        title: '作者',
        width: 100,
        dataIndex: 'author',
      },
      {
        title: '分类',
        width: 120,
        dataIndex: 'categoryName',
      },
      {
        title: '阅读数',
        width: 100,
        dataIndex: 'readCount',
        render: readCount => accounting.formatNumber(readCount)
      },
      {
        title: '创建时间',
        width: 100,
        dataIndex: 'createdAt',
        render: createdAt => timeago(createdAt)
      },
      {
        title: '更新时间',
        width: 100,
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
        <Card title="文章管理" bordered={false} extra={<Button type="primary" loading={this.state.createArticleLoading} onClick={this.handleCreateArticle}>新建文章</Button>}>
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
              expandedRowRender: record =>(
                <Descriptions
                  style={{marginLeft: 49}}
                  column={1}
                >
                  <Descriptions.Item label="文章标签">
                    {
                      record.keywords.map(keyword => (
                        <Tag color={colors[keyword.length-1]} key={keyword}>{ keyword }</Tag>
                      ))
                    }
                  </Descriptions.Item>
                  <br/>
                  <Descriptions.Item label="文章描述">{ record.description }</Descriptions.Item>
                </Descriptions>
              ),
              rowExpandable: record => (
                !!record.description.trim()
              ),
            }}
          />
        </Card>
      </div>
    )
  }
}

export default withRouter(Article);