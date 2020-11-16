
import PaymentApi from "../api/PaymentApi";
import PaymentApiModel from "../api/model/PaymentApiModel"
import { action } from "mobx";

class PaymentStore {

    paymentApi = new PaymentApi();

    @action
    async onAddPayment(paymentObj) {
        paymentObj = new PaymentApiModel(paymentObj);
        await this.paymentApi.paymentCreate(paymentObj);
    }

}

export default PaymentStore;