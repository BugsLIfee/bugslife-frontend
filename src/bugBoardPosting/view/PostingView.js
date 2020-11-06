import React, { Component } from "react";
import { Label, Input, Button } from 'semantic-ui-react'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import "./scss/posting.scss"

export default class PostingView extends Component {
    
    editorRef = React.createRef();

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            content: "", 
            isPublic: true,
            writer: props.user,
            tags : []
        }
    }
    
    render() {
        const { tags } = this.state;
        const { onAddPost } = this.props;
        
        const onInsertTag = (tag) => {
            this.setState({
                ...this.state,
                tags : tags.concat(tag)    
            });
        }
        
        const onDeleteTag = (delete_tag) => {
            this.setState({
                ...this.state,
                tags : tags.filter((tag) => {
                    return tag !== delete_tag;
                })
            })
        }
        
        let input_tag;

        const tags_deco = tags.map(tag => {
            return (
                <span>
                    <Label color='teal' size="big">
                        {tag}
                        <Label.Detail onClick ={()=>{onDeleteTag(tag)}}>X</Label.Detail>
                    </Label>
                    {' '}
                </span>
            );
        })

        return(
            <div className="posting">
                <div className="posting_header">
                    <Input placeholder='제목을 입력해주세요' size='huge' className="title" 
                        onChange = {(e) => {this.setState({
                            ...this.state,
                            title: e.target.value})}}/>
                </div>
                <br />
                <br />
                <Editor
                    height="50rem"
                    initialEditType="markdown"
                    previewStyle="vertical"
                    ref={this.editorRef}
                    onChange = {() => {
                        this.setState({
                            content: this.editorRef.current.getInstance().getHtml()
                        })
                    }}
                />
                <br />
                <br />
                <hr />
                <div className="tags">
                    {tags_deco}
                </div>
                <div className="add_tag">
                    <Input placeholder='# 태그 입력' size='large' className="input" 
                        onChange={(e) => {input_tag = e.target.value}} />
                    <Button basic color='gray' className="bt" size='large' 
                        onClick={()=> {onInsertTag(input_tag)}}> 
                        추가 
                    </Button>
                </div>
                <div className="upload">
                    <Button basic color='black' className="bt" size='huge' 
                        onClick={() => onAddPost(this.state)}> 
                        완료
                    </Button>
                </div>
            </div>
        )
    }
}
