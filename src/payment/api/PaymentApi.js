import { request } from "../../oauth/api/APIUtils";

export default class paymentApiModel {

    url = "/api/payment/";

    paymentCreate(paymentApiModel) {  
        return request({
            url: this.url,
            method: 'POST',
            body: JSON.stringify(paymentApiModel)
        });
    }
}
