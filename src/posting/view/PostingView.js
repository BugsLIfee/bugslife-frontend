import React, { Component } from "react";
import { Label, Input, Button } from 'semantic-ui-react'
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./scss/posting.scss"


export default class PostingView extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            tags : []
        }
    }

    render() {

        const { tags } = this.state;
        const onInsertTag = (tag) => {
            this.setState({
                tags : tags.concat(tag)    
            });
        }

        const onDeleteTag = (delete_tag) => {
            this.setState({
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
                    <Input placeholder='제목을 입력해주세요' size='huge' className="title" />
                </div>
                <br />
                <br />
                <CKEditor
                    className="ckEditor"

                    editor={ClassicEditor}
                    
                    onInit={(editor) => {
                        console.log("Editor is ready to use!", editor);
                    }}
                    
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />
                <br />
                <br />
                <hr />
                <div className="tags">
                    {tags_deco}
                </div>
                <div className="add_tag">
                    <Input placeholder='# 태그 입력' size='huge' className="input" 
                        onChange={(e) => {input_tag = e.target.value}} />
                    <Button basic color='gray' className="bt" size='huge' 
                        onClick={()=> {onInsertTag(input_tag)}}> 
                        추가 
                    </Button>
                </div>
                <div className="upload">
                    <Button basic color='black' className="bt" size='huge'> 
                        완료
                    </Button>
                </div>
            </div>
        )
    }
}