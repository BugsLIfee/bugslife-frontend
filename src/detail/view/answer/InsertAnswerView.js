import React, { Component } from "react";
import "../scss/addAnswer.scss"
import { Button } from "semantic-ui-react";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

export default class AddAnswerView extends Component {

    render() {

        const { onInsertForm } = this.props;

        return(
            <div className="detail_answer_editor">
                <p> # 답변작성 </p>
                 <Editor
                    previewStyle="vertical"
                    height="400px"
                    initialEditType="markdown"
                    useCommandShortcut={true}
                />
    
                <div className="posting_answer">
                    <Button basic color='white' className="bt" size='huge' onClick={()=> {onInsertForm()}}> 
                        뒤로가기
                    </Button>
                    <Button basic color='gray' className="bt" size='huge'> 
                        완료
                    </Button>
                </div>
            </div>
        )
    }
}