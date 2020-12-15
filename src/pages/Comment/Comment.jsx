import React, { Component } from 'react';
import { Card, Button, Popover, List, Skeleton, Avatar } from 'antd';

class CreateArticle extends Component {
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
    this.onLoadMore = this.onLoadMore.bind(this);
  }
  onLoadMore () {
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
      <div>
        <Card>
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            renderItem={item => (
              <List.Item
                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={
                      <Popover placement="rightTop" title="dasdasd" content="dasdasd" trigger="click">
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      </Popover>
                    }
                    title={<a href="https://ant.design">{item.name}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                  <div>content</div>
                </Skeleton>
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}

export default CreateArticle;