import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

const editorId = 'editor-with-code-highlighter'

BraftEditor.use(CodeHighlighter({
  includeEditors: ['editor-with-code-highlighter'],
}))

class CreateArticle extends Component {
  constructor (props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState(null, {
        editorId
      })
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (editorState) {
    this.setState({ editorState })
  }
  render () {
    return (
      <div>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">保存草稿</Button>,
            <Button key="2" type="primary">发布</Button>,
          ]}
        >
          <BraftEditor
          value={this.state.editorState} id="editor-with-code-highlighter" onChange={this.handleChange}/>
        </PageHeader>
      </div>
    )
  }
}

export default withRouter(CreateArticle);