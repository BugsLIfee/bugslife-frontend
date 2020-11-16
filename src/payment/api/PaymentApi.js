import { request } from "../../oauth/api/APIUtils";

export default class paymentApiModel {

    url = "http://localhost:8088/api/payment/";

    paymentCreate(paymentApiModel) {  

        console.log("페이먼트 API: " , paymentApiModel)
        return request({
            url: this.url,
            method: 'POST',
            body: JSON.stringify(paymentApiModel)
        });
    }
}
