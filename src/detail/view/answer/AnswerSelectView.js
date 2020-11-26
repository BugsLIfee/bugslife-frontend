import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "../scss/post.scss"

export default class AnswerSelectView extends Component {

    render() {

        function getFormatDate(date){
            var year = date.getFullYear();              //yyyy
            var month = (1 + date.getMonth());          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            var day = date.getDate();                   //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '-' + month + '-' + day;
        }

        const today = getFormatDate(new Date());
        const { answer, question, user, onSelectAnswer, onOpenChat } = this.props;
        return(
            <div className="answer_selected">
                {question.dueDate < today || question.done === true ? 
                    (answer.selected ?
                        <div>
                            <div className="selected_answer">
                                채택답변
                                <img src="../detail/selected.png" alt="selected_img" />
                            </div>
                            {question.writerId === user.id && question.premium ?
                                <div>
                                    <div className="writer_chat">
                                        <Button onClick={() =>onOpenChat(question.id , question.writerId ,answer.writerId)}>채팅요청하기</Button>
                                    </div>
                                </div>
                                :<></>
                            }   
                        </div>
                        : <></>
                    )
                    : 
                    (
                        question.writerId === user.id ? 
                        <div className="click_select" onClick={()=>{onSelectAnswer(answer.id)}}>
                            답변채택
                        </div>
                        : <></>
                    )
                }
            </div>
        )
    }
}
