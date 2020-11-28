import React, { Component } from "react";
import { Label, Input, Button, Radio, Popup, Segment} from 'semantic-ui-react'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Calendar from 'react-calendar';
import swal from "sweetalert";
import 'react-calendar/dist/Calendar.css';
import "./scss/posting.scss"


export default class PostingView extends Component {
    
    editorRef = React.createRef();

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            content: "", 
            publicPost : true,
            premium: false,
            dueDate: new Date(),
            point:0,
            tags : []
        }
    }
    
    render() {
        const { tags } = this.state;
        const { onAddPost, user } = this.props;
        const today = new Date();
        
        function getFormatDate(date){
            var year = date.getFullYear();              //yyyy
            var month = (1 + date.getMonth());          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            var day = date.getDate();                   //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '-' + month + '-' + day;
        }
        // yyyy-MM-dd 포맷으로 반환
        
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

        const selectDueDate = (value) => {
            if(value<=today) { 
                swal("이미 지난 날짜입니다.");
            } else {
                this.setState({
                    ...this.state,
                    dueDate: value
                })
            }
        }

        const onClickSubmit = (post) => {
            if(user.point-this.state.point<0) {
                swal("포인트가 부족합니다!");
            } else if( this.state.premium===true && this.state.point <2000)  {
                swal("프리미엄 질문은 2000포인트부터 가능합니다.");
            }
            else {
                onAddPost(post);
            }

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
                        <h4 className="premium_sel_txt">✨ 프리미엄</h4><Radio toggle onChange={() => {this.setState({...this, premium: !this.state.premium})}}/>
                        </div>
                        <div className="premium_point_container">
                        <h4 className="premium_point_txt"> 버그 현상금</h4> 
                            <input 
                                className="premium_point" 
                                type="number" 
                                placeholder="현상금 입력"
                                onChange={(e) => {this.setState({point: e.target.value})}} />
                        </div>
                        <div className="premium_sel_container">
                            <h4 className="premium_sel_txt"> ⏱ 마감일 </h4>
                            <Popup
                                content = {
                                    <Calendar 
                                        onChange={selectDueDate}
                                        value={this.state.dueDate}
                                    />}
                                on='click'
                                pinned
                                size='tiny'
                                position='bottom left'
                                trigger = {<Segment compact size="tiny">{getFormatDate(this.state.dueDate)}</Segment>}
                            />
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
                            onClick={() => onClickSubmit(this.state)}> 
                            완료
                        </Button>
                    </a>
                </div>
            </div>
        )
    }
}
