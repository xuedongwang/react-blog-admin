import React, { Component } from 'react';
import { Col, Row, Button, Tabs, List, Skeleton, Popover, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import style from './style.module';
import { accounting } from '@/helper';
const { TabPane } = Tabs;
class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      initLoading: false,
      loading: false,
      list: [
        {
          id: Math.random(),
          name: Math.random(),
          loading: false
        },
        {
          id: Math.random(),
          name: Math.random(),
          loading: false
        },
        {
          id: Math.random(),
          name: Math.random(),
          loading: false
        }
      ]
    }
  }
  componentDidMount () {
    // this.props.fetchStatisticsAsync()
  }
  onLoadMore = () => {
    const newList = [
      {
        id: Math.random(),
        name: Math.random(),
        loading: true
      },
      {
        id: Math.random(),
        name: Math.random(),
        loading: true
      },
      {
        id: Math.random(),
        name: Math.random(),
        loading: true
      }
    ];
    this.setState({
      list: this.state.list.concat(newList),
      loading: true
    })
    setTimeout(() => {
      this.setState({
        list: this.state.list.map(item => ({...item, loading: false})),
        loading: false
      }, () => {
        window.dispatchEvent(new Event('resize'));
      })
    }, 1000)
  }
  render () {
    const tabs = [
      {
        name: '图片',
        type: 'picture'
      },
      {
        name: '视频',
        type: 'video'
      },
      {
        name: '音频',
        type: 'audio'
      },
      {
        name: 'PDF',
        type: 'pdf'
      },
      {
        name: '其他',
        type: 'other'
      }
    ];
    const OperationsSlot = {
      right: <Button type="primary">上传文件</Button>
    };
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>加载更多</Button>
        </div>
      ) : null;
    return (
      <div className={style.wrapper}>
        <Tabs defaultActiveKey="0" centered tabBarExtraContent={OperationsSlot}>
          {
            tabs.map(tab => (
              <TabPane tab={tab.name} key={tab.name}>
                <List
                  loading={initLoading}
                  itemLayout="horizontal"
                  loadMore={loadMore}
                  dataSource={list}
                  renderItem={item => (
                    <List.Item
                      actions={[<a key="list-loadmore-edit">删除</a>, <a key="list-loadmore-more">详情</a>]}
                    >
                      <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                          avatar={
                            <Popover placement="rightTop" title="dasdasd" content="dasdasd" trigger="click">
                              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </Popover>
                          }
                          title={<Link to={`/resource-lib/${tab.type}/${item.id}`}>{item.id}</Link>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </Skeleton>
                    </List.Item>
                  )}
                />
              </TabPane>
            ))
          }
        </Tabs>
      </div>
    )
  }
}

export default Home;