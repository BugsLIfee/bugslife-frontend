class PaymentApiModel {

    pg = "";
    payMethod = "";
    merchantUid = "";
    amount = 0;
    buyerEmail = "";
    userId = "";

    constructor(paymentObj){
        this.pg = paymentObj.pg;
        this.payMethod = paymentObj.pay_method;
        this.merchantUid = paymentObj.merchant_uid;
        this.amount = paymentObj.amount;
        this.buyerEmail = paymentObj.buyer_email;
        this.paymentObj = paymentObj.userId;
    }
}

export default PaymentApiModel;