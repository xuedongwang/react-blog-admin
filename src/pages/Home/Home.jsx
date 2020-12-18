import React, { Component } from 'react';
import { Col, Row } from 'antd';
import style from './style.module';
import { accounting } from '@/helper';
class Home extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchStatisticsAsync()
  }
  render () {
    const { statistics } = this.props;
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <div className={style.box}>
              <div className={style.count}>
                <div className={style.value}
                  title={accounting.formatNumber(statistics.articleCount)}
                >{ accounting.formatNumber(statistics.articleCount) }</div>
                <div className={style.unit}>篇</div>
              </div>
              <div className={style.name}>文章</div>
            </div>
          </Col>
          <Col span={8}>
            <div className={style.box}>
              <div className={style.count}>
                <div
                  className={style.value}
                  title={accounting.formatNumber(statistics.categoryCount)}
                >{ accounting.formatNumber(statistics.categoryCount) }</div>
                <div className={style.unit}>个</div>
              </div>
              <div className={style.name}>分类</div>
            </div>
          </Col>
          <Col span={8}>
            <div className={style.box}>
              <div className={style.count}>
                <div
                  className={style.value}
                  title={accounting.formatNumber(statistics.commentCount)}
                >{ accounting.formatNumber(statistics.commentCount) }</div>
                <div className={style.unit}>条</div>
              </div>
              <div className={style.name}>评论</div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;