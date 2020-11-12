import React, {useState} from 'react';
import { Form, Button, Header, Modal, Radio, Checkbox} from 'semantic-ui-react'
import { PGS } from './constants';
import "./scss/payment_modal.scss";

export default function PaymentModal(props) {
  // let data = {
  //   pg: 'kakaopay',                           // PG사
  //   pay_method: 'card',                           // 결제수단
  //   merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
  //   amount: 1000,                                 // 결제금액
  //   name: '아임포트 결제 데이터 분석',                  // 주문명
  //   buyer_name: '홍길동',                           // 구매자 이름
  //   buyer_tel: '01012341234',                     // 구매자 전화번호
  //   buyer_email: 'example@example',               // 구매자 이메일
  //   buyer_addr: '신사동 661-16',                    // 구매자 주소
  //   buyer_postcode: '06018',                      // 구매자 우편번호
  // };

  const point_list = [
    1000, 3000, 5000, 10000, 50000  
  ]

  const [open, setOpen] = React.useState(false);
  const { bt_text } = props
  const [pg_type, setPgType] = useState();
  const [point_type, setPointType] = useState();
  const [payment_type, setPaymentType] = useState('normal');
  const [visible, setVisible] = useState();
  const [allAgree, setAllAgree] = useState();
  const [agree1, setAgree1] = useState();
  const [agree2, setAgree2] = useState();
  const [data, setData] = useState(
    {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: '1',   // 주문번호
      amount: 0,                                 // 결제금액
      name: '벅스라이프 포인트 결제',                  // 주문명
      buyer_name: '심재욱',                           // 구매자 이름
      buyer_tel: '01024029829',                     // 구매자 전화번호
      buyer_email: 'test@gmail.com',               // 구매자 이메일
      buyer_addr: '서울 송파구',                    // 구매자 주소
      buyer_postcode: '05501',                      // 구매자 우편번호
    }
  )

  const onClickPoint = (e, {value}) => {
      setPointType(value);
      setData({...data, amount:value});
  }
    
  const onClickPG = (e, {value}) => {
      setPgType(value);
      setData({...data, pg:value});
  }

  const onClickPaymentType = (e, {value}) => {
      setPaymentType(value);
      if(value==='normal')
        setVisible(false);
      else 
        setVisible(!visible);
  }

  const onClickAllAgree = (e, {value}) => {
    setAllAgree(!allAgree)
    setAgree1(!allAgree);
    setAgree2(!allAgree);
  }

  function onClickPayment() {
    //이용약관 체크 여부
    if(!agree1 || !agree2)
    {
      alert("이용약관에 동의해주세요.");
      return;
    }

    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    const userCode = 'imp19424728';
    // const userCode = 'imp59927608';
    IMP.init(userCode);

    setData({
      ...data,
      merchant_uid: `mid_${new Date().getTime()}`,
      name: "test"  
    })

    console.log(data);
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const {
      success,
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
            trigger={bt_text}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            className="payment_modal"
        >
            <Header>
                벅스라이프 포인트 결제
            </Header> 
            <Modal.Content scrolling>
              <p className="what_is_point">포인트란? </p>
              프리미엄 Q&A, IT 교육 열람 등 벅스라이프의 서비스를 더 유익하게 사용할 수 있는 화폐입니다.
              <hr />
              <div className="point_amount">
                <p>충전 포인트 </p>
                <Form className="items">
                  {point_list.map((point) => (
                      <Form.Field className="point_amount_item">
                          <Radio
                          label={`${point}P (${point}원)`}
                          name='radioGroup'
                          value={point}
                          checked={point_type === point}
                          onChange={onClickPoint}
                          />
                      </Form.Field>
                  ))}
                </Form>
              </div>
              <hr />
              <div className="payment_type">
              <p>결제수단</p>
              <Radio label='일반결제(신용카드/계좌이체/휴대폰)' 
                name='payment_type' 
                value='normal'
                className="item"
                checked = {payment_type === 'normal'}
                onChange={onClickPaymentType}/>
              <Radio label='기타결제' 
                name="payment_type"   
                value="other" 
                className="item"
                checked = {payment_type === 'other'}
                onChange={onClickPaymentType}/>
                { visible ?
                <Form className="pg_list">
                  {PGS.map((pg) => (
                      <Form.Field >
                          <Radio
                          label={pg.label}
                          name='radioGroup'
                          value={pg.value}
                          checked={pg_type === pg.value}
                          onChange={onClickPG}
                          />
                      </Form.Field>
                  ))}
                </Form>: <div />} 
              </div>
            <hr />
            <div className="total_amount">총 결제 금액 : <p> {data.amount}원</p></div>
            <div className="payment_type_confirm"> 
              {payment_type === 'normal' ? 
              <p>일반결제(신용카드/계좌이체/휴대폰)</p> : 
              <p>기타결제({PGS.find(pg => {return pg.value === data.pg}).label})</p>}
            </div>
            <div className="info_agree">
              <Checkbox label='전체 동의' onChange={onClickAllAgree} className="item"/>
              <Checkbox label='위 구매 조건 확인 및 결제진행 동의 (필수)' checked={agree1 === true} onChange={()=>setAgree1(!agree1)} className="item"/>
              <Checkbox label='벅스라이프에 거래정보 제공 동의 (필수)' checked={agree2 === true} onChange={()=>setAgree2(!agree2)} className="item"/>
            </div>
            </Modal.Content>
            <Modal.Actions>
            <Button color='red' onClick={() => setOpen(false)}>
                취소
            </Button>
            <Button color='green' onClick={onClickPayment}>결제</Button>
            </Modal.Actions>
        </Modal>

    );
}