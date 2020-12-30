import React, { Component, Fragment } from 'react';
import { PageHeader, Button, Drawer, Space, Select, Form, Input, Switch, Skeleton, Row } from 'antd';
import { withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import queryString from 'query-string';
import {
  CheckCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter';
import style from './style.module';
import { timeago } from '@/helper';

const { Option } = Select;

const editorId = 'editor-with-code-highlighter'

BraftEditor.use(CodeHighlighter({
  includeEditors: ['editor-with-code-highlighter'],
}))

class CreateArticle extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSaving: false,
      saveLoading: false,
      fetchArticleLoading: false,
      visible: false,
      editorState:  BraftEditor.createEditorState(null, {
        editorId
      }),
      article: {}
    }
  }
  fetchArticleDetail = () => {
    this.setState({
      fetchArticleLoading: true
    })
    const { id } = queryString.parse(this.props.location.search);
    $api
      .getArticleDetail({
        params: {
          id
        }
      })
      .then(res => {
        this.setState({
          fetchArticleLoading: false
        })
        const { content, ...rest } = res.data;
        this.setState({
          article: {
            ...rest
          }
        });
        this.handleEditorChange(BraftEditor.createEditorState(content, {
          editorId
        }));
      })
      .catch(err => {
        this.setState({
          fetchArticleLoading: false
        })
        throw err;
      });
  }
  handleEditorChange = editorState => {
    this.setState({
      editorState
    });
    this.debounceSaveDraft();
  }
  handleToggleDrawerVisiable = () => {
    this.setState({
      visible: !this.state.visible
    });
  }
  handlePublish = isDraft => {
    this.setState({
      saveLoading: true
    })
    const content = {
      ...this.getArticleContent(),
      isDraft
    };
    console.log(content);
    $api.saveArticle(content)
      .then(res => {
        this.setState({
          saveLoading: false
        })
      })
      .catch(err => {
        this.setState({
          saveLoading: false
        })
        throw err;
      });
  }
  componentDidMount () {
    this.fetchArticleDetail();
    this.debounceSaveDraft = debounce(2000, false, this.handleSaveArticleContent)
  }
  getArticleContent = () => {
    const html = this.state.editorState.toHTML();
    return {
      ...this.state.article,
      content: html,
    }
  }
  handleSaveArticleContent = () => {
    const { content } = this.getArticleContent();
    this.setState({
      isSaving: true
    });
    $api.saveArticleContent({
      content
    })
      .then(res => {
        this.setState({
          isSaving: false,
          article: {
            ...this.state.article,
            updatedAt: res.data.updatedAt
          }
        });
      })
      .catch(err => {
        this.setState({
          isSaving: false
        });
        throw err;
      });
  }
  render () {
    const layout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 22 },
    };
    return (
      <div className={style.createArticleWrapper}>
        {
          this.state.fetchArticleLoading ?
          <PageHeader>
            <Row justify="space-between">
              <Skeleton.Input style={{ width: '60vw' }} active={true} />
              <Space>
                <Skeleton.Button active={true} />
                <Skeleton.Button active={true} />
              </Space>
            </Row>
            <Row justify="space-between" style={{marginTop: 10}}>
              {
                [...Array(30)].map((item, index) => (
                  <Skeleton.Input key={index} style={{ width: 50 }} active={true} />
                ))
              }
            </Row>
            <Row>
              <Skeleton active={true} />
              <Skeleton active={true} />
              <Skeleton active={true} />
            </Row>
          </PageHeader>
          :
          <PageHeader
            className={style.pageHeader}
            ghost={false}
            onBack={() => window.history.back()}
            title={this.state.article.title}
            subTitle={<Fragment>
              {
                this.state.isSaving ?
                <Fragment><SyncOutlined spin />正在保存...</Fragment>
                :
                <Fragment><CheckCircleOutlined />上次保存：{timeago(this.state.article.updatedAt)}</Fragment>
              }
            </Fragment>}
            extra={[
              <Button key="3" onClick={() => this.handlePublish(false)} loading={this.state.saveLoading}>保存草稿</Button>,
              <Button key="2" type="primary" onClick={this.handleToggleDrawerVisiable}>发布</Button>,
            ]}
          >
            <BraftEditor
              value={this.state.editorState}
              id="editor-with-code-highlighter"
              onChange={this.handleEditorChange}
            />
          </PageHeader>
        }
        <Drawer
          title="发布文章"
          placement="top"
          closable={false}
          onClose={this.handleToggleDrawerVisiable}
          visible={this.state.visible}
          height="auto"
        >
          <Form {...layout} name="nest-messages" initialValues={this.state.article} onFinish={() => this.handlePublish(true)}>
            <Form.Item name="title" label="文章标题" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="description" label="描述">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="keywords" label="关键词">
              <Select mode="tags" placeholder="Tags Mode">
                {
                  [1, 2, 3].map(keywords => (
                    <Option key={keywords}>{keywords}</Option>
                  ))
                }
              </Select>
            </Form.Item>
            <Form.Item name="isPrivate" label="隐私" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item name="isOrigin" label="原创" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item name="isAllowComment" label="允许评论" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }} style={{marginBottom: 0}}>
              <Space align="center">
              <Button type="primary" htmlType="submit" loading={this.state.saveLoading}>发布</Button>
              <Button onClick={this.handleToggleDrawerVisiable}>取消</Button>
            </Space>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    )
  }
}

export default withRouter(CreateArticle);