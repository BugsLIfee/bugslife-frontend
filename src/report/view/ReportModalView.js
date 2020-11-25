import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Radio, Form, TextArea } from 'semantic-ui-react'
import "./scss/report_modal.scss"

export default function ReportModalView(props) {
    const [open, setOpen] = React.useState(false);
    const [report_type, setReportType] = useState();
    const { category, bt_text, onAddReport } = props;
    const handleChange = (e, { value }) => setReportType(value);

    const reportSubmit = () => {
        onAddReport({
            reportDetail : report_detail,
            reportType : report_type
        })
        setOpen(false)
    }

    let report_detail

    return (
        <Modal
            closeIcon
            open={open}
            trigger={bt_text}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            className="report_modal"
            >
            <Header>
                <i className="fas fa-concierge-bell"></i>
                &nbsp; 
                벅스라이프 게시물 신고
            </Header> 
            <Modal.Content scrolling>
            <p>
                게시물 신고는 벅스라이프 이용수칙에 맞지 않는 글을 신고하는 기능이며, 반대 의견을 표시하는 것이 아닙니다.
                여러분들의 관심과 신고가 건전하고 올바른 벅스라이프 문화를 만듭니다. 허위 신고의 경우 신고자가 제재받을 수 있음을 유념해주세요.
            </p>
            <hr />
                <div className="category_title">
                    신고사유 <span>여러 사유에 해당하는 경우 대표적인 사유 1개를 선택해주세요.</span>    
                </div>
                <Form className="category">
                    {category.map((type, index) => (
                        <Form.Field className="item" key = { index }>
                            <Radio
                            label={type}
                            name='radioGroup'
                            value={type}
                            checked={report_type === type}
                            onChange={handleChange}
                            />
                        </Form.Field>
                    ))}
                </Form>
            <hr />
            <div className="detail">
                상세내용(선택)
                <br />
                <br />
                <TextArea onChange={(e) => {report_detail = e.target.value}}/>
            </div>
            </Modal.Content>
            <Modal.Actions>
            <Button color='red' onClick={() => setOpen(false)}>
                <Icon name='remove' /> 취소
            </Button>
            <Button color='green' onClick={reportSubmit}>
                <Icon name='checkmark' /> 신고
            </Button>
            </Modal.Actions>
        </Modal>
    )
}

