import React, { Component } from "react";
import { Label, Input, Button, Radio } from 'semantic-ui-react'
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
            isPremium:false,
            point:0,
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
                    
                    <div className="posting_premium">
                        <div className="premium_sel_container">
                        <h4 className="premium_sel_txt">✨ 프리미엄</h4><Radio toggle />
                        </div>
                        <div className="premium_point_container">
                        <h4 className="premium_point_txt"> 버그 현상금</h4> 
                            <input className="premium_point" type="number" placeholder="현상금 입력"></input>
                        <button className="premium_point_btn">입력</button>
                        </div>
                    </div>

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
                    <a href="/list">
                        <Button basic color='black' className="bt" size='huge' 
                            onClick={() => onAddPost(this.state)}> 
                            완료
                        </Button>
                    </a>
                </div>
            </div>
        )
    }
}
