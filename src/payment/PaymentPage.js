import React, {useState} from 'react';
import { Form, Button, Header, Icon, Modal, Radio, TextArea, Dropdown } from 'semantic-ui-react'
import {
    PGS,
    METHODS_FOR_INICIS,
    QUOTAS_FOR_INICIS_AND_KCP,
} from './constants';
import { getMethods, getQuotas } from './utils';


export default function Payment(props) {
  const [open, setOpen] = React.useState(false);
  const { bt_text } = props
  const [methods, setMethods] = useState(METHODS_FOR_INICIS);
  const [quotas, setQuotas] = useState(QUOTAS_FOR_INICIS_AND_KCP);
    
  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    const userCode = 'imp19424728';
    // const userCode = 'imp59927608';
    IMP.init(userCode);


    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'payco',                           // PG사
      pay_method: 'card',                           // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
      amount: 1000,                                 // 결제금액
      name: '아임포트 결제 데이터 분석',                  // 주문명
      buyer_name: '홍길동',                           // 구매자 이름
      buyer_tel: '01012341234',                     // 구매자 전화번호
      buyer_email: 'example@example',               // 구매자 이메일
      buyer_addr: '신사동 661-16',                    // 구매자 주소
      buyer_postcode: '06018',                      // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const {
      success,
      merchant_uid,
      error_msg,
    } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return (

    <Modal
            closeIcon
            open={open}
            trigger={<div>HELLO</div>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            className="report_modal"
        >
            <Header>
                벅스라이프 포인트 결제
            </Header> 
            <Modal.Content>
                <Form className="">
                    <Dropdown search placeholder="PG사 선택" 
                        options=
                            {PGS.map(pg => {
                                const { value, label } = pg;
                                return  {value: value, key: value, text: label};
                            })}
                    />
                    <Dropdown search placeholder="결제수단" 
                        options=
                            {methods.map(pg => {
                                const { value, label } = pg;
                                return  {value: value, key: value, text: label};
                            })}
            />

                </Form>
            <hr />
            </Modal.Content>
            <Modal.Actions>
            <Button color='red' onClick={() => setOpen(false)}>
                <Icon name='remove' /> 취소
            </Button>
            <Button color='green' onClick={onClickPayment}>결제</Button>

            </Modal.Actions>
        </Modal>

    );
}