class PaymentApiModel {

    pg = "";
    payMethod = "";
    merchantUid = "";
    amount = 0;
    buyerEmail = "";

    constructor(paymentObj){
        this.pg = paymentObj.pg;
        this.payMethod = paymentObj.pay_method;
        this.merchantUid = paymentObj.merchant_uid;
        this.amount = paymentObj.amount;
        this.buyerEmail = paymentObj.buyer_email;
    }
}

export default PaymentApiModel;