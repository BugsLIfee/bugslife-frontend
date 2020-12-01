import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Checkbox } from 'semantic-ui-react'
import "../scss/reportDetailModal.scss"
export default function ReportDetailModalView(props) {
    const [open, setOpen] = useState(false);
    const { bt_text, report, onReceiptReport } = props;
    const [isBlind, setIsBlind] = useState(report.is_blind);

    const onClickSubmit = () => {
        onReceiptReport(report.id, isBlind);
        setOpen(false);
    }
    

    return (
        <Modal
            closeIcon
            open={open}
            trigger={bt_text}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            className="report_detail_modal"
            >
            <Header>
                &nbsp; 
                게시물 신고 상세
            </Header> 
            <Modal.Content scrolling>
            <p className="report_meta">
                <p>
                    # {report.id} {report.reportType}
                </p>
                <p>
                    <span> 신고날짜: {report.registDate.substring(0,10)}</span>
                    <span> <a href='/'>게시글로 이동 </a></span>
                </p>
            </p>
            <hr />
                <h5>상세내용</h5>
                <div className="detail">
                    {report.reportDetail}
                </div>
            <hr />
            <div className="blind">
                <Checkbox slider label="가림처리" checked={isBlind} onChange={() => setIsBlind(!isBlind)}> </Checkbox>
                <br />
            </div>
            </Modal.Content>
            <Modal.Actions>
            <Button color='red' onClick={() => setOpen(false)}>
                <Icon name='remove' /> 취소
            </Button>
            <Button color='green' onClick={onClickSubmit}>
                <Icon name='checkmark' /> 처리완료
            </Button>
            </Modal.Actions>
        </Modal>
    )
}

