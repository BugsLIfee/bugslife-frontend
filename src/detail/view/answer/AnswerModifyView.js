import React, { Component } from "react";
import "../scss/addAnswer.scss"
import { Button } from "semantic-ui-react";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

export default class AnswerModifyView extends Component {

    editorRef = React.createRef();

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.answer.id,
            registDate: this.props.answer.registDate,
            questionId : this.props.answer.questionId,
            content : this.props.answer.content,
            writerId: this.props.answer.writerId,
            writerName: this.props.answer.writerName,
            writerLevel: this.props.answer.writerLevel,
        }
    }

    render() {

        const { onModifyAnswer, answer } = this.props;
        const onClickSubmit = (answerObj) => {
            onModifyAnswer(answerObj);
        }

        return(
            <div className="detail_answer_editor">
                <p> # 답변작성 </p>
                <Editor
                    initialValue = {answer.content}
                    previewStyle="vertical"
                    height="400px"
                    initialEditType="markdown"
                    useCommandShortcut={true}
                    ref={this.editorRef}
                    onChange = {() => {
                        this.setState({
                            content: this.editorRef.current.getInstance().getHtml()
                        })
                    }}
                />
    
                <div className="posting_answer">
                    <Button basic color='white' className="bt" size='huge' onClick={onModifyAnswer}> 
                        뒤로가기
                    </Button>
                    <Button basic color='gray' className="bt" size='huge'
                        onClick={() => {onClickSubmit(this.state)}}> 
                        수정완료
                    </Button>
                </div>
            </div>
        )
    }
}